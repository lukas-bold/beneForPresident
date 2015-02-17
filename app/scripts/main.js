// $('#carousel-main').carousel();


$('.fb-share').on('click', function () {
	_paq.push(['trackGoal', 1]);
	window.open('http://www.facebook.com/sharer/sharer.php?u=http://horst-lackner.de/', '_blank');
});

var soundModal = $('#soundModal'),
	soundWrapper = $('.soundWrapper');

$('.sound').on('click', function (e) {
	e.preventDefault;
	_paq.push(['trackGoal', 2]);

	var soundId = $(this).data('soundid');
	soundWrapper.append(
		'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+ 
		soundId +
		'&amp;auto_play=true&amp;hide_related=false&amp;visual=true"></iframe>'
	);
	soundModal.modal('show');
});

soundModal.on('hidden.bs.modal', function () {
	soundWrapper.empty();
});