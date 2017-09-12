 $(document).ready(function(){
	 $("body").fadeIn(1000);
	 $("#go").click(function(){
		$(this).addClass("animated").addClass("shake");
	 });
	 $('.img').mouseover(function(){
		$(this).find('.caption').addClass("animated").addClass("fadeIn");
	 });
	 $('.img').mouseout(function(){
		$(this).find('.caption').removeClass("animated").removeClass("fadeIn");
	 });
 });	
 

 $(window).scroll(function () { 

    console.log($(window).scrollTop());
	var scrollhight = $('.head').height();
    if ($(window).scrollTop() > scrollhight) {
      $('.menu').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < scrollhight) {
      $('.menu').removeClass('navbar-fixed-top');
    }
	
	if($(window).scrollTop()>300){
		$(".img").css("opacity","1").addClass("animated").addClass("zoomIn");
	}else{
		$(".img").css("opacity","0").removeClass("animated").removeClass("zoomIn");
	}
  });