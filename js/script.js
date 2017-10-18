$(document).ready(function(){
	 $('.open').on('click', function () {
        $('nav.mobile').addClass('active');
    });

    $('.cancel').on('click', function () {
        $('nav.mobile').removeClass('active');
    })

});