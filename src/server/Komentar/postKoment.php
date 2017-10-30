<?php
	// PHP POST servis za snimanje kategorija u bazu
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['korisnikid']) && isset($_POST['tekst'])&& isset($_POST['temaid'])) {

		$korisnikid = $_POST['korisnikid'];
		$tekst = $_POST['tekst'];
    $temaid = $_POST['temaid'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "INSERT INTO komentar(korisnikid, tekst, temaid) VALUES ('".$korisnikid."', '".$tekst."', '".$temaid."');";

		$result = $db->query($sql);

		if ($result){
			echo '{ "result":"success"}';
		}
		else{
			echo '{ "result":"error"}';
		}

		$db->close ();
	}
	else{

		echo '{ "result":"prazan post objekat"}';
	}
?>
