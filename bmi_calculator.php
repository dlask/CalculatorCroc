<!DOCTYPE HTML>
<html>

<head>
    <title>BMI Calculator</title>
    <meta charset="UTF-8">
    <meta name="description" content="Bmi calculator, bmi formula, and bmi chart. The best body mass index aka bmi calculator and information on the web!">
    <meta name="keywords" content="bmi calculator,bmi formula,bmi,calculator,formula,chart,body,mass,index">
    <meta name="author" content="Dan Lasker">
    
    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="js/jquery.ui.touch-punch.min.js"></script>
    <link href="css/jquery-ui.css" rel="stylesheet" type="text/css">
    
    <script type="text/javascript" src="https://www.google.com/jsapi" ></script>
    
    <link href="mathScribe/jqmath-0.4.0.css" rel="stylesheet" type="text/css" >
    <script src="mathScribe/jqmath-etc-0.4.0.min.js" ></script>
    <script src="mathScribe/jscurry-0.3.0.js" ></script>
    
    <link href="css/universal.css" rel="stylesheet" type="text/css">
    <link href="css/bmi_calculator.css" rel="stylesheet" type="text/css" class='remove'>
    <script src="js/universal.js"></script> 
    <script src="js/bmi_calculator.js" class='remove'></script> 
    
    <link rel="shortcut icon" href="images/calculator.ico" />
    
</head>

<body>
    <div id='wrapper'>
        
        <div id='navBar'>
            <?php include_once "navBar.php";?>
        </div>
        
        <div id='ajaxWrapper'>
            <?php include_once "html/bmi_calculator.html";?>
        </div>
        
    </div>
    
    <div id='sideNav'>
        <?php include_once "sideNav.php";?>
    </div>
    
</body>
    
    
</html>