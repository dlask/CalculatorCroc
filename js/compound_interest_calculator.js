  $(document).ready(function() { 

               $("#compareButton").click(function(){
                   $("#chartNote").hide();
                   $("#scenario2Label").show();
                   $("#scenario1Label").fadeIn(500);
                   $("#mainContent2").fadeIn(500).css("display","inline-block");
                   $("#mainContent2").addClass('showing');
                   $("#scenarioPlug").hide();
                   $("#scenario1Plug").fadeIn(500);
                   $("#scenario2Plug").fadeIn(500);
                   $("#scenario2PlugInput").prop('checked', false);
                   if(angular.element($("#innerWrapper")).scope().calc.formulaOption == 'scenario')
                   {
                       angular.element($("#innerWrapper")).scope().calc.formulaOption = 'scenario1';
                   }
                   
                   angular.element($("#innerWrapper")).scope().$apply();
               });

               $("#closeContent2").click(function(){
                   $("#chartNote").fadeIn(500);
                   $("#scenario2Label").fadeOut(500);
                   $("#scenario1Label").fadeOut(500);
                   $("#mainContent2").fadeOut(500);
                   $("#mainContent2").removeClass('showing');
                   $("#scenario1Plug").hide();
                   $("#scenario2Plug").hide();
                   $("#scenarioPlug").fadeIn(500);
    
                   if(angular.element($("#innerWrapper")).scope().calc.formulaOption == 'scenario1')
                   {
                       angular.element($("#innerWrapper")).scope().calc.formulaOption = 'scenario';
                   }
                   else if(angular.element($("#innerWrapper")).scope().calc.formulaOption == 'scenario2')
                   {
                        angular.element($("#innerWrapper")).scope().calc.formulaOption = 'variables';
                   }
                   
                   angular.element($("#innerWrapper")).scope().$apply();
               });     
    });


    function Controller($scope) {
            $scope.calc = {
                
               principal: 1000,
               addition:0,
               interestRate: 5,
               times:1,
               years:10,
               principal2: 500,
               addition2:0,
               interestRate2: 5,
               times2:1,
               years2:10,
               chartOption:'area',
               formulaOption:'variables',
               futureValue: function()
               { 
                   var x = $scope.calc;
                   var myArray = [];
                   if($("#mainContent2").hasClass('showing'))
                   {
                       
                       if($.isNumeric(x.years) && x.years > 0 && $.isNumeric(x.years2) && x.years2 > 0) 
                        {
                            myArray.push(['Year','Scenario 1','Scenario 2']);
                            var maxYear = parseFloat(x.years2);
                            if(parseFloat(x.years) > parseFloat(x.years2))
                            {
                                maxYear = parseFloat(x.years);
                            }
                           for(var i =1; i<=maxYear; i++)
                           {
                               if(i > x.years)
                               {
                                   myArray.push([i,parseFloat((((x.addition/x.times) * ((Math.pow((1 + ((x.interestRate/100)/x.times)),((x.times * x.years)+1)) - (1 +((x.interestRate/100)/x.times)))/((x.interestRate/100)/x.times))) + (x.principal * Math.pow((1 + ((x.interestRate/100)/x.times)),(x.times * x.years)))).toFixed(2)),parseFloat((((x.addition2/x.times2) * ((Math.pow((1 + ((x.interestRate2/100)/x.times2)),((x.times2 * i)+1)) -(1 +((x.interestRate2/100)/x.times2)))/((x.interestRate2/100)/x.times2))) + (x.principal2 * Math.pow((1 + ((x.interestRate2/100)/x.times2)),(x.times2 * i)))).toFixed(2))]);
                               }
                               else if(i >x.years2)
                               {
                                   myArray.push([i,parseFloat((((x.addition/x.times) * ((Math.pow((1 + ((x.interestRate/100)/x.times)),((x.times * i)+1)) -(1 +((x.interestRate/100)/x.times)))/((x.interestRate/100)/x.times))) + (x.principal * Math.pow((1 + ((x.interestRate/100)/x.times)),(x.times * i)))).toFixed(2)),parseFloat((((x.addition2/x.times2) * ((Math.pow((1 + ((x.interestRate2/100)/x.times2)),((x.times2 * x.years2)+1)) -(1 +((x.interestRate2/100)/x.times2)))/((x.interestRate2/100)/x.times2))) + (x.principal2 * Math.pow((1 + ((x.interestRate2/100)/x.times2)),(x.times2 * x.years2)))).toFixed(2))]);
                               }
                               else{
                                   
                                   myArray.push([i,parseFloat((((x.addition/x.times) * ((Math.pow((1 + ((x.interestRate/100)/x.times)),((x.times * i)+1)) -(1 +((x.interestRate/100)/x.times)))/((x.interestRate/100)/x.times))) + (x.principal * Math.pow((1 + ((x.interestRate/100)/x.times)),(x.times * i)))).toFixed(2)),parseFloat((((x.addition2/x.times2) * ((Math.pow((1 + ((x.interestRate2/100)/x.times2)),((x.times2 * i)+1)) -(1 +((x.interestRate2/100)/x.times2)))/((x.interestRate2/100)/x.times2))) + (x.principal2 * Math.pow((1 + ((x.interestRate2/100)/x.times2)),(x.times2 * i)))).toFixed(2))]);
                               }
                           }
                            
                           function drawChartBoth() {
                            var data = google.visualization.arrayToDataTable(myArray);

                               var formatterYears = new google.visualization.NumberFormat({
                                    pattern: 'Year #,###'
                                });

                                var formatterDollars = new google.visualization.NumberFormat({
                                    pattern: '$#,###.##'
                                });

                                formatterYears.format(data,0);
                                formatterDollars.format(data, 1);
                                formatterDollars.format(data, 2);

                            var options = {
                              title: 'Value by Year',
                              vAxis: {format: '$#,###',viewWindow: {min:0}},
                              titleTextStyle: {fontName: 'Aleo', fontSize: '30' },
                              legend: { position: 'bottom' },
                              backgroundColor: 'transparent'  
                            };
                               
                            if(x.chartOption == 'area')
                            {
                                var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
                            }
                            else if(x.chartOption == 'line')
                            {
                                var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                            }
                            else
                            {
                                var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                            }
                               
                            chart.draw(data, options);
                            $("text:contains(" + options.title + ")").attr({'x':'355', 'y':'60'});
                          } 
                            
                          google.load("visualization", "1", {packages:["corechart"],callback: drawChartBoth});
                        }
                       
                       else
                       {
                           $("#chart_div").html("<p id='errorMessage'>Years to Grow Must be A Number Greater Than 0.<p/>");
                           $("#errorMessage").effect( "shake" );
                       }    
                       
                   }
                   
                   else
                   {
                        if($.isNumeric(x.years) && x.years > 0) 
                        {
                            myArray.push(['Year','Scenario 1']);
                           for(var i =1; i<=x.years; i++)
                           {
                               myArray.push([i,parseFloat((((x.addition/x.times) * ((Math.pow((1 + ((x.interestRate/100)/x.times)),((x.times * i)+1)) - (1 +((x.interestRate/100)/x.times)))/
                                           ((x.interestRate/100)/x.times))) + (x.principal * Math.pow((1 + ((x.interestRate/100)/x.times)),(x.times * i)))).toFixed(2))]);
                           }

                           function drawChartSingle() {
                            var data = google.visualization.arrayToDataTable(myArray);

                               var formatterYears = new google.visualization.NumberFormat({
                                    pattern: 'Year #,###'
                                });

                                var formatterDollars = new google.visualization.NumberFormat({
                                    pattern: '$#,###.##'
                                });

                                formatterYears.format(data,0);
                                formatterDollars.format(data, 1);

                            var options = {
                              title: 'Value by Year',
                              vAxis: {format: '$#,###',viewWindow: {min:0}},
                              titleTextStyle: {fontName: 'Aleo', fontSize: '30' },
                              legend: { position: 'none' },
                              backgroundColor: 'transparent'  
                            };

                            if(x.chartOption == 'area')
                            {
                                var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
                            }
                            else if(x.chartOption == 'line')
                            {
                                var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                            }
                            else
                            {
                                var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                            }
                               
                            chart.draw(data, options);
                            $("text:contains(" + options.title + ")").attr({'x':'355', 'y':'60'});
                          }  
                            google.load("visualization", "1", {packages:["corechart"],callback: drawChartSingle});
                        }
                       
                       else
                       {
                           $("#chart_div").html("<p id='errorMessageGraph'>Years to Grow Must be A Number Greater Than 0.<p/>");
                           $("#errorMessageGraph").effect( "shake" );
                       }
                       
                   } 
                   
                   if(x.formulaOption == 'variables')
                   {
                       $("#formula").html('$$F = S(1 + r/n)^(nt) + (A/n)( ( (1 + r/n)^(nt+1) – (1 + r/n)) / (r/n) )$$');
                       M.parseMath(document.getElementById('formula'));
                   }
                   else if(x.formulaOption == 'scenario' || x.formulaOption == 'scenario1')
                   {
                        $("#formula").html('$$F = '+ x.principal+'(1 + ' + x.interestRate/100 +'/' + x.times +')^(' + (x.times*x.years) + 
                        ') + ('+x.addition+'/'+x.times+')( ( (1 +'+ x.interestRate/100 +'/' + x.times +')^(' + (x.times*x.years + 1) + ') – (1 + '+ x.interestRate/100 +'/' + x.times +')) / ('
                        + x.interestRate/100 +'/' + x.times +') )$$');
                       M.parseMath(document.getElementById('formula'));
                   }
                   else
                   {
                        $("#formula").html('$$F = '+ x.principal2+'(1 + ' + x.interestRate2/100 +'/' + x.times2 +')^(' + (x.times2*x.years2) + 
                        ') + ('+x.addition2+'/'+x.times2+')( ( (1 +'+ x.interestRate2/100 +'/' + x.times2 +')^(' + (x.times2*x.years2 + 1) + ') – (1 + '+ x.interestRate2/100 +'/' +
                        x.times2 +')) / ('+ x.interestRate2/100 +'/' + x.times2 +') )$$');
                       M.parseMath(document.getElementById('formula'));
                   }
                   
                   if($("#mainFormula").width() >= (($("#innerWrapper").width()*.8)-1))
                   {
                       $("#formula").html("<p id='errorMessageFormula'>Numbers too large to plug into formula.<p/>");
                       $("#errorMessageFormula").effect( "shake" );
                   }
                   
                 return (((x.addition/x.times) * ((Math.pow((1 + ((x.interestRate/100)/x.times)),((x.times * x.years)+1)) - (1 +((x.interestRate/100)/x.times)))/((x.interestRate/100)/x.times))) + (x.principal * Math.pow((1 + ((x.interestRate/100)/x.times)),(x.times * x.years))));
            },
             futureValue2: function()
               { 
                   var x = $scope.calc;
                   
                 return (((x.addition2/x.times2) * ((Math.pow((1 + ((x.interestRate2/100)/x.times2)),((x.times2 * x.years2)+1)) - (1 +((x.interestRate2/100)/x.times2)))/((x.interestRate2/100)/x.times2))) + (x.principal2 * Math.pow((1 + ((x.interestRate2/100)/x.times2)),(x.times2 * x.years2))));
            }
        }
       }