$(function () {
	const scrItem = $('.scr-item');
	const scrIdxLst = $('.scr-idx-list a');
	const ftrCnt = $('.hmj-footer');

	scrItem.on('mousewheel DOMMouseScroll', function (e) {
		let tScrIdx = $('.scr-item.active-idx').index();
		if (!$('html, body').is(':animated')) {
			if (e.originalEvent.wheelDelta < 0) {
				$('html, body').stop().animate({'overflow':'visible'}, secVal[6]);
				if (tScrIdx !== $(this.length)) {
					scrItem.eq(tScrIdx + 1).addClass('active');
					scrItem.eq(tScrIdx + 1).addClass('active-idx').siblings().removeClass('active-idx');
					scrIdxLst.parent().eq(tScrIdx + 1).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
				}
				if ((tScrIdx + 1) == scrItem.length) {
					ftrCnt.addClass('active');
				}
				return false;
			} else {
				$('html, body').stop().animate({'overflow':'visible'}, secVal[6]);
				if (!ftrCnt.hasClass('active')) {
					if (tScrIdx !== 0) {
						scrItem.eq(tScrIdx).removeClass('active');
						scrItem.eq(tScrIdx - 1).addClass('active-idx').siblings().removeClass('active-idx');
						scrIdxLst.parent().eq(tScrIdx - 1).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
					}
					return false;
				}
				ftrCnt.removeClass('active');
			}
		} else {
			e.stopPropagation();
			return false;
		}
	});

	scrIdxLst.on('click', function (e) {
		e.preventDefault();
		const scrIdxNum = $(this).parent().index();
		ftrCnt.removeClass('active');
		scrItem.removeClass('active');
		$('.scr-item:nth-child(-n + ' + (scrIdxNum + 1) + ')').addClass('active');
		scrItem.eq(scrIdxNum).addClass('active-idx').siblings().removeClass('active-idx');
		scrIdxLst.removeClass('active').parent().eq(scrIdxNum).find('a').addClass('active');
	});
});