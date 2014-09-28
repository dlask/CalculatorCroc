function Controller($scope) {

    $scope.calc = {

                    number:5,
                    age:15,
                    fur:4,
                    neck:45,
                    spit:40,
                    attitude:5,
                    formulaOption:'variables',
                    llamaPower: function()
                    {
                        var x = $scope.calc;
                        
                        if(x.formulaOption == 'variables')
                        {
                            $("#formula").html('$$P = (n * ((k*s)/f))^2/((y/100)*a)$$');
                            M.parseMath(document.getElementById('formula'));
                        }
                        else
                        {
                            $("#formula").html('$$P = (' + x.number + '* ((' + (x.neck * x.spit) + ')/' + x.fur + '))^2/((' + (x.age/100) + ')*' + x.attitude + ')$$');
                            M.parseMath(document.getElementById('formula'));
                        }
                        
                        return Math.pow((x.number * ((x.neck*x.spit)/x.fur)),2)/((x.age/100)*x.attitude);
                    },
                    llamaAtomicPower: function()
                    {
                        var x = $scope.calc;
                        return x.llamaPower()/50000000;
                    }
    }
}

