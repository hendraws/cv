//event pada saat link di klik
$('.page-scroll').on('click',function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo');

	e.preventDefault();

});


//paralax
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');

}); 






//parallax 
$(window).scroll(function() {

	//jumbotron 
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/5 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/3 +'%)'
	});

		$('.jumbotron P').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
	});

	//portfolio
	if( wScroll > $('.portfolio').offset().top -250){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});


		// 
	}

		//portfolio
	if( wScroll > $('.about').offset().top -250){
		$('.about .pTengah').each(function(i){
			setTimeout(function() {
				$('.about .pTengah').eq(i).addClass('pMuncul');
			}, 200 * (i+1));
		});


		// 
	}




});