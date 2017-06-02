$(document).ready(function() {
	$('#pagepiling').pagepiling({
     direction: 'vertical',
     verticalCentered: false,
     anchors: ['intro', 'work', 'contact'],
     menu: '#menu',
     loopBottom: true
  });
});
