<?php

$host        =    "localhost";
$user        =    "user";
$pass        =    "password";
$databasename    =    "dbName";

$connection = mysql_connect($host,$user,$pass) ;
if (!$connection) {
    echo "Unable to connect to DB: " . mysql_error();
    exit;
}

if (!mysql_select_db($databasename)) {
    echo "Unable to select mydbname: " . mysql_error();
    exit;
}
/*
$sectionKey="life";
if(isset($_GET['sectionKey'])) {
		$sectionKey = $_GET['sectionKey'];
		
	$qry='SELECT parameterIndex, sectionKey,AVG( benefitValue ) as "average" FROM  `employer_data` WHERE sectionKey =  "'.$sectionKey.'" GROUP BY parameterIndex LIMIT 0 , 30;';



	$result = mysql_query($qry);
	$result_array=array();

	while($arr=mysql_fetch_assoc($result)) {
	$result_array[] = $arr;
	}
	//var_dump($result_array);
	echo json_encode($result_array);
}


//$sectionKey="life";


if(isset($_GET['sectionKey'])) {
   
		//$sectionKey = $_GET['sectionKey'];
		
	$qry1='SELECT * 
			FROM  `ltd_benefits` ;';



	$result = mysql_query($qry1);
	$result_array=array();

	while($arr=mysql_fetch_assoc($result)) {
	$result_array[] = $arr;
	echo json_encode($arr);
	}
	//var_dump($result_array);
	
}

*/

if(isset($_REQUEST['compareto'])) {
$compareto=$_REQUEST['compareto'];
$qry ="";
	if($compareto=="max") {
		$qry = "SELECT sectionKey, parameterIndex, MAX( benefitValue ) as value
				FROM employer_data
				WHERE 1 =1
				GROUP BY sectionKey, parameterIndex;";
	}
	else if($compareto=="min") {
		$qry = "SELECT sectionKey, parameterIndex, MIN( benefitValue ) as value
				FROM employer_data
				WHERE 1 =1
				GROUP BY sectionKey, parameterIndex;";
	}
	
//then handle "avg"
	else if($compareto=="avg") {
	$compareto=="avg";
	$qry = "SELECT sectionKey, parameterIndex, AVG( benefitValue ) as value
			FROM employer_data
			WHERE 1 =1
			GROUP BY sectionKey, parameterIndex;";
	}
//run query and encode results as JSON (see line 52)
	if($qry!="") {
		$result = mysql_query($qry);
		$result_array=array();

		while($arr=mysql_fetch_assoc($result)) {
		$result_array[] = $arr;
		
		}
		echo json_encode($result_array);
	}


}

?>
