"use strict";
(function(){
    // $(function(){
    //     alert('DOM has finished loading');
    // })
//$('selector').html("value changed to")
//example: $('h2').html("I changed it");

    var contents = $('#main').html();
    alert(contents);
    var contents1 = $('#li1').html();
    alert(contents1);
    $('.codeup').css('border', 'solid 1px red')
    $('li').css('font-size', '20px')

    $('h1main').css('background-color', 'yellow')
    $('p').css('background-color', 'yellow')
    $('#h1main').click(
        function() {
            $(this).css('background-color', '#FF0');
        }
    );
    $('#para').dblclick(function(e) {
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
})();