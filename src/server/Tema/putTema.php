
<?php
	// PHP servis za azuriranje korisnika
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['id']) && isset($_POST['naziv']) && isset($_POST['kategorijaid'])  && isset($_POST['korisnikid'])) {

		$id = $_POST['id'];
		$naziv = $_POST['naziv'];
		$kategorijaid = $_POST['kategorijaid'];
    $korisnikid = $_POST['korisnikid'];
    $opis = $_POST['opis'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "update tema set naziv='".$naziv."', kategorijaid='".$kategorijaid."', korisnikid='".$korisnikid."', opis='".$opis."' where id='".$id."';";

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
