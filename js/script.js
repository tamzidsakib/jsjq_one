// JS
// textchange
function textChange(){
	document.getElementById('h2').innerHTML="Hello World";
}
// date
function showDate(){
	document.getElementsByClassName('h2')[0].innerHTML= Date();
}





// jq

$(document).ready(function(){

// hide
$('.hide').click(function(){
	$('.h3').hide();
})
// show
$('.show').click(function(){
	$('.h3').show();
})
// toggle
$('.toggle').click(function(){
	$('.h3').toggle();
})


// fade_in
$('#fin').click(function(){
	$('.h4').fadeIn();
});
// fade_out
$('#fout').click(function(){
	$('.h4').fadeOut(1000);
});
// fade_toggle
$('#ftog').click(function(){
	$('.h4').fadeToggle(500);
});
// fade_to
$('#fto').click(function(){
	$('.h4').fadeTo(500, .4);
});



// slide
$('.head').click(function(){
	$('.content').slideToggle(500);
});


// zoom
$('#bzoom').click(function(){
	$('#zoom').animate({
		width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
},1500);
});

})
