<?php

// PHP servis za dohvatanje svih kategorija
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$result = "[";

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, naziv, opis FROM kategorija";
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $naziv, $opis);

  if ($query->num_rows > 0) {

	$first = true;
	while($row = $query->fetch()){

		if(!$first){
			$result .=",";
		}

		$result .= "{ \"id\":".$id.", \"naziv\":\"".$naziv."\", \"opis\":\"".$opis."\"}";
		$first = false;
	}
}
  $query->close();

$result .= "]";
echo $result;

?>
