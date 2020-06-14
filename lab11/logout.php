<?php  
session_start();
unset($_SESSION['Username']);
setcookie("Username", "", -1);
unset($_SESSION['UserName']);
setcookie("UserName", "", -1);
//echo '<script> alert("s") </script>';
header("Location: ".$_SERVER['HTTP_REFERER']);  
?>