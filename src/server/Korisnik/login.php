<?php
// PHP servis za logovanje korisnika na sistem
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$_POST = json_decode(file_get_contents('php://input'),true);

if(isset($_POST['username']) && isset($_POST['password'])) {

	$username = $_POST['username'];
	$password = md5($_POST['password']);

	$db = new mysqli('localhost', 'root','', 'webForum');

	if (mysqli_connect_errno()) {
		die("Konekcija neuspesna: " . $db->connect_error);
	}

	$sql = "SELECT id, ime, prezime, korisnickoime, blokiran, blokirando, tip FROM korisnik WHERE korisnickoime=? AND lozinka=?";
  $query = $db->prepare($sql);
  $query->bind_param('ss',$username, $password);
  $query->execute();
  $query->store_result();
	$query->bind_result($id, $ime, $prezime, $korisnickoime, $blokiran, $blokirando, $tip);

  if ($query->num_rows > 0) {
		  session_start();
			$_SESSION['username'] = $username;
			while($row = $query->fetch()){
      	echo '{ "result":"true", "id":"'.$id.'", "tip":"'.$tip.'"	}';
		}

  } else{
			var_dump($query);
      echo '{ "result":"false"}';
  }
  $query->close();
}
else{
	echo '{ "result":"prazan post objekat"}';
}

?>
