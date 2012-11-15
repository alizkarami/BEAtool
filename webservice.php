<?php
$user = array();
$user = array([100,80,50] ,[70,70,90]);
//$user[1] = array(0, 40,20, 100);
if(isset($_GET['user'])) {
	$num = $_GET['user'];
	if(isset($user[$num])) {
	//var_dump($allData[$num]);
	$json = json_encode($user);
	echo $json;
	}
}
?>