<?php
	// PHP POST servis za snimanje korisnikas u bazu
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['ime']) && isset($_POST['prezime'])&& isset($_POST['korisnickoime']) && isset($_POST['lozinka'])) {

		$ime = $_POST['ime'];
		$prezime = $_POST['prezime'];
    $korisnickoime = $_POST['korisnickoime'];
    $lozinka = md5($_POST['lozinka']);
    $blokiran = $_POST['blokiran'];
    $blokirando = $_POST['blokirando'];
    $tip = $_POST['tip'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "INSERT INTO korisnik(ime, prezime, korisnickoime, lozinka, blokiran, blokirando, tip) VALUES ('".$ime."', '".$prezime."', '".$korisnickoime."', '".$lozinka."', '".$blokiran."', '".$blokirando."', ".$tip.");";

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
