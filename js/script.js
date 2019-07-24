$(window).on('load', function (e) {
  $preloader = $(".mask"); 
  $loader = $preloader.find('.spinner');
  $loader.delay(150).fadeOut();
  $preloader.delay(350).fadeOut('slow');
  $('.container').fadeIn();  
  moveCursor(e);
});
$('.mask').on('click',function(){
  closeRulesMenu();
});
$(window).resize(function(){
  var w = window.innerWidth;
  if(w > 920)
  {
    console.log(1);
    $('.menu-wrapper .menu').fadeIn();
  }
});
function moveCursor(e)
  {    
    var w = window.innerWidth;
    var h = window.innerHeight; 
    if(e.clientX != undefined && e.clientY != undefined)
    {
      var xpos=e.clientX,
          ypos=e.clientY;
      xpos=xpos*2.5;ypos=ypos*2.5; 
      if(w > 920)
      { 
        $('.c1').css('top',((h/3+(ypos/70))+"px"));
        $('.c1').css('left',(((w/6)+(xpos/90))+"px"));    
        $('.c2').css('top',((h/1.5+(ypos/70))+"px"));
        $('.c2').css('left',(((w/9)+(xpos/90))+"px"));    
        $('.c3').css('top',((h/1.2+(ypos/70))+"px"));
        $('.c3').css('left',(((w/2)+(xpos/90))+"px"));    
        $('.c4').css('top',((h/1.55+(ypos/70))+"px"));
        $('.c4').css('left',(((w/1.7)+(xpos/90))+"px"));    
        $('.c5').css('top',((h/5+(ypos/70))+"px"));
        $('.c5').css('left',(((w/1.2)+(xpos/90))+"px"));    
        $('.c6').css('top',((h/1.3+(ypos/70))+"px"));
        $('.c6').css('left',(((w/1.2)+(xpos/90))+"px"));    
        $('.copyright-wrapper').css('bottom',((h/16-(ypos/70))+"px"));
        $('.copyright-wrapper').css('left',(((w/5)+(xpos/90))+"px"));    
        $('.logo-block').css('top',((h/45+(ypos/70))+"px"));
        $('.logo-block').css('left',(((w/1.5)+(xpos/90))+"px")); 
        $('.container').css('background-position-x',-(xpos/150)+"px");
        $('.container').css('background-position-y',-(ypos/350)+"px");
      }
    }
    else
    {      
      if(w > 920)
      {
        $('.c1').css('top',((h/3+(h/86.5))+"px"));
        $('.c1').css('left',(((w/6)+(w/110))+"px"));    
        $('.c2').css('top',((h/1.5+(h/86.5))+"px"));
        $('.c2').css('left',(((w/9)+(w/110))+"px"));    
        $('.c3').css('top',((h/1.2+(h/86.5))+"px"));
        $('.c3').css('left',(((w/2)+(w/110))+"px"));    
        $('.c4').css('top',((h/1.55+(h/86.5))+"px"));
        $('.c4').css('left',(((w/1.7)+(w/110))+"px"));    
        $('.c5').css('top',((h/5+(h/86.5))+"px"));
        $('.c5').css('left',(((w/1.2)+(w/110))+"px"));    
        $('.c6').css('top',((h/1.3+(h/86.5))+"px"));
        $('.c6').css('left',(((w/1.2)+(w/110))+"px"));    
        $('.copyright-wrapper').css('bottom',((h/16-(h/86.5))+"px"));
        $('.copyright-wrapper').css('left',(((w/5)+(w/110))+"px"));            
        $('.container').css('background-position-x',-(xpos/150)+"px");
        $('.container').css('background-position-y',-(ypos/350)+"px");
        $('.logo-block').css('top',((h/45+(h/86.5))+"px"));
        $('.logo-block').css('left',(((w/1.5)+(w/110))+"px")); 
        $('.c1, .c2, .c3, .c4, .c5, .c6, .copyright-wrapper, .logo-block').fadeIn();
      }
      else
      {
        $('.copyright-wrapper, .logo-block').fadeIn();
      }
    }
  };
$(document).ready(function () {
  $('.container .circle')
  .on('mouseover',function(){
      $(this).animate({
          opacity: 0.5
        }, 1000);
  })
  .on('mouseout',function(){
      $(this).animate({
          opacity: 1
        }, 1000);
  });
  $('.news-wrapper .news-block .video-block, .guides-wrapper .guides-block .video-block').each(function(index,item){
    if($(item).is(':empty'))
    {
      $(item).append('<div style="margin:auto;">Видео недоступно</div>');
    }
  });
  $('.news-slider, .guides-slider').slick({
    infinite: false,
    draggable:false,
    accessibility:true,
    slidesToShow: 2,
    nextArrow:'<i class="fas fa-arrow-right slick-arrow"></i>',
    prevArrow:'<i class="fas fa-arrow-left slick-arrow"></i>',
    speed: 800,
    cssEase: 'cubic-bezier(0.600, -0.220, 0.435, 0.145)',  
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: 'ease-out'
        }
      }
    ]
  });
  $(this).on('afterChange', function(event, slick, currentSlide){
    if (slick.$slides.length == currentSlide + slick.options.slidesToScroll) {
        console.log("Last slide");
    }
  });
  $('.rules-menu .rules-item').on('click',function(){
    if(!$(this).hasClass('active'))
    {
      $('.rules-menu .rules-item').removeClass('active');
      $(this).addClass('active');
    }
  });
  let currentIp = new ClipboardJS('.server-block .server-ip');
  currentIp.on('success',function(e){
    $(e.trigger.nextElementSibling).fadeIn();
    let timeOut = setTimeout(function(){
      $(e.trigger.nextElementSibling).fadeOut();
    },3000);
  });  
  $(window).mousemove(function(e) {
    moveCursor(e);    
  });  
  $('.news-block .video-block, .guides-block .video-block').each(function(index,item){
    let curLink = $(this).attr('data-id');
    if(curLink)
    {
      $(this).empty();
      $(this).append(`<img style="width:100%;height:100%" src="https://img.youtube.com/vi/${curLink}/0.jpg"><i class="fas fa-play"></i>`);
    }
  });  
});
$('#rules').on('click',function(){
  if($('.rules-wrapper .rules-menu').css('display') == 'none')
  {
    $('.rules-wrapper .rules-menu').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css('display','flex').css('z-index','99999');
    $('.mask').fadeIn().css('z-index','99999');
    $(this).css('z-index','99999');
  }
  else
  {
    closeRulesMenu();
  }
});
$('.rules-menu .rules-item').on('click',function(){
  let currentItem = this.id;
  $('.rules-text-wrapper .active').removeClass('active');
  $('.rules-text-wrapper .rules-title').text($(this).text());
  $('.rules-text-wrapper').find(`#${currentItem}`).addClass('active animated fadeInDown');
  if(window.innerWidth <= 750)
  {
    closeRulesMenu();
  }
});
$('.menu-wrapper .menu-but').on('click',function(){
  if($(this).next().is(':visible'))
  {
    $(this).next().removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');  
    setTimeout(() => {
      $(this).next().css('display','none');  
    },600);
    $('body').css({'overflow':'visible','max-height':'100%'});
  }
  else
  {
    $(this).next().removeClass('animated fadeOutLeft').addClass('animated fadeInLeft').css('display','flex');  
    $('body').css({'overflow':'hidden','max-height':'100vh'});
  }
});
function closeRulesMenu()
{
  $('.rules-wrapper .rules-menu').removeClass('animated fadeInRight').addClass('animated fadeOutRight');  
    setTimeout(() => {
      $('.rules-wrapper .rules-menu').css('display','none').css('z-index','9999');  
    },600);
    $('.mask').fadeOut().css('z-index','9999');
    $('#rules').css('z-index','99');
}