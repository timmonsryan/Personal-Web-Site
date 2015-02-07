$(function(){
	$("#projects-content").hide();
	$("footer").hide();
	$("nav").hide();
	$("header").hide().slideDown("slow",function(){
		$("nav").hide().slideDown("slow",function(){
			$("#projects-content").fadeIn(800);
			$("footer").fadeIn(800);
		})
	})
});

$(function(){
	$('#about-content').hide();
	$('#contact-content').hide();
	$('#about-tab').click(function(){
		$('.tab').removeClass("active");
		$('#about-tab').addClass("active");
		$('#projects-content').hide();
		$('#contact-content').hide();
		$('footer').hide();
		$('footer').fadeIn(800);
		$('#about-content').fadeIn(800);
	})
});

$(function(){
	$('#projects-tab').click(function(){
		$('.tab').removeClass("active");
		$('#projects-tab').addClass("active");
		$('#about-content').hide();
		$('#contact-content').hide();
		$('footer').hide();
		$('footer').fadeIn(800);
		$('#projects-content').fadeIn(800);
	})
});

$(function(){
	$('#contact-tab').click(function(){
		$('.tab').removeClass("active");
		$('#contact-tab').addClass("active");
		$('#about-content').hide();
		$('#projects-content').hide();
		$('footer').hide();
		$('footer').fadeIn(800);
		$('#contact-content').fadeIn(800);
	})
});

$(function(){
	$('.project-info').hide();
	$('#RecordStoreBtn').click(function(){
		$('#RecordStoreInfo').slideToggle(500);
	})
});

$(function(){
	$('.project-info').hide();
	$('#PersonalSiteBtn').click(function(){
		$('#PersonalSiteInfo').slideToggle(500);
	})
});

$(function(){
	$('.project-info').hide();
	$('#EACBtn').click(function(){
		$('#EACInfo').slideToggle(500);
	})
});

$(function(){
	$('.project-info').hide();
	$('#HecklersBtn').click(function(){
		$('#HecklersInfo').slideToggle(500);
	})
});