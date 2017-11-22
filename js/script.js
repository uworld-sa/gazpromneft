(function($){
	$(window).ready(function(){
		$('iframe').each(function(){
			$(this).height($(this).width()/16*9);
			if ($(this).height() > $(window).height()) {
				$(this).height($(window).height());
				$(this).width($(this).height()*16/9);
			}
		});
	});

	$(window).load(function(){
		
		$(window).resize(function(){
			$('iframe').each(function(){
				$(this).css('width','100%');
				$(this).height($(this).width()/16*9);
				if ($(this).height() > $(window).height()) {
					$(this).height($(window).height());
					$(this).width($(this).height()*16/9);
				}
			});
		});

		$('.pie_progress').asPieProgress({
		    'namespace': 'pie_progress',
		    'speed': 55,
		    'barsize': '21',
		    'barcolor': '#98D832',
		    'trackcolor': 'transparent'

		});

		if( $(window).height() < $('#screen-1 img.bg').height()) {
			$('#screen-1').addClass('to_big');
		} else {
			$('#screen-1').removeClass('to_big');
		}

		/*$("iframe").waypoint(function(direction) {
		  $(this).attr('src',$(this).attr('src')+'&autoplay=1');
		});*/

		$(".pie_progress").waypoint(function(direction) {
		  $(this).asPieProgress('start');
		},{
		    offset: 'bottom-in-view',
		    triggerOnce: true 
		});
		Share = {
			vkontakte: function(purl, ptitle, pimg, text) {
				url  = 'http://vkontakte.ru/share.php?';
				url += 'url='          + encodeURIComponent(purl);
				url += '&title='       + encodeURIComponent(ptitle);
				url += '&description=' + encodeURIComponent(text);
				url += '&image='       + encodeURIComponent(pimg);
				url += '&noparse=true';
				Share.popup(url);
			},
			odnoklassniki: function(purl, text) {
				url  = 'http://www.ok.ru/dk?st.cmd=addShare&st.s=1';
				url += '&st.comments=' + encodeURIComponent(text);
				url += '&st._surl='    + encodeURIComponent(purl);
				Share.popup(url);
			},
			facebook: function(purl, ptitle, pimg, text) {
				url  = 'http://www.facebook.com/sharer.php?s=100';
				url += '&p[title]='     + encodeURIComponent(ptitle);
				url += '&p[summary]='   + encodeURIComponent(text);
				url += '&p[url]='       + encodeURIComponent(purl);
				url += '&p[images][0]=' + encodeURIComponent(pimg);
				Share.popup(url);
			},
			twitter: function(purl, ptitle) {
				url  = 'http://twitter.com/share?';
				url += 'text='      + encodeURIComponent(ptitle);
				url += '&url='      + encodeURIComponent(purl);
				url += '&counturl=' + encodeURIComponent(purl);
				Share.popup(url);
			},
			mailru: function(purl, ptitle, pimg, text) {
				url  = 'http://connect.mail.ru/share?';
				url += 'url='          + encodeURIComponent(purl);
				url += '&title='       + encodeURIComponent(ptitle);
				url += '&description=' + encodeURIComponent(text);
				url += '&imageurl='    + encodeURIComponent(pimg);
				Share.popup(url);
			},

			popup: function(url) {
			    window.open(url,'','toolbar=0,status=0,width=626,height=436');
			}
		};

	});

})(jQuery);