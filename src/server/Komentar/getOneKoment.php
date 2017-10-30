<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$id = $_GET['id'];

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT komentar.id, komentar.korisnikid, komentar.tekst, komentar.temaid FROM komentar where id =".$id;
//echo $sql;
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $korisnikid, $tekst, $temaid);

	$result ="";
  if ($query->num_rows > 0) {

		while($row = $query->fetch()){
			$result .= "{ \"id\":".$id.", \"korisnikid\":\"".$korisnikid."\",\"korisnickoime\":\"\", \"tekst\":\"".$tekst."\", \"temaid\":\"".$temaid."\"}";
		}
}
  $query->close();

echo $result;

?>
