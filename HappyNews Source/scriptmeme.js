$(document).ready(function(){
var j = 0;

$(".news-list").toggleClass('news-section-active')
$(".hamburger").click(function() {
    $(".hamburger").toggleClass('toggle');
    $(".hamburger-menu").toggleClass('hamburger-active');

});

$.getJSON("https://www.reddit.com/r/wholesomememes/.json", function(data){
    console.log(data.data.children);
});
});