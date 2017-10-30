
<?php
	// PHP servis za azuriranje korisnika
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['id']) && isset($_POST['ime']) && isset($_POST['prezime'])  && isset($_POST['korisnickoime'])) {

		$id = $_POST['id'];
		$ime = $_POST['ime'];
		$prezime = $_POST['prezime'];
    $korisnickoime = $_POST['korisnickoime'];
    $lozinka = md5($_POST['lozinka']);
    $blokiran = $_POST['blokiran'];
    $blokirando = $_POST['blokirando'];
    $tip = $_POST['tip'];

		$bInt = $blokiran?1:0;

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "update korisnik set ime='".$ime."', prezime='".$prezime."', korisnickoime='".$korisnickoime."', lozinka='".$lozinka."', blokiran=".$bInt.", blokirando='".$blokirando."', tip=".$tip." where id='".$id."';";

		$result = $db->query($sql);

		if ($result){
			echo '{ "result":"success",';
			echo ' "id": "';
			echo stripslashes($id);
			echo '"}';
		}
		else{
			echo '{ "result":"error",';
			echo ' "id": "';
			echo stripslashes($id);
			echo '"}';
		}

		$db->close ();
	}
	else{

		echo '{ "result":"prazan post objekat"}';
	}
?>
