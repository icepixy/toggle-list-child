var main = function(){
  $('.cart').on('click', function(){
    //alert("why twice");
    $('.cart').children('.dropdown-menu').toggle();
  });
  //alert("here twice?");
};

$(document).ready(main);