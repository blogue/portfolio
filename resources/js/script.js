$(document).ready(function() {
	$('#pagepiling').pagepiling({
     direction: 'vertical',
     verticalCentered: false,
     anchors: ['intro', 'work', 'contact'],
     menu: '#menu',
     loopBottom: true
  });

  $('#project1').addClass('animated bounceInLeft');
  $('#project2').addClass('animated bounceInLeft');
  $('#project3').addClass('animated bounceInLeft');
});
