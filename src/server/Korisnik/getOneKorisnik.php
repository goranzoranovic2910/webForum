<?php

// PHP servis za dohvatanje korisnika
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$id = $_GET['id'];

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT id, ime, prezime, korisnickoime, lozinka, blokiran, blokirando, tip FROM korisnik where id=".$id;
$query = $db->prepare($sql);
$query->execute();
$query->store_result();
$query->bind_result($id, $ime, $prezime, $korisnickoime, $lozinka, $blokiran, $blokirando, $tip);
$result = "";

if ($query->num_rows > 0) {
	while($row = $query->fetch()){
		$result .= "{ \"id\":".$id.", \"ime\":\"".$ime."\", \"prezime\":\"".$prezime."\", \"korisnickoime\":\"".$korisnickoime."\", \"lozinka\":\"".$lozinka."\", \"blokiran\":\"".$blokiran."\", \"blokirando\":\"".$blokirando."\", \"tip\":\"".$tip."\"}";

	}
}

$query->close();

echo $result;

?>
