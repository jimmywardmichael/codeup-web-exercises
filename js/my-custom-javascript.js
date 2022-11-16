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
    $('li1').css('font-size', '20px')
    $('li2').css('font-size', '20px')
    $('h1main').css('background-color', 'yellow')
    $('p').css('background-color', 'yellow')

})();