<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
//echo "This was output using PHP";
//echo "<br>"; //notice we must echo tags in php.
$year = date("Y");
$time = mktime(20,20,20,4,20,$year);
if (date("L",$time)==1){ //格式化时间，并且判断是不是闰年，后面的等于一也可以省略；
    $remaining = 366 - date("z");
}else{
$remaining = 365 - date("z");}

echo "There are ". $remaining . " days left in the year";
?>
</body>
</html>