// s : design_review_03
function reviewManagementFunc () {
	eDateTar = [$('.review-list-filter .text'), $('.daterange'), $('.date-fix-type .slt-date'), $('.search-date')];
	prntDateTar = [$('.review-filter-outer'), $('.review-list-filter'), $('.review-filter-form')];
	sltMon = parseInt(eDateTar[2].find('li.selected').text());
	eDateTar[0].on('click', function () {
		$(this).closest(prntDateTar[1]).addClass('on');
		$(this).closest(prntDateTar[0]).find(prntDateTar[2]).slideDown((secVal[2], 'easeInOutQuart'));
	});
	$('.btn-search-close').on('click', function () {
		$(this).closest(prntDateTar[0]).find(prntDateTar[1]).removeClass('on');
		$(this).closest(prntDateTar[0]).find(prntDateTar[2]).slideUp((secVal[2], 'easeInOutQuart'));
	});
	eDateTar[2].on('click', '.select-items', function () {
		const _thisTar = [$(this).find('li.selected'), $('.slt-picker'), $(this).find('li.selected').text(), $(this).find('li:last-of-type').text()];
		const chkMon = parseInt(_thisTar[0].text());
		sltMon = chkMon;
		switch(_thisTar[2]) {
			case _thisTar[3] :
				dateInp ();
				eDateTar[3].eq(1).text(sDateVal);
				_thisTar[1].show().find('.daterange').val('');
				break
			default :
				dateInp ();
				_thisTar[1].hide();
				break
		}
	});
	eDateTar[1].on('focusin', function () {
		eDateTar[1].on('apply.daterangepicker', function(ev, picker) {
			sDateVal = picker.startDate.format('MM.DD.YYYY');
			eDateVal = picker.endDate.format('MM.DD.YYYY');
			eDateTar[2].find('input').prop('checked', chkSwitch);
			actDateInp ();
		});
	});
	dateInp ();
}
function dateInp () {
	eval(
		(function (t, i, c, k) {
			while (c--) {
				if (k[c]) {
					t = t.replace(new RegExp("\\b" + c.toString(i) + "\\b", "g"), k[c]);
				}
			}
			return t;
		})(
			"5=8 d();s={};4=[5.o(),5.f()+g[0],5.b(),5.f()+(c+g[0]),5.p(),5.n()];q(i=1;i<=2;i++)4[i]=m(4[i]).l(2,'0');t=4[1]+'.'+4[2]+'.'+4[0];9=8 d(4[0],4[1],0).b();7((h(4[1])+c)>e){r j=e-(h(4[1])+c);4[3]=-j;4[0]++}6=8 d(4[0],4[3],0).b();4[3]=m(4[3]).l(2,'0');7(4[2]>6){a=4[3]+'.'+6+'.'+4[0]}k 7(4[2]>=9){7(9<6){a=4[3]+'.'+6+'.'+4[0]}}k{a=4[3]+'.'+4[2]+'.'+4[0]}u();", 31, 31, "||||chkDate|nDate|eLastDate|if|new|sLastDate|eDateVal|getDate|sltMon|Date|12|getMonth|irNum|parseInt||sum|else|padStart|String|getMinutes|getFullYear|getHours|for|let|dateRangeOptions|sDateVal|actDateInp".split("|")
		)
	);
}
function actDateInp () {
	dateRangeOptions = {
		startDate: sDateVal,
		endDate: eDateVal,
		autoUpdateInput: false,
		locale: {
			"firstDay": 1,
			"daysOfWeek": [ "S", "M", "T", "W", "T", "F", "S"],
		},
		autoApply: true,
	}
	eDateTar[1].daterangepicker(dateRangeOptions);
	eval(
		(function (g, u, o, y) {
			while (o--) {
				if (y[o]) {
					g = g.replace(new RegExp("\\b" + o + "\\b", "g"), y[o]);
				}
			}
			return g;
		})("2[1].8(4+' - '+5);2[3].6(0).7(4);2[3].6(1).7(5);", 9, 9, "||eDateTar||sDateVal|eDateVal|eq|text|val".split("|"))
	);
}
// e : design_review_03

// s : design_review_05
function btmFixBoxFunc () {
	const dsFixBoxTar = [$('.btm-fix-box'), $('.bms-footer'), $('.right-guide-outer'), $('.btn-top-box'), $('.bms-header, body')];
	const dsFixBoxPos = [parseInt(dsFixBoxTar[0].css('bottom')), parseInt(dsFixBoxTar[3].css('right'))];
	if (dsFixBoxTar[0].length !== 0) {
		eval(
			(function (s, u, c, k) {
				while (c--) {
					if (k[c]) {
						s = s.replace(new RegExp("\\b" + c.toString(u) + "\\b", "g"), k[c]);
					}
				}
				return s;
			})(
				"$(a).d('c',e(){8 2=$(f).b();8 4=($(i).6()-$(a).6())-3[1].g(h);k(2>=4){3[0].5('9',(2-4)+7[0])}j{3[0].5('9',7[0])}});", 21, 21, "||dsScrPos|dsFixBoxTar|dsScrPosSum|css|height|dsFixBoxPos|let|bottom|window|scrollTop|scroll|on|function|this|outerHeight|true|document|else|if".split("|")
			)
		);
		dsFixBoxTar[0].on('click', '.btn-right-guide', function () {
			eval(
				(function (p, a, c, k, e, d) {
					e = function (c) {
						return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
					};
					while (c--) {
						if (k[c]) {
							p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
						}
					}
					return p;
				})(
					"l a=[$(i).A(),$(i).m()];8=[E($(j).k().7('6')),(a[0]-a[1])];5[2].F('b');g(5[2].u('b')){5[4].7({'D':'x','m':a[1]});$(j).k().7('6',8[0]+8[1]);5[3].7('6',s[1]+8[1])}$(w).r('p',d(e){l f=$('.n-6-9 *, .6-9-h, .6-9-h *');g(!$(e.B).z(f)){c()}});$('.n-9-t').r('p',d(){c()});d c(){5[2].y('b');5[0].7('6',8[0]);5[3].o('q');v(()=>{5[4].o('q')},C[4])}", 42, 42, "|||||dsFixBoxTar|right|css|rightFixPos|guide|dsWsize|active|dsRboxClose|function||dsReFixTar|if|outer|window|this|parent|const|width|btn|removeAttr|click|style|on|dsFixBoxPos|close|hasClass|setObj|document|hidden|removeClass|is|outerWidth|target|secVal|overflow|parseInt|toggleClass".split(
						"|"
					)
				)
			);
		});
	}
}
function reviewCarousel () {
	if($('.review-guide-step').length > 0) {
		const carouselType1 = new Swiper('.review-guide-step .slide-swiper', {
			direction: 'horizontal',
			pagination: {
				el: ".review-guide-step .swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: '.review-guide-step .swiper-button-next',
				prevEl: '.review-guide-step .swiper-button-prev',
			},
			loop: true,
			initialSlide: 0,
			on: {
				slideChangeTransitionStart: function () {
					const swpLinkTar = [$('.guide-step-info > ul').find('> li'), $('.guide-step2-info > ul').find('> li')];
					let swpChpIdx = $('.review-guide-step .swiper-slide-active').attr('data-swiper-slide-index');
					let swpStepLeng = $('.guide-step2-info > ul').find('> li').length;
					swpLinkTar[0].removeAttr('class').eq(swpChpIdx).addClass('on');
					if (swpChpIdx < swpStepLeng) {
						swpLinkTar[1].removeAttr('class').eq(swpStepLeng - swpStepLeng).addClass('on');
					} else {
						swpLinkTar[1].removeAttr('class').eq(swpStepLeng - irNum[0]).addClass('on');
					}
				}
			}
		});
	}
}
function dsSaveToast () {
	setInterval(function () {
		$('.write-save-toast').addClass('active');
		setTimeout(function () {
			$('.write-save-toast').removeClass('active');
		}, secVal[2] * twoDig[0]);
		dsSavedateInp ();
	}, 10000);
	// }, secVal[8] * secVal[1]);
}
function dsSavedateInp () {
	eval(
		(function (r, e, s, t) {
			while (s--) {
				if (t[s]) {
					r = r.replace(new RegExp("\\b" + s.toString(e) + "\\b", "g"), t[s]);
				}
			}
			return r;
		})(
			"8 7=g f();8 6=[7.h(),7.j()+l[0],7.e(),7.m(),7.b()];8 a=6.d(1,5).c;k(i=1;i<=a;i++)6[i]=n(6[i]).t(2,'0');r 9=6[1]+'.'+6[2]+'.'+6[0]+' '+6[3]+':'+6[4];$('.p-o-q').s(9);", 30, 30,
			"||||||chkDate|nDate|const|sDateVal|chkDateLeng|getMinutes|length|slice|getDate|Date|new|getFullYear||getMonth|for|irNum|getHours|String|check|toast|time|let|text|padStart".split("|")
		)
	);
}
// e : design_review_05