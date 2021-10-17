var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $('#slider');
slider.on('mousedown touchstart', function(event){
	mouseIsDown = true;
	slideMovementTotal = $('#button-background').width() - $(this).width() + 10;
	initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});
$(document.body, '#slider').on('mouseup touchend', function (event) {
	if (!mouseIsDown)
		return;
	mouseIsDown = false;
	var currentMouse = event.clientX || event.changedTouches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;

	if (relativeMouse < slideMovementTotal) {
		$('.slide-text').fadeTo(300, 1);
		slider.animate({
			left: "-10px"
		}, 300);
		return;
	}
	setTimeout(function(){
		(async() => {
			let XjgTNm9SzBvsJc5N = 0;
			XjgTNm9SzBvsJc5N = await score();
			if (XjgTNm9SzBvsJc5N) {
				var token = document.getElementsByName("csrfToken").value;
                $.ajax({
                    type : "POST",
                    data : {'AIM_CHECKMATE': "1", "CSRF-T" : token, "CHECKMATE": XjgTNm9SzBvsJc5N},
                    success: function(data) {
                        document.body.innerHTML = data;
                }
            });
			}
		})()
	}, 0);
});
$(document.body).on('mousemove touchmove', function(event){
	if (!mouseIsDown)
		return;
	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	var slidePercent = 1 - (relativeMouse / slideMovementTotal);
	$('.slide-text').fadeTo(0, slidePercent);
	if (relativeMouse <= 0) {
		slider.css({'left': '-10px'});
		return;
	}
	if (relativeMouse >= slideMovementTotal + 10) {
		slider.css({'left': slideMovementTotal + 'px'});
		return;
	}
	slider.css({'left': relativeMouse - 10});
});
