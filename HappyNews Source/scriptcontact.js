$(document).ready(function(){
    $(".hamburger").click(function() {
        $(".hamburger").toggleClass('toggle');
        $(".hamburger-menu").toggleClass('hamburger-active');
    
    });   
    $(".send").click(function(){
        console.log("boom boo");
        var name = $("input:text").val();
        var email = $(".email").val();
        var message = $(".message").val();
        console.log(name,email,message);
        if(name == ""){
            alert("Name must be filled out");
            return false;
        }
        if(email == undefined){
            alert("Email must be filled out");
            return false;
        }
        if(message == ''){
            alert("message must be filled out");
            return false;
        }
        var oldUrl = $('.linkdie').attr("href");
        var newUrl = oldUrl.replace("#", "mailto:vacillate20@gmail.com?subject=Hello%20Neel&body="+message);
        $('.linkdie').attr("href", newUrl);
    }) 
});