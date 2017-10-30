<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['korisnikid']) && isset($_POST['kategorijaid']) && isset($_POST['naziv'])) {

		$korisnikid = $_POST['korisnikid'];
    $kategorijaid = $_POST['kategorijaid'];
    $naziv = $_POST['naziv'];
    $opis = $_POST['opis'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "INSERT INTO tema(korisnikid, kategorijaid, naziv, opis) VALUES (".$korisnikid.", ".$kategorijaid.", '".$naziv."', '".$opis."');";

		$result = $db->query($sql);
		if ($result){
			echo '{ "result":"success"}';
		}
		else{
			echo '{ "result":"error"}'		;
		}

		$db->close ();
	}
	else{

		echo '{ "result":"prazan post objekat"}';
	}
?>
