<?php
	// PHP servis za azuriranje kategorija
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers: Content-Type');
	
	$_POST = json_decode(file_get_contents('php://input'),true);

	if(isset($_POST['id']) && isset($_POST['naziv']) && isset($_POST['opis'])) {

		$id = $_POST['id'];
		$naziv = $_POST['naziv'];
		$opis = $_POST['opis'];

		$db = new mysqli('localhost', 'root','', 'webforum');

		if (mysqli_connect_errno()) {
			die("Konekcija neuspesna: " . $db->connect_error);
		}

		$sql = "update kategorija set naziv='".$naziv."', opis='".$opis."' where id='".$id."';";

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
