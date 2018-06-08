$(document).ready(function(){
	'use strict';

	$('#infomodal').on('show.bs.modal', function (e) {
		var $this = $(e.relatedTarget),
			id = $this.data('id'),
			url = id;

		$.ajax({
			url: url
		}).done(function(data) {
			$('#infomodal .modal__text').html(data);
		});
	});


	$('#card').on('shown.bs.modal', function (e) {
		$('#card-slider').slick('reinit');
		 $('#card #focus').trigger('focus')
	});

	$('#card').on('show.bs.modal', function (e) {
		 // $('.card__gallery .slick-current').trigger('click')
	})

	// scroll page
	$('nav a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-98
				}, 1000);
				return false;
			}
		}
	});

	// var thank = '<div class="thank text-center"><p>Спасибо за заказ продукта на нашем сайте. В ближайщее время с вами свяжутся наши менеджеры для уточнения всех деталей.</p></div>';
	var thank = '<div class="thank text-center"><p>В ближайщее время с вами свяжутся наши менеджеры для уточнения всех деталей</p></div>';
	var errorTxt = 'Возникла ошибка при отправке заявки!';
	$('#qorder-form').validate({
		submitHandler: function(form){
			var strSubmit=$(form).serialize();
			// $(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thank);
					startClock('qorder-form');
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});


	$('#slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Назад"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Вперед"></button>',
		autoplay: false,
		autoplaySpeed: 4000
	});


	$('#reviews-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '',
		nextArrow: '',
		autoplay: false,
		autoplaySpeed: 4000,
		dots: true,
		responsive: [
			{
			  breakpoint: 630,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 580,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '70px'
			  }
			},
			{
			  breakpoint: 490,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '40px'
			  }
			},
			{
			  breakpoint: 430,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '20px'
			  }
			},
			{
			  breakpoint: 380,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '10px'
			  }
			},
			{
			breakpoint: 350,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '20px'
			  }
			}
		]
	});

	$('#actions-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		prevArrow: '',
		nextArrow: '',
		autoplay: false,
		autoplaySpeed: 4000,
		dots: true,
		responsive: [
			{
			  breakpoint: 1199,
			  settings: {
			    slidesToShow: 2
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
			    slidesToShow: 2
			  }
			},
			{
			  breakpoint: 630,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '110px'
			  }
			},
			{
			  breakpoint: 580,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '70px'
			  }
			},
			{
			  breakpoint: 490,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '40px'
			  }
			},
			{
			  breakpoint: 430,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '20px'
			  }
			},
			{
			  breakpoint: 380,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '10px'
			  }
			},
			{
			breakpoint: 350,
			  settings: {
			    slidesToShow: 1,
			    centerMode: true,
			    centerPadding: '15px'
			  }
			}
		]
	});


	$('#card-slider').slick({
		slidesToShow: 7,
		slidesToScroll: 5,
		prevArrow: '',
		nextArrow: '',
		dots: false,
		infinite: false,
		responsive: [
			{
			  breakpoint: 1199,
			  settings: {
			    slidesToShow: 5
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
			    slidesToShow: 4
			  }
			},
			{
			  breakpoint: 761,
			  settings: {
			    slidesToShow: 3
			  }
			},
			{
			  breakpoint: 490,
			  settings: {
			    slidesToShow: 2,
			    centerPadding: '40px'
			  }
			},
			{
			  breakpoint: 430,
			  settings: {
			    slidesToShow: 1,
			    centerPadding: '20px'
			  }
			},
			{
			  breakpoint: 380,
			  settings: {
			    slidesToShow: 1,
			    centerPadding: '10px'
			  }
			},
			{
			breakpoint: 350,
			  settings: {
			    slidesToShow: 1,
			    centerPadding: '15px'
			  }
			}
		]
	});	

	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				h = $(document).height();
				$('body').addClass('o-menu');
				$('#navbar').height(h);

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
				$('#navbar').height('auto');
			};
		init();
	});	

	$('#totop').click(function (){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		return false;
	});
});

// =заглушка для IE
//event listener: DOM ready
// function addLoadEvent(func) {
// 	var oldonload = window.onload;
// 	if (typeof window.onload != 'function') {
// 		window.onload = func;
// 	} else {
// 		window.onload = function() {
// 			if (oldonload) {
// 				oldonload();
// 			}
// 			func();
// 		}
// 	}
// }
//call plugin function after DOM ready
// addLoadEvent(function(){
// 	outdatedBrowser({
// 		bgColor: '#f25648',
// 		color: '#ffffff',
// 		lowerThan: 'transform',
// 		languagePath: '/outdatedbrowser/lang/ru.html'
// 	})
// });
// =/заглушка для IE




$(document).on('click', '.switchpic', function(e){
	e.preventDefault();
	let $this = this,
		$link = this.href;

	try{
		document.querySelector('.switchpic.active').classList.remove('active');			
	}
	catch(e){
	};

	this.classList.add('active');
	document.querySelector('#mainImg').src = $link;
});


$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').attr('disabled', true);
		}
	})
});




var timer,
	sec = 3;


function showTime(sendform){
	sec = sec-1;
	if (sec <=0) {
		stopClock();

		let form = $('#' + sendform);

		 form.find('.thank').fadeOut('normal',function(){
			form.find('.thank').remove();
			form.find('.form-control, textarea').val('');
		});
}
}
function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 3;
}

function startClock(sendform){
	if (!timer)
		timer = window.setInterval("showTime('" + sendform + "')",1000);
}
