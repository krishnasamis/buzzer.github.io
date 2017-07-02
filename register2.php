<?php include 'database.php'; ?>
 
<?php
 
// create a variable
$username=$_POST['Username'];
$password=$_POST['Password'];
$category=$_POST['Category'];
$email=$_POST['Email'];
 
//Execute the query

$sql="SELECT * FROM `mydatabase` WHERE Username='$username' ";
$result=mysqli_query($connect,$sql);
$count=mysqli_num_rows($result);
if($count==0)
{
	
mysqli_query($connect,"INSERT INTO `mydatabase`(`Username`, `Password`, `Category`, `Email`) 
VALUES ('$username','$password','$category','$email')");
				
	if(mysqli_affected_rows($connect) > 0){
	echo "<h1 align='center' >Registered Successfully as '$username'</h1>";
	echo "<h2 align ='center'><body background='success.jpg' style='background-size:cover;'> <a href='login.html'>Back to Login</a> </body></h2>";
} else {
	echo "<h1 align='center' > Registration Unsucessfull<br/> ";
	echo "<h2 align ='center'><body background='sorry.jpg'> <a href='Register.html'>Try Again</a> </body></h2>";
}
}
else{
	echo "<h2 align ='center'> <body background='sorry.jpg' style='background-size:cover;'>User already exists <br>";
    echo "<h5 align ='left'>redirecting to Register page......." ;

header( "refresh:2;url=Register.html" );
exit();
}
?>