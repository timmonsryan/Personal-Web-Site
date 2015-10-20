$(function(){
	$("#projects-content").hide();
	$("footer").hide();
	$("nav").hide();
	$(".project-info").hide();
	$("header").hide().slideDown("slow",function(){
		$("nav").hide().slideDown("slow",function(){
			$("#projects-content").fadeIn(800);
			$("#ThreadFixInfo").fadeIn(800);
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
		$('.project-info').hide();
		$('.project-link').removeClass('active-project');
		$('#ThreadFixBtn').addClass('active-project');
		$('#ThreadFixInfo').fadeIn(800);
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
	$(".project-link").click(function(){
		$(".project-link").removeClass("active-project");
		$(".project-info").hide();
		$(this).addClass("active-project");
	});
});

$(function(){
	$("#EACBtn").click(function(){
		$("#EACInfo").fadeIn(800);
	});
});

$(function(){
	$("#ThreadFixBtn").click(function(){
		$("#ThreadFixInfo").fadeIn(800);
	});
});

$(function(){
	$("#TionscadalBtn").click(function(){
		$("#TionscadalInfo").fadeIn(800);
	});
});

$(function(){
	$("#GrapevineBtn").click(function(){
		$("#GrapevineInfo").fadeIn(800);
	});
});

$(function(){
	$("#RecordStoreBtn").click(function(){
		$("#RecordStoreInfo").fadeIn(800);
	});
});

$(function(){
	$("#PersonalSiteBtn").click(function(){
		$("#PersonalSiteInfo").fadeIn(800);
	});
});

$(function(){
	$("#HecklersBtn").click(function(){
		$("#HecklersInfo").fadeIn(800);
	});
});
