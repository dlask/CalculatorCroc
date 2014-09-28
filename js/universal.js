 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54459110-1', 'auto');
  ga('send', 'pageview'); 

$(document).ready(function() { 
      
    $("#navItems a:not([id])").hide();
    $("#navItems a:not([id])").parent().hide();
    $(".noDropContent").show();
    $(".noDropContent").children().show();
  
    var goPop = false;
    
    if(history.pushState)   
    {
       $( "#sideNav a, #navBar a, #mainContent1 a").click(function( event ) {
           
           event.preventDefault();
           
           var url = window.location.pathname;
           var pageSelector = url.substring(url.lastIndexOf('/') + 1);
           var pageSelectorCloser = pageSelector.split(".");
           var oldPage =  pageSelectorCloser[0];
           
           if(oldPage == ''){oldPage = '/'};
           
           var page = $(this).attr('href');
           //only loads page if it is a new page
           if(page != oldPage)
           {
               if(page == '/'){ page = 'home';}
               var pageHtml = 'html/' + page + '.html';
               var pageCss = page + '.css';
               var pageJs = page + '.js';
               $('#loadingGif').show();
               
               var contentDisplayed = $("#innerWrapper");
               if($("#moreInfoWrapper").is(':visible'))
               {
                   contentDisplayed = $("#moreInfoWrapper");
                   $("#backArrow").hide();
               }
               
               contentDisplayed.toggle("slide", { direction: "right" }, 750,function(){

                   $('.remove').each(function()
                   {
                       $(this).remove();
                   });

                   $('head').append(("<link rel='stylesheet' type='text/css' href='css/" + pageCss +"' class='remove'>"));
                   
                   if(page != 'home')
                   {
                       $('head').append(("<script src='js/" + pageJs + "'class='remove'>"));  
                   }

                   $.get(pageHtml ,function(ajaxContent){
                        $('#ajaxWrapper').html(ajaxContent);
                        if(page == 'home')
                        {
                            history.pushState(null,null,"/");
                        }
                        else
                        {
                            history.pushState(null,null,page);
                        }
                        goPop = true;
                   }).done(function(){
                       //Hard Coded. New pages must be added to this list.
                       switch(page)
                       {
                            case 'home':
                                document.title = 'Calculator Croc'; 
                                break;
                            case 'compound_interest_calculator':
                                document.title = 'Compound Interest Calculator';
                                angular.bootstrap("#innerWrapper");
                                M.parseMath(document.getElementById('formulaExplained')); 
                                break;
                            case 'bmi_calculator':
                                document.title = 'BMI Calculator';
                                angular.bootstrap("#innerWrapper");
                                M.parseMath(document.getElementById('formulaExplained')); 
                                break;
                            case 'llama_power_calculator':
                                document.title = 'Llama Power Calculator'; 
                                angular.bootstrap("#innerWrapper");
                                M.parseMath(document.getElementById('formulaExplained')); 
                                break;
                            case 'about_contact':
                                document.title = 'About & Contact'; 
                                break; 
                       }

                        $("#innerWrapper").toggle("slide", { direction: "left" }, 750,function(){
                            $('#loadingGif').hide();
                            $('#smile').show().fadeOut(750);
                        });

                   });
               });
        }
        });  
        
        $(window).on('popstate',function()
        {
           if(goPop)
           {

              
               var url = window.location.pathname;
               var pageSelector = url.substring(url.lastIndexOf('/') + 1);
               var pageSelectorCloser = pageSelector.split(".");
               var page =  pageSelectorCloser[0];

               if(page == '/' || page == ''){ page = 'home';}
                   var pageHtml = 'html/' + page + '.html';
                   var pageCss = page + '.css';
                   var pageJs = page + '.js';
                   $('#loadingGif').show();
               
                   var contentDisplayed = $("#innerWrapper");
                   if($("#moreInfoWrapper").is(':visible'))
                   {
                       contentDisplayed = $("#moreInfoWrapper");
                       $("#backArrow").hide();
                   }
               
                   contentDisplayed.toggle("slide", { direction: "right" }, 750,function(){

                       $('.remove').each(function()
                       {
                           $(this).remove();
                       });

                       $('head').append(("<link rel='stylesheet' type='text/css' href='css/" + pageCss +"' class='remove'>"));

                       if(page != 'home')
                       {
                           $('head').append(("<script src='js/" + pageJs + "'class='remove'>"));
                       }

                       $.get(pageHtml ,function(ajaxContent){
                            $('#ajaxWrapper').html(ajaxContent);
                       }).done(function(){
                           //Hard Coded. New pages must be added to this list.
                           switch(page)
                           {
                                case 'home':
                                    document.title = 'Calculator Croc'; 
                                    break;
                                case 'compound_interest_calculator':
                                    document.title = 'Compound Interest Calculator';
                                    angular.bootstrap("#innerWrapper");
                                    M.parseMath(document.getElementById('formulaExplained')); 
                                    break;
                                case 'bmi_calculator':
                                    document.title = 'BMI Calculator';
                                    angular.bootstrap("#innerWrapper");
                                    M.parseMath(document.getElementById('formulaExplained')); 
                                    break;
                                case 'llama_power_calculator':
                                    document.title = 'Llama Power Calculator'; 
                                    angular.bootstrap("#innerWrapper");
                                    M.parseMath(document.getElementById('formulaExplained')); 
                                    break;
                                case 'about_contact':
                                    document.title = 'About & Contact'; 
                                    break;
                           }

                            $("#innerWrapper").toggle("slide", { direction: "left" }, 750,function(){
                                $('#loadingGif').hide();
                                $('#smile').show().fadeOut(750);
                            });

                       });
                   });
            }
            else
            {
                goPop = true;
            }
        });
        
    }
    else{
        $('.noDropContent').click(function()
        {
            window.location.href = $(this).find('a').attr('href');
        });
    }
    

      
      $("#innerWrapper").toggle("slide", { direction: "left" }, 750);  
      
      
      
      $("#formulaButton").click(function(){
            $("#mainFormula").fadeIn(500).css("display","inline-block");
      });
      
      $("#closeFormula").click(function(){
            $("#mainFormula").fadeOut(500);
      });
      
        var url = window.location.pathname;
        var pageSelector = url.substring(url.lastIndexOf('/') + 1);
        var pageSelectorCloser = pageSelector.split(".");
        var pageSelectorFinal = "#" + pageSelectorCloser[0];
    
      if(pageSelectorFinal == '#index' || pageSelectorFinal == '#')
      {
           $( "#navItems" ).accordion({
              collapsible: true,
              active: false,
              heightStyle: "content"
            });
      }
      else if($(pageSelectorFinal).hasClass('noDropContent'))
      {
           $( "#navItems" ).accordion({
              collapsible: true,
              active: $("#navItems h3").index(pageSelectorFinal),
              heightStyle: "content"
            });
          
          $('#sideNav').scrollTop($(pageSelectorFinal).offset().top);
      }
      else
      {
          $(pageSelectorFinal).addClass('pageHighlight');
          
          $( "#navItems" ).accordion({
              collapsible: true,
              active: $("#navItems h3").index($(pageSelectorFinal).parent().parent().parent().prev()),
              heightStyle: "content"
           });
          
          $('#sideNav').scrollTop($(pageSelectorFinal).offset().top);
      }
           
       $('#menuIcon, #closeSideNav, #innerWrapper,#moreInfoWrapper,#sideNav a, #navBar a, #mainContent1 a').click(function(){
           
            if(!$("#wrapper").hasClass('openNav') && ( $(this).attr('id') == 'innerWrapper' || $(this).attr('id') == 'moreInfoWrapper' || $(this).is('a') ) ){}
           
            else
            {
                if($("#wrapper").hasClass('openNav'))
                { 
                    $('#sideNav').removeClass('activeZ');
                    $('#closeSideNav').fadeOut(500);
                    $('#backArrow').removeClass('openContent');
                }
                else
                {
                    $('#backArrow').addClass('openContent');
                    $("#wrapper").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
                        if($("#wrapper").hasClass('openNav'))
                        {
                            $('#sideNav').addClass('activeZ');
                            $('#closeSideNav').fadeIn(500);
                        }});
                }

                $("#wrapper").toggleClass('openNav');
            }

       });
      
      $("#moreInfoButton").click(function(){
           $("#innerWrapper").toggle("slide", { direction: "right" }, 750, function()
           {
               $("#moreInfoWrapper").toggle("slide", { direction: "left" }, 750,function()
               {
                   $("#backArrow").fadeToggle(750);
               });
           });
       });

       $("#backArrow").click(function(){
           $("#backArrow").hide();
           $("#moreInfoWrapper").toggle("slide", { direction: "right" }, 750, function()
           {
               $("#innerWrapper").toggle("slide", { direction: "left" }, 750);
           });
       });
           
   });


$(document).ajaxComplete(function(){     
          
      $("#formulaButton").click(function(){
            $("#mainFormula").fadeIn(500).css("display","inline-block");
      });
      
      $("#closeFormula").click(function(){
            $("#mainFormula").fadeOut(500);
      });
    
      $("#compareButton").click(function(){
           $("#chartNote").hide();
           $("#scenario2Label").show();
           $("#scenario1Label").fadeIn(500);
           $("#mainContent2").fadeIn(500).css("display","inline-block");
           $("#mainContent2").addClass('showing');
           $("#scenarioPlug").hide();
           $("#scenario1Plug").fadeIn(500).css("display","inline-block");
           $("#scenario2Plug").fadeIn(500).css("display","inline-block");
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
    
    
      $('#sendEmail').click(function(){
        
            if($('#emailName').val().trim() == '' || $('#emailAddress').val().trim() == '' || $('#emailSubject').val().trim() == '' || $('#emailMessage').val().trim() == '')
            {
                $('#emailStatusMessage').html("<p id='status'>All fields are required.</p>");
            }

            else
            {
                $('#emailStatusMessage').html("<p id='status'Sending...</p>");
                $.post('mailScript/mail',{name:$('#emailName').val(),yourEmail:$('#emailAddress').val(),subject:$('#emailSubject').val(),message:$('#emailMessage').val(),validate:'true'})
                    .done(function(data){
                        $('#emailStatusMessage').html(data); 
                    })
                    .fail(function(){
                        $('#emailStatusMessage').html("<p id='status'>Failure Sending Mail.</p>");
                    });
            }

       });
    
      var url = window.location.pathname;
      var pageSelector = url.substring(url.lastIndexOf('/') + 1);
      var pageSelectorCloser = pageSelector.split(".");
      var pageSelectorFinal = "#" + pageSelectorCloser[0];
    
      $('.pageHighlight').removeClass('pageHighlight');
    
      if(pageSelectorFinal == '#')
      {
         $("#navItems").accordion( "option", "active", false);
      }
      else if($(pageSelectorFinal).hasClass('noDropContent'))
      {
         $("#navItems").accordion( "option", "active", $("#navItems h3").index(pageSelectorFinal));
           
      }
      else
      {
          $(pageSelectorFinal).addClass('pageHighlight');
          $("#navItems").accordion( "option", "active", $("#navItems h3").index($(pageSelectorFinal).parent().parent().parent().prev()));
      }
           
       $('#innerWrapper,#moreInfoWrapper,#mainContent1 a').click(function(){
           
            if(!$("#wrapper").hasClass('openNav') && ( $(this).attr('id') == 'innerWrapper' || $(this).attr('id') == 'moreInfoWrapper' || $(this).is('a') ) ){}
           
            else
            {
                if($("#wrapper").hasClass('openNav'))
                { 
                    $('#sideNav').removeClass('activeZ');
                    $('#closeSideNav').fadeOut(500);
                }
                else
                {
                    $("#wrapper").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
                        if($("#wrapper").hasClass('openNav'))
                        {
                            $('#sideNav').addClass('activeZ');
                            $('#closeSideNav').fadeIn(500);
                        }});
                }

                $("#wrapper").toggleClass('openNav');
            }

       });
      
      $("#moreInfoButton").click(function(){
           $("#innerWrapper").toggle("slide", { direction: "right" }, 750, function()
           {
               $("#moreInfoWrapper").toggle("slide", { direction: "left" }, 750,function()
               {
                   $("#backArrow").fadeToggle(750);
               });
           });
       });

       $("#backArrow").click(function(){
           $("#backArrow").hide();
           $("#moreInfoWrapper").toggle("slide", { direction: "right" }, 750, function()
           {
               $("#innerWrapper").toggle("slide", { direction: "left" }, 750);
           });
       });
    
    
});


