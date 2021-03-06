$(function(){
	const tabTar = $('.js-tab');
	const inpItem = $('.input-item');

	// gnb
	$('.bms-header .menu').on('mouseover', function(){
		$('.bms-header .sub-menu').stop().animate({height: '513px', paddingTop: '48px'},300);
		$('.bms-header .inner-content-bg').stop().animate({height: '514px'},300);
		$('.bms-header .inner-content-bg').removeClass('bd-hidden');
		$('.bms-header').addClass('menu-open');
	})

	$('.bms-header .menu .menu-first-li > a').on('mouseover',function(){
		$(this).addClass('hover').parent('li').siblings('li').find('> a').removeClass('hover');
		$('.bms-header .sub-menu').hide();
		$(this).next('.sub-menu').show().parent('li').siblings('li').find('.sub-menu').hide();
	})

	$('.bms-header .menu').on('mouseleave',function(){
		$('.bms-header .menu .menu-first-li > a').removeClass('hover');
		$('.bms-header').removeClass('menu-open');
		$('.bms-header .sub-menu').stop().animate({height: '0', padding: 0},300);
		$('.bms-header .inner-content-bg').stop().animate({height: '0'},300);
		$('.bms-header .inner-content-bg').addClass('bd-hidden');
	})

	$('.bms-header .gnb-hamburger').on('click', (e) => {
		e.preventDefault();
		$('.bms-header .right-gnb').addClass('active');
		$('html, body').css('overflow-y', 'hidden');
	})

	$('.bms-header .right-gnb .right-gnb-close').on('click', (e) => {
		e.preventDefault();
		$('.bms-header .right-gnb').removeClass('active');
		$('html, body').css('overflow-y', 'auto');
	})

	$('.bms-header .right-gnb .right-gnb-content .menu-depth03 > li').each(function(){
		if($(this).find('ul').length > 0) {
			$(this).addClass('have-ul');
		}
	})
	$('.bms-header .right-gnb .right-gnb-content .menu-depth03 > li.have-ul > a').on('click', (e) => {
		e.preventDefault();
		$(e.currentTarget).next('ul').toggle().parent('li').siblings('li').find('ul').hide();
		$(e.currentTarget).toggleClass('active').parent('li').siblings('li').find('> a').removeClass('active');
	})

	inpItem.on('keyup', function () {
		let inpItemVal = $(this).val();
		if (inpItemVal == 0) {
			$(this).parent().removeClass('active');
		} else {
			$(this).parent().addClass('active');
		}
	});

	$('.btn-reset').on('click', function (e) {
		let returnTar = $(e.target).prev();
		$(this).closest('.input-box').removeClass('active').find(inpItem).val(null);
		returnTar.focus();
	});

	$('.pop-open').on('click', function (e) {
		e.preventDefault();
		popupOpen($(this));
	});

	//checkbox all select
	$(".check-terms").on("click", ".all input", function () {
		$(this).parents(".check-terms").find('input').prop("checked", $(this).is(":checked"));
	});

	//checkbox part select
	$(".check-terms").on("click", ".normal input", function() {
		var is_checked = true;

		$(".check-terms .normal input").each(function(){
			is_checked = is_checked && $(this).is(":checked");
		});

		$(".all input").prop("checked", is_checked);
	});

	$('.btn-top-box').on('click', '.btn-top', function (e) {
		e.preventDefault();
		if (!$('.lineup-wrap').length == 0) {
			lineWrapPos = $('.lineup-wrap').offset().top;
		}
		if (!$(this).hasClass('main')) {
			$('html, body').animate({scrollTop:'0'}, '0');
			$(this).blur();
			chkBool = true;
		} else {
			$('html, body').stop().animate({scrollTop:lineWrapPos}, secVal[4], 'easeInOutQuint');
		}
	});

	// checking list
	$(document).on('click','.checking-list-box .btn-edit', (e) => {
		const $chkBox = $(e.currentTarget).parents('.checking-list-box').find('.chk-box')
		const $editBox = $(e.currentTarget).parents('.checking-list-box').find('.edit-box')
		const $listContentsTxt = $(e.currentTarget).parents('.checking-list-box').find('.list-contents')
		const $length = $chkBox.find('strong');
		let chkHtml = "<label class='chk'>";
		chkHtml += "<input name='chkList' type='checkbox'>";
		chkHtml += '<span>';
		chkHtml += '</span>';
		chkHtml += '</label>';

		const $listContentsTxtAll = $(e.currentTarget).parents('.checking-list-box').find('.list-contents-all')
		let chkHtmlAll = "<label class='chk'>";
		chkHtmlAll += "<input class='chkAll' type='checkbox'>";
		chkHtmlAll += '<span>';
		chkHtmlAll += '</span>';
		chkHtmlAll += '</label>';

		$chkBox.show();
		$editBox.hide();
		$listContentsTxt.prepend(chkHtml).addClass('active');
		$listContentsTxtAll.prepend(chkHtmlAll).addClass('active');
		$length.text('0');

		$('.checking-list-box .btn-cancel, .checking-list-box .common-toggle-btns, .checking-list-box2 .common-toggle-btns ').on('click', () => {
			$editBox.show();
			$chkBox.hide();
			$listContentsTxt.removeClass('active').children('.chk').remove();
			$listContentsTxtAll.removeClass('active').children('.chk').remove();
			$length.text('0');
			$('.checking-list-box .list').removeClass('dimm');
		});
		$('.checking-list-box li').on('click', () => {
			let length = $(".checking-list input:checkbox[name='chkList']:checked").length
			$length.text(length);
		});
		$('.checking-list-box input:checkbox').on('click', function() {
			const _this = $(this)
			const _list = $(this).closest('.list')
			if( _this.is(':checked') ) {
				_list.addClass('dimm');
			}
			else {
				_list.removeClass('dimm');
			}
		});
		$('.checking-list-box .chkAll').on('click', function() {
			const _this = $(this)
			const _chk = $(this).parents('.list-contents-all').siblings('.checking-list').find('input:checkbox')
			if( _this.is(':checked') ) {
				_chk.prop('checked',true)
			}
			else {
				_chk.prop('checked',false)
			}
		});
	});

	$(document).on('click','.checking-list-box3 .btn-edit', (e) => {
		const $chkBox = $(e.currentTarget).parents('.checking-list-box3').find('.chk-box')
		const $editBox = $(e.currentTarget).parents('.checking-list-box3').find('.edit-box')
		const $listContentsTxt = $(e.currentTarget).parents('.checking-list-box3').find('.swiper-slide')
		const $length = $chkBox.find('strong');
		let chkHtml = "<label class='chk'>";
		chkHtml += "<input name='chkList' type='checkbox'>";
		chkHtml += '<span>';
		chkHtml += '</span>';
		chkHtml += '</label>';

		$chkBox.show();
		$editBox.hide();
		$listContentsTxt.prepend(chkHtml).addClass('active');
		$length.text('0');

		$('.checking-list-box3 .btn-cancel, .checking-list-box3 .common-toggle-btns').on('click', () => {
			$editBox.show();
			$chkBox.hide();
			$listContentsTxt.removeClass('active').children('.chk').remove();
			$length.text('0');
			$('.checking-list-box3 .swiper-slide').removeClass('dimm');
		});
		$('.checking-list-box3 .swiper-wrapper').on('click', () => {
			let length = $(".checking-list-box3  input:checkbox[name='chkList']:checked").length
			$length.text(length);
		});
		$('.checking-list-box3 input:checkbox').on('click', function() {
			const _this = $(this)
			const _list = $(this).closest('.swiper-slide')
			if( _this.is(':checked') ) {
				_list.addClass('dimm');
			}
			else {
				_list.removeClass('dimm');
			}
		});
		// $('.checking-list-box .chkAll').on('click', function() {
		// 	const _this = $(this)
		// 	const _chk = $(this).parents('.list-contents-all').siblings('.checking-list').find('input:checkbox')
		// 	if( _this.is(':checked') ) {
		// 		_chk.prop('checked',true)
		// 	}
		// 	else {
		// 		_chk.prop('checked',false)
		// 	}
		// });
	});

	// ?????????&????????? ??????
	$('.checking-list-box .common-toggle-btns p, .checking-list-box2 .common-toggle-btns p').on('click', function(e){
		const $checkingList = $(e.currentTarget).parents('.checking-list-box, .checking-list-box2')
		if( $(this).index() === 0){
			$checkingList.find('.list-type').hide().siblings('.cont-type').show();
			$(this).addClass('active').siblings().removeClass('active');
		}
		else {
			$checkingList.find('.gallery-type').hide().siblings('.cont-type').show();
			$(this).addClass('active').siblings().removeClass('active');
		}
	});

	$('.bookmark').on('click',function() {
		$(this).toggleClass('active');
	});

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ){
			$('.bms-header').addClass('fixed');
			$('.btn-top-box').addClass('active');
		}
		else {
			$('.bms-header').removeClass('fixed');
			$('.btn-top-box').removeClass('active');
		}
	});

	function checkAgent () {
		let UserAgent = navigator.platform;
		let agentBrowser = navigator.userAgent.toLowerCase();
		if (UserAgent.match(/i(Phone|Pod)/i) != null) {
			$('html').addClass('ios');
		} else {
			$('html').addClass('android');
		}
		if ((navigator.appName == 'Netscape' && agentBrowser.indexOf('trident') != -1) || (agentBrowser.indexOf("msie") != -1)) {
			$('html').addClass('ie11');
		}
	}
	checkAgent ();

	// accordion common
	function accordion(){
		$('.accordion').off()
		$(document).on('click', '.accordion .tit-btn', function() {
			var accordionItem = $(this).parent('.item');
			accordionItem.toggleClass('active').siblings('.item').removeClass('active');
			$('.accordion .item').find('.cont').slideUp(0);
			if(accordionItem.hasClass('active')) {
				accordionItem.find('.cont').slideDown(300);
			} else {
				accordionItem.find('.cont').slideUp(300);
			}
		})
	};
	accordion();

	jsTab();

	customSelect();

	// autocomplete???
	function autocomplete(){
		$('.autocomplete-area .input-email').on('focus keyup',function(){
			const inputLeft = $(this).offset().left;
			const inputTop = $(this).offset().top;
			$('.autocomplete').show().offset({ left: inputLeft, top: inputTop + 30 });
		});
		$('.autocomplete > ul li, .autocomplete button').on('click', function(){
			$('.autocomplete').hide();
			$('.autocomplete-area .input-email').val('').attr('placeholder','');
		});
		$('.autocomplete > ul li').on('click', function(){
			const text = $(this).text();
			let liItem = "<li class='result-area'>";
			liItem += "<span>"+text+"</span>";
			liItem += "<button onclick='$(this).parent().remove()'></button>";
			liItem += "</li>";
			$('.autocomplete-area .input-area').before(liItem);
		});
	}
	autocomplete();

	// tooltip-box
	function tooltip () {
		$('.tooltip-btn.on').on('click', function(e){
			e.preventDefault();
			const width = $('.cont-outer').width() / 2
			const offsetL = $(this).offset().left
			const _this = $(this)


			let imgBoxInner = _this.closest('.img-box').find('.img-box-inner')
			let imgBoxInnerPosL = imgBoxInner.position().left

			if( width < offsetL ) {
				_this.closest('.img-box').find('.tooltip').css({"display":"block","right":imgBoxInnerPosL});
			}
			else {
				_this.closest('.img-box').find('.tooltip').css({"display":"block","left":imgBoxInnerPosL});
			}
			_this.hide();
			_this.siblings('.tooltip-btn.off').show();
			_this.parents('.edit-inner,.edit-template-wrap,.swiper-slide').siblings().find('.tooltip,.tooltip-btn.off').hide();
			_this.parents('.edit-inner,.edit-template-wrap,.swiper-slide').siblings().find('.tooltip-btn.on').show();
			$('.carousel-type4').find('.swiper-button-prev, .swiper-button-next').css({"z-index":"0"});

		});
		$('.tooltip-btn.off').on('click', function(e){
			e.preventDefault();
			const _this = $(this)
			_this.hide();
			_this.closest('.img-box').find('.tooltip').hide();
			_this.siblings('.tooltip-btn.on').show();
			$('.carousel-type4').find('.swiper-button-prev, .swiper-button-next').css({"z-index":"3"});
		});
		$('.swiper-button-next, .swiper-button-prev, .checking-list-box3 .btn-area').on('click mouseleave', () => {
			$('.tooltip, .tooltip-btn.off').hide();
			$('.tooltip-btn.on').show();
		});
		$('.carousel-type4 .img-box img').on('mousedown', () => {
			// alert();
			$('.carousel-type4').find('.swiper-button-prev, .swiper-button-next').css({"z-index":"3"});
				$('.tooltip, .tooltip-btn.off').hide();
				$('.tooltip-btn.on').show();
		});
	}
	tooltip();

	// training video
	function trainingVideo(){
		const playVideo = $('.training-video .play video');
		const playVideoTitle = $('.training-video .play p');

		// video & thumbnail img switch
		$('.training-video .play-list .thumb img').on('click', function(){
			const videoName = $(this).attr('src').split('/').reverse()[0].split('.')[0];
			let videoTitle = $(this).parent('.thumb').next('.tit').text();
			const imgName = playVideo.attr('src').split('/').reverse()[0].split('.')[0];
			let imgTitle = playVideoTitle.text();
			const imgExtension = $(this).attr('src').split('/').reverse()[0].split('.')[1];
			playVideo.attr('src', '../../assets/video/' + videoName + '.mp4' );
			playVideoTitle.text(videoTitle);
			$(this).attr('src', '../../assets/images/brand/' + imgName + '.' + imgExtension);
			$(this).parent('.thumb').next('.tit').text(imgTitle);
		});

		// video title show & hide
		const isPaused = playVideo.get(0)?.paused || false;
		playVideo.on('play', (e) => {
			playVideoTitle.css('opacity', 0)
		});
		playVideo.on('pause', (e) => {
			playVideoTitle.css('opacity', 1);
		});
	}
	trainingVideo();
});

function jsTab() {
	$('.js-tab').each(function(){
		const $this = $(this);

		$this.find('.tab-box-list > li').on('click', function(e){
			const tabRoot = $(this).closest('.js-tab');
			const tabBoxItem = $(this).closest('.js-tab').find('> .tab-box-cont > div');
			let tabIdx = $(this).index();

			if( $(this).children('a').attr('href') == "#" ){
				e.preventDefault();
			}
			$(this).addClass('active').siblings().removeClass('active');
			tabBoxItem.removeClass('active').eq(tabIdx).addClass('active');

			// tabScrCenter($(this));
			// function tabScrCenter (target) {
			// const target = $(this);
			// const tabScrBox = target.closest('.js-tab.x-scroll').find('.tab-box-list');
			// const tabScrBoxItem = tabScrBox.find('li');
			// let tabScrBoxHarf = tabScrBox.width() / irNum[1];
			// let tabScrPos;
			// let tabListWidth = 0;
			// let tabTarLeft = 0;
			// let tabPdValue = parseInt(tabScrBoxItem.parent().css('padding-left'));
			// tabScrBoxItem.each(function () {
			// 	tabListWidth += $(this).outerWidth();
			// });
			// for (let i = 0; i < target.index(); i++) tabTarLeft += tabScrBoxItem.eq(i).outerWidth();
			// let tabTarPos = (tabTarLeft + target.outerWidth() / irNum[1] + tabPdValue);
			// if (tabTarPos <= tabScrBoxHarf) {
			// 	tabScrPos = 0;
			// } else if (tabListWidth - tabTarPos <= tabScrBoxHarf) {
			// 	tabScrPos = tabListWidth - tabScrBox.width() + (tabPdValue * irNum[1]);
			// } else {
			// 	tabScrPos = tabTarPos - tabScrBoxHarf;
			// }
			// tabScrBox.stop().animate({scrollLeft:tabScrPos}, secVal[2]);
			// }
		})
	})

 };

function designSelect(select) {
	//default selectbox
	select.on('click', '.selected-value', function (e) {
		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$('div.select-box').removeClass('active');
			$(this).parent().addClass('active');
		};
		// $(this).parent().removeClass('on');

		//select option text
		select.find('.select-items').on('click', 'li', function () {
			//default selectbox
			var selectItem = $(this).text()
			$(this).addClass('selected').siblings('li').removeClass('selected');
			$(this).parent().siblings('.selected-value').text(selectItem);
			$(this).parents('div.select-box').removeClass('active').addClass('on');
		});
	});
}


function customSelect() {
	designSelect($('div.select-box'));

	//status desabled
	if($('div.select-box.disabled')) {
		$('div.select-box.disabled').off('click');
	};

	let disableChk = true;
	$('.direct-input').find('input[type=checkbox]').on('change', (e) => {
		if(disableChk) {
			$(e.currentTarget).parents('.direct-input').find('.input-item').removeClass('disabled').attr("disabled", false);
			$(e.currentTarget).parents('.direct-input').find('div.select-box').removeClass('disabled');
			designSelect($(e.currentTarget).parents('.direct-input').find('div.select-box'));
			disableChk = false;
		} else {
			$(e.currentTarget).parents('.direct-input').find('.input-item').addClass('disabled').attr("disabled", true);
			$(e.currentTarget).parents('.direct-input').find('div.select-box').removeClass('on').addClass('disabled');
			$(e.currentTarget).parents('.direct-input').find('div.select-box').off('click');
			$(e.currentTarget).parents('.direct-input').find('.input-box').removeClass('val-error');
			disableChk = true;
		}
	});
	
	//outside click
	$('.bms-wrap').on('click', function (e) {
		if(!$('div.select-box').has(e.target).length) {
			$('div.select-box').removeClass('active');
		}
	});

	$('.textarea-box').on('focusin focusout keyup', 'textarea', function (e) {
		if (e.type == 'focusin') {
			$(this).parent().addClass('focus');
		} else if (e.type == "focusout") {
			$(this).parent().removeClass('focus');
		} else {
			if ($(this).val() == 0) {
				$(this).parent().removeClass('active');
			} else {
				$(this).parent().addClass('active');
			}
		}
	});

	//filebox
	var fileTarget = $('.filebox .upload-hidden');		
	fileTarget.on('change', function(){ 
		var filename = $(this)[0].files[0].name; 
		$(this).parent('.filebox').find('.upload-name').val(filename);
		$(this).parent().find('.btn-reset').show();
	});
};

function popupOpen (target) {
	const bodyWid = $('body').width();
	const hgtSize = $(window).height() - 80;
	const popIdx = target.attr('data-pop-idx');
	popCont = $('.layer-popup-cont');
	popWrap = $('.layer-popup-wrap' + '[data-pop-idx=' + popIdx + ']');
	chkSwitch = true;
	popWrap.fadeIn(secVal[3], function () {
		popAutoHgt();
	});
	popCont.fadeIn(secVal[3]);
	if (!popWrap.hasClass('full')) {
		$('body').css({'overflow':'hidden', 'width':bodyWid});
	}
	setObj(function () {
		popWrap.find(popCont).focus().append('<a href="#" class="tar-loop"></a>');
		$('.tar-loop').focusin(function () {
			popCont.focus();
		});
	}, 0);
	setObj(function () {
		popIdxHgt = popWrap.find(popCont).outerHeight(true);
		if (hgtSize < popIdxHgt && popBottomHgt == 0) {
			popCont.parent().css('height', 'auto');
			popWrap.stop().animate({scrollTop:0}, secVal[2]);
		}
	}, secVal[5]);

	$('.layer-popup-wrap').on('click', function (e) {
		const _this = $(this).closest('.layer-popup-wrap');
		// const tarItem = $('.layer-popup-cont > div, .layer-title,'
		//  + '.layer-cont *:not(.btn-close, .btn-del), .bottom-fixed *:not(.btn-close)');
		const tarItem = $('.layer-popup-wrap:not(.alert-popup) .layer-popup-body, .btn-close');
		if ($(e.target).is(tarItem)) {
			if ($(this).scrollTop() !== 0) {
				if (hgtSize < popIdxHgt) {
					popWrap.stop().animate({scrollTop:0}, secVal[2], function () {
						popClose (_this);
					});
				}
			} else {
				popClose (_this);
			}
		}
	});
}

function designReview () {
	maxItemLeng = 9; // ???????????? ????????? ?????? ??????
	swtParent = $('.js-switch-outer');
	$('.js-switch, .switch-placeholder').on('click', function () {
		$(this).closest(swtParent).toggleClass('active');
		chkLeng ($(this));
	});
	$('.switch-btm-box .chk').on('click', 'input', function () {
		const thisTxt = $(this).parent().find('span').text();
		$(this).parent().toggleClass('on');
		chkLeng ($(this));
		if ($(this).parent().hasClass('on')) {
			let chkItemIdx = [$(this).closest('.check-box').index(), $(this).parent().index()];
			let chkSwtTxt = [$(this).closest('.check-box').find('>label').text(), $(this).parent().find('span').text()];
			$(this).closest(swtParent).find('ul').prepend('<li data-label="' + chkSwtTxt[1] + '"><strong><span>' + chkItemIdx[0] + '</span>'
			+ chkSwtTxt[0] + '</strong> - <span>' + chkItemIdx[1] + '</span>' + chkSwtTxt[1] + '<button class="btn-item-del"></button></li>');
			let swtItems = $(this).closest(swtParent).find('ul').children('li').get();
			swtItems.sort(function (a, b) {
				let swtLi = [$(a).text(), $(b).text()];
				return(swtLi[lastY] < swtLi[irNum[lastY]])? - irNum[lastY]:(swtLi[lastY] > swtLi[irNum[lastY]])?irNum[lastY]:lastY;
			});
			$.each(swtItems, function (index, obj) {
				$(this).closest(swtParent).find('ul').append(obj);
			});
			$('.btn-item-del').on('click', function () {
				const dataChkTxt = $(this).parent().attr('data-label');
				const chkCnt = $(this).closest('.switch-cont');
				const tarInp = chkCnt.find('.chk input');
				$(this).parent().remove();
				chkCnt.find('.chk span:contains(' + dataChkTxt + ')').parent().removeClass('on').find('input').prop('checked', false);
				chkLeng (tarInp);
			});
		} else {
			$(this).closest(swtParent).find('ul').find('li[data-label="' + thisTxt + '"]').remove();
		}
	});
}

function popClose (target) {
	target.fadeOut(secVal[3]);
	target.find(popCont).fadeOut(secVal[3]).parent().removeAttr('style');
	target.find('.tar-loop').remove();
	chkSwitch = false;
	setObj(function () {
		if (!target.hasClass('inner-pop')) {
			$('body').css({'overflow':'auto', 'width':'auto'});
		}
		if ($('.swiper-container').length >= irNum[0]) {
			$('.swiper-wrapper').css('transform', 'translate3d(0, 0, 0)');
		}
		popCont.parent().css('height', '100%');
	}, secVal[4]);
}

function popAutoHgt () {
	let popHeaderHgt = parseInt(popWrap.find('.layer-title').outerHeight(true));
	popBottomHgt = parseInt(popWrap.find('.bottom-fixed').outerHeight(true)) || 0;
}

//?????????????????? ??????
function cookiePop() {
	let cookiePopWrap = $('.cookie-pop-wrap');

	if ($('body').find(cookiePopWrap).length == 1) {
		$('body').css('overflow', 'hidden');
	} else {
		$('body').css('overflow', 'auto');
	}		

	cookiePopWrap.find('.btn-close').on('click',function(){
		cookiePopWrap.fadeOut(secVal[4]);
		$('body').css('overflow', 'auto');
	})
}

// ?????????????????? ??????
function telInputCheck(num){
	num.value = num.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1'); // ?????????
}

function chkLeng (elem) {
	const tarSwtPrnt = elem.closest(swtParent);
	const swtCntVal = [tarSwtPrnt.find('ul').height(), parseInt(tarSwtPrnt.find('ul').css('margin-top')),
	tarSwtPrnt.find('.chk input:checked').length, tarSwtPrnt.find('.chk input:not(:checked)'), 'disabled'];
	const swtCntPd = [tarSwtPrnt.find('.switch-cont'), parseInt(tarSwtPrnt.find('.switch-cont').css('padding-top'))];
	if (swtCntVal[2] !== 0) {
		if (!swtCntPd[0].hasClass('active')) {
			swtCntPd[0].addClass('active').prepend('<div class="switch-item-list"><ul></ul></div>');
		}
		tarSwtPrnt.addClass('on');
		switch(swtCntVal[2]) {
			case maxItemLeng :
				swtCntVal[3].prop(swtCntVal[4], !chkSwitch);
				break
			default :
				swtCntVal[3].prop(swtCntVal[4], chkSwitch);
				break
		}
	} else {
		tarSwtPrnt.removeClass('on').find('.switch-cont').removeClass('active');
		tarSwtPrnt.removeAttr('style').find('.switch-item-list').remove();
	}
	if (tarSwtPrnt.hasClass('on')) {
		tarSwtPrnt.removeAttr('style');
		elem.closest('.js-switch-outer.on:not(.active)').css('height', (swtCntVal[0] + swtCntVal[1]) + (swtCntPd[1] * irNum[1]));
	}
}



