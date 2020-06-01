var labels= []
var values= []
/*
function numbers(data){
    console.log("happy",data)
    var Recoveries = data.data[0].recovered;
    var recoveries = document.getElementById('recoveries');
    console.log(recoveries);
    recoveries.setAttribute('data-max',Recoveries)
    document.getElementById('recoveries').innerHTML = Recoveries;
}*/
function numbers(data){
    jQuery(function ($) {
    	"use strict";
    
    	var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
        
    	var $counters = $(".counter");
        $counters.html(data.data[0].recovered);
    	/* Start counting, do this on DOM ready or with Waypoints. */
		$counters.each(function (ignore, counter) {
			var waypoint = new Waypoint( {
				element: $(this)[0],
				handler: function() { 
					counterUp(counter, {
						duration: 3000,
						delay: 16
					}); 
					this.destroy();
				},
				offset: 'bottom-in-view',
			} );
		});

	});
}
$(document).ready(function(){
    var data1 = null;
    
$.getJSON("https://corona-api.com/timeline", function(data){
    console.log(data.data[0]);
    for (x in data.data){
        //console.log(data.data[x].recovered);
        labels.push(data.data[x].date);
        values.push(data.data[x].recovered);
        
    }
    
    console.log(labels);
    console.log(values);
    const ctx = document.getElementById('mychart');
    var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: labels.reverse(),
    datasets: [
        {
            label: "Number of Recoveries",
            fill: false,
            lineTension: 0.9,
            backgroundColor: "rgba(75, 192, 192, 1)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointStyle: 'line',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHitRadius: 10,
            data: values.reverse(),
            
        }
    ]},
    options: { 
        responsive :true,
        maintainAspectRatio: false,
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'black',
                fontSize: 17,
            }
        },
    }}); 
$(".arrow").click(function() {
    console.log("hehe");
    $('html, body').animate({
        scrollTop: $("#second").offset().top
    }, 2000);
});
numbers(data)
});
$(".hamburger").click(function() {
    $(".hamburger").toggleClass('toggle');
    $(".hamburger-menu").toggleClass('hamburger-active');

});







});

