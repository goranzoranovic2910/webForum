
<?php
	// PHP servis za azuriranje komentara
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');

	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['id']) && isset($_POST['korisnikid']) && isset($_POST['tekst'])  && isset($_POST['temaid'])) {

		$id = $_POST['id'];
		$korisnikid = $_POST['korisnikid'];
		$tekst = $_POST['tekst'];
    $temaid = $_POST['temaid'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "update komentar set korisnikid='".$korisnikid."', tekst='".$tekst."', temaid='".$temaid."' where id='".$id."';";

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
