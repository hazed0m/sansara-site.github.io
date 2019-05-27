$(window).on('load', function () {
  $preloader = $(".mask"); 
  $loader = $preloader.find('.spinner');
  $loader.delay(500).fadeOut();
  $preloader.delay(250).fadeOut('slow');
});
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