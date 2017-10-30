<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// PHP servis za dohvatanje komentara za odredjenu temu

$temaid = $_GET['temaid'];

$result = "[";

$db = new mysqli('localhost', 'root','', 'webforum');

if (mysqli_connect_errno()) {
	die("Konekcija neuspesna: " . $db->connect_error);
}

$sql = "SELECT komentar.id, komentar.korisnikid, komentar.tekst, korisnik.korisnickoime FROM komentar,korisnik where korisnik.id= komentar.korisnikid and temaid=".$temaid;
//echo $sql;
  $query = $db->prepare($sql);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $korisnikid, $tekst, $korisnickoime);

  if ($query->num_rows > 0) {

	$first = true;
	while($row = $query->fetch()){

		if(!$first){
			$result .=",";
		}

		$result .= "{ \"id\":".$id.", \"korisnikid\":\"".$korisnikid."\",\"korisnickoime\":\"".$korisnickoime."\", \"tekst\":\"".$tekst."\", \"temaid\":\"".$temaid."\"}";
		$first = false;
	}
}
  $query->close();

$result .= "]";
echo $result;

?>
