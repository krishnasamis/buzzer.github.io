<?php include 'database.php'; ?>
 
<?php
$myusername=$_POST['Username']; 
$mypassword=$_POST['Password'];
$mycategory=$_POST['Category'];

$sql="SELECT * FROM `mydatabase` WHERE Username='$myusername' and Password='$mypassword' and Category='$mycategory'";
$result=mysqli_query($connect,$sql);

// Mysql_num_row is counting table row
$count=mysqli_num_rows($result);
// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1)
{
// Register $myusername, $mypassword and redirect to file "3.html"
echo "<h2 align ='center'> <body background='success.jpg' style='background-size:cover;'> Welcome $myusername <br>";
header( "refresh:2;url=3.html" );


}
else 
{
echo "<h2 align ='center'> <body background='sorry.jpg' style='background-size:cover;'> Wrong Username or Password  <br>";
echo " <h5 align ='left'>redirecting to login page.......";

header( "refresh:2;url=login.html" );

exit();
}
?>