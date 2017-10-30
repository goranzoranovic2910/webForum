<?php

// PHP servis za dohvatanje tema iz odredjene kategorije
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$kategorijaid = $_GET['kategorijaid'];

$result = "[";

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, naziv, kategorijaid, korisnikid, opis FROM tema where kategorijaid=".$kategorijaid;
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $naziv, $kategorijaid, $korisnikid, $opis);

  if ($query->num_rows > 0) {

	$first = true;
	while($row = $query->fetch()){

		if(!$first){
			$result .=",";
		}

		$result .= "{ \"id\":".$id.", \"naziv\":\"".$naziv."\", \"kategorijaid\":\"".$kategorijaid."\", \"korisnikid\":\"".$korisnikid."\", \"opis\":\"".$opis."\"}";
		$first = false;
	}
}
  $query->close();

$result .= "]";
echo $result;

?>
