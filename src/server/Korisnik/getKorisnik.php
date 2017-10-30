<?php

// PHP servis za dohvatanje korisnika
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


$result = "[";

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, ime, prezime, korisnickoime FROM korisnik";
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $ime, $prezime, $korisnickoime);

  if ($query->num_rows > 0) {

	$first = true;
	while($row = $query->fetch()){

		if(!$first){
			$result .=",";
		}

		$result .= "{ \"id\":".$id.", \"ime\":\"".$ime."\", \"prezime\":\"".$prezime."\", \"korisnickoime\":\"".korisnickoime."\"}";
		$first = false;
	}
}
  $query->close();

$result .= "]";
echo $result;

?>
