$(document).ready(function() {
	$('#pagepiling').pagepiling({
     direction: 'vertical',
     verticalCentered: false,
     anchors: ['intro', 'work', 'contact'],
     menu: '#menu',
     loopBottom: true,
     afterLoad: function(anchorLink, index) {
       if(index == 2) {
         $('#project1').show().addClass('animated bounceInLeft');
         $('#project2').show().addClass('animated bounceInRight');
         $('#project3').show().addClass('animated bounceInLeft');
       }
     }
  });






});
