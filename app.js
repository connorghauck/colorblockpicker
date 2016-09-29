$(document).ready(function(){
    $('#theDom').append('<div id="boxblue"></div>');
    $('#theDom').append('<div id="boxred"></div>');
    $('#theDom').append('<div id="boxgreen"></div>');
    $('#theDom').append('<div id="boxyellow"></div>');


    var min = 1;
    var max = 4;

    function randomNumber(min, max){
        return Math.floor((Math.random() * max) + min);
    }


var rando = randomNumber(min, max);
    // randomNumber(min, max)



if (rando == 1){
    $('<p>Choose blue!</p>').appendTo('#theDom');
} else if (rando == 2){
    $('<p>Choose red!</p>').appendTo('#theDom');
} else if (rando == 3){
    $('<p>Choose green!</p>').appendTo('#theDom');
} else {
    $('<p>Choose yellow!</p>').appendTo('#theDom');
}



//make a loop saying that if the user clicks the correct button they will be given a congratulations prompt
//if else loop
//if "the correct button is pressed"
//alert("congratz bruh")
//else
//alert("nah son u wrong")

function clickinTimeBlue(){
if ($('#boxblue').data('clicked') && rando == 1){
 alert("proud of u!!!");
} else {
alert("no means no");
}
}

function clickinTimeRed(){
if ($('#boxred').data('clicked') && rando == 2){
 alert("u got it buddy boy!!");
} else {
alert("lol");
}
}

function clickinTimeGreen(){
if ($('#boxgreen').data('clicked') && rando == 3){
 alert("nice job chief!");
} else {
alert("nah lol");
}
}


function clickinTimeYellow(){
if ($('#boxyellow').data('clicked') && rando == 4){
 alert("way to go, champ!!!");
} else {
alert("wtf r u serius?");
}
}


$('#boxblue').click(function(){
  $(this).data('clicked', true);
  clickinTimeBlue();
});

$('#boxred').click(function(){
  $(this).data('clicked', true);
  clickinTimeRed();
});

$('#boxgreen').click(function(){
  $(this).data('clicked', true);
  clickinTimeGreen();
});

$('#boxyellow').click(function(){
  $(this).data('clicked', true);
  clickinTimeYellow();
});


});
