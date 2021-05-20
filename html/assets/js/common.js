$(function (){
	var tabTar = $('.js-tab');
	var prxImg = $('.parallax-img img');
	var prxVal = 8;
	tabTar.each(function () {
		tabAutoHgt ($(this));
	});

	$('body').on('click', '.js-tab li', function (e) {
		var tabRoot = $(this).closest('.js-tab');
		var tabIdx = $(this).index();
		var tabBoxItem = $('.js-tab-cont > div');

		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		tabRoot.find(tabBoxItem).removeClass('active').eq(tabIdx).addClass('active');

		var tabBoxItemHgt = tabRoot.find('.js-tab-cont .active').height() + tabPdtVal;
		tabRoot.find(tabBoxItem).parent().css({'height':tabBoxItemHgt});
	});
	
	prxImg.ready(function(){
		prxImg.each(function(){
			prxHgt ($(this));
		});
	});

	$(window).scroll(function(){
		var scrPos = $(this).scrollTop();
		prxImg.css({'transform':'translateY(' + scrPos / prxVal + 'px)'});
	});

	$('body').on('click', '.pop-open', (function () {
		var returnTar;
		return function (e) {
			var bodyWid = $('body').width();
			var wSize = $(window).width();
			var hSize = $(window).height();
			var popIdx = $(this).attr('data-pop-idx');
			var popCont = $('.layer-popup-cont');
			returnTar = $(e.target).closest('button');
			$('.layer-popup-wrap' + '[data-pop-idx=' + popIdx + ']').fadeIn(500).css('display', 'block');
			popCont.attr('tabindex', '0').fadeIn(500);
			if (wSize > 1024) {
				$('body').css({'overflow':'hidden', 'width':bodyWid});
			}
			setTimeout(function () {
				popCont.focus().append('<a href="#" class="tar-loop"></a>');
				$('.tar-loop').focusin(function () {
					popCont.focus();
				});
			}, 0);
			setTimeout(function(){
				popIdxHgt = $('.layer-popup-wrap' + '[data-pop-idx=' + popIdx + ']').find(popCont).height();
				if (hSize < popIdxHgt) {
					popCont.parent().css('height', 'auto');
					$('.layer-popup-wrap').stop().animate({scrollTop:0}, 300);
				}
			}, 500);

			$('.btn-close-popup, .layer-popup-wrap').click(function (e) {
				var tarItem = $('.layer-popup-cont > div, .layer-title, .layer-cont *');
				if (hSize < popIdxHgt) {
					$('.layer-popup-wrap').stop().animate({scrollTop:0}, 200, function(){
						popClose ();
					});
				} else {
					if (!$(e.target).is(tarItem)) {
						popClose ();
					}
				}

				function popClose () {
					$('.layer-popup-wrap').fadeOut(500);
					popCont.removeAttr('tabindex').fadeOut(500).parent().removeAttr('style');
					$('.tar-loop').remove();
					setTimeout(function () {
						returnTar.focus();
					}, 0);
					setTimeout(function () {
						if (wSize > 1024) {
							$('body').css({'overflow':'auto', 'width':'auto'});
						}
					}, 500);
				}
			});
		}
	})());

	$(window).on('resize', function () {
		tabTar.each(function () {
			tabAutoHgt ($(this));
		});

		prxImg.ready(function(){
			prxImg.each(function(){
				prxHgt ($(this));
			});
		});
	});

	function prxHgt (target) {
		var prxHgt = parseInt(target.height() / 2);
		target.css('margin-top', -prxHgt);
	}

	function tabAutoHgt (target) {
		var tabCntHgt = target.find('.js-tab-cont .active').height();
		tabPdtVal = parseInt(target.find('.js-tab-cont').css('padding-top')) * 2;
		target.find('.js-tab-cont').css('height', tabCntHgt + tabPdtVal);
	}
});