/* $(".button2").hover(function () {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
    $(this).css("border-radius", "20px");
}, function () {
    $(this).css("background-color", "transparent");
    $(this).css("color", "black");
    $(this).css("border-radius", "0px");
    
});
*/
$(".button2").hover(function () {
    $(this).css("background-color", "#FFBB7A");
    $(this).css("color", "black");
    $(this).css("border-color", "black")
}, function () {
    $(this).css("background-color", "black");
    $(this).css("color", "white");
    $(this).css("border-color", "white")
});


$(".button3").hover(function () {
    $(this).css("background-color", "#FFBB7A");
    $(this).css("color", "black");
    $(this).css("border-color", "black")
}, function () {
    $(this).css("background-color", "transparent");
    $(this).css("color", "white");
    $(this).css("border-color", "white")
});

$(".menuItems").hover(function () {
    $(this).css("color", "#FF7777");
}, function () {
    $(this).css("color", "black");
});

$(".footerText").hover(function () {
    $(this).css("color", "#FF7777");
}, function () {
    $(this).css("color", "white");
});

$(".mySkills").scroll(function() {
    console.log("scrolling")
  });

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            var top_of_element = $(this).offset().top + $(this).outerHeight();
            var top_of_window = $(window).scrollTop() + $(window).height();
                if( top_of_window > top_of_element ){
                    $(this).animate({'opacity':'1','margin-left':'0px'},1000);
                }
            });
        });
    });

$(document).ready(function() {
    $(".fadeonload").each(function(i) {
        $(this).animate({"opacity":"1", "margin-left":"0px"}, 1000);
    });
});



$(document).ready(function() {
    $(window).scroll(function(){
        $('.fadein').each( function(i){
            var bottom_of_element = $(this).offset().top
            var top_of_window = $(window).scrollTop() + $(window).height();
            if( top_of_window > bottom_of_element ){
                 $(this).animate({'opacity':'1'},1000);
                }
            });
        });
    });
    
