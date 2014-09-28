$(document).ready(function() { 
    
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
    
    
});