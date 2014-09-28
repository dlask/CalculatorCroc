
function Controller($scope) {
            $scope.calc = {
                
                height:5,
                height2:6,
                weight:150,
                unitsLabel:'imperialUnits',
                formulaOption:'variables',
                bmiValue: function()
                {
                    var x = $scope.calc;
                    var actualHeight = 0;
                    
                    if(x.unitsLabel == 'imperialUnits')
                    {
                        actualHeight = (x.height * 12) + parseFloat(x.height2);
                    }
                    
                    else
                    {
                        actualHeight = parseFloat(x.height) + (x.height2/100);
                    }
                    
                    if(x.unitsLabel == 'imperialUnits')
                    {
                        $('.metricUnitsLabel').hide();
                        $('.imperialUnitsLabel').fadeIn(500);
                    }

                    else
                    {
                        $('.imperialUnitsLabel').hide();
                        $('.metricUnitsLabel').fadeIn(500);
                    }
                    
                    
                    if(x.formulaOption == 'variables')
                    {
                        if(x.unitsLabel == 'imperialUnits')
                        {
                           $("#formula").html('$$BMI = (W/H^2) * 703$$');
                           M.parseMath(document.getElementById('formula'));
                        }
                        else
                        {
                           $("#formula").html('$$BMI = (W/H^2)$$');
                           M.parseMath(document.getElementById('formula'));
                        }
                    }
                    
                    else
                    {
                        if(x.unitsLabel == 'imperialUnits')
                        {
                             $("#formula").html('$$BMI = ('+x.weight+'/' + actualHeight +'^2) * 703$$');
                             M.parseMath(document.getElementById('formula'));
                        }
                        else
                        {
                            $("#formula").html('$$BMI = ('+x.weight+'/' + actualHeight +'^2)$$');
                            M.parseMath(document.getElementById('formula'));
                        }
                    }
                    
                    
                    if(x.unitsLabel == 'imperialUnits')
                    {
                        return (x.weight/(actualHeight * actualHeight)) * 703;
                    }
                    
                    else
                    {
                        return (x.weight/(actualHeight * actualHeight));
                    }
                },
                bmiStatus: function()
                {
                    var bmi = $scope.calc.bmiValue();
                    if(bmi <= 18.5)
                    {
                        return "Underweight";
                    }
                    else if(bmi < 25 )
                    {
                        return "a Normal Weight";
                    }
                    else if(bmi < 30)
                    {
                        return "Overweight";
                    }
                    else if(bmi < 35)
                    {
                        return "Obese (class 1)";
                    }
                    else if(bmi < 40 )
                    {
                        return "Obese (class 2)";
                    }
                    else
                    {
                        return "Morbidly Obese";
                    }
                }
                
                
            }
}