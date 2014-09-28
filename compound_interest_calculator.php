<!DOCTYPE HTML>
<html>

<head>
    <title>Compound Interest Calculator</title>
    <meta charset="UTF-8">
    <meta name="description" content="Compound interest calculator as well as compound interest formula and information. Annual additions allowed, values graphed, 
                                      and a comparison feature is available!">
    <meta name="keywords" content="compound interest calculator,interest calculator,compound,interest,calculator,formula,additions,annual">
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
    <link href="css/compound_interest_calculator.css" rel="stylesheet" type="text/css" class='remove'>
    <script src="js/universal.js"></script>
    <script src="js/compound_interest_calculator.js" class='remove'></script> 
    
    <link rel="shortcut icon" href="images/calculator.ico" />
    
</head>

<body>
    <div id='wrapper'>
        
        <div id='navBar'>
            <?php include_once "navBar.php";?>
        </div>
        
        <div id='ajaxWrapper'>
            <?php include_once "html/compound_interest_calculator.html";?>
        </div>
        
    </div>
    
    <div id='sideNav'>
        <?php include_once "sideNav.php";?>
    </div>
    
</body>
    
    
</html>