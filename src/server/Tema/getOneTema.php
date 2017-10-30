<?php

// PHP servis za dohvatanje tema iz odredjene kategorije
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$id = $_GET['id'];


$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, naziv, kategorijaid, korisnikid, opis FROM tema where id=".$id;
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $naziv, $kategorijaid, $korisnikid, $opis);

  if ($query->num_rows > 0) {

	$result = "";
	while($row = $query->fetch()){

		$result .= "{ \"id\":".$id.", \"naziv\":\"".$naziv."\", \"kategorijaid\":\"".$kategorijaid."\", \"korisnikid\":\"".$korisnikid."\", \"opis\":\"".$opis."\"}";
	}
}
  $query->close();

echo $result;

?>
