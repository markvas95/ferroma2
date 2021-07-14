$(function(){
   $('.main-slider').slick({
      infinite: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      autoplay: true,
      autoplaySpeed: 1400,
      dots: true,
      arrows: false
   });
   $('.factory-slider').slick({
      infinite: true,
      variableWidth: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      useTransform: true,
      dots: true,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow.svg" alt="" /></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow.svg" alt="" /></button>',
      responsive: [
         {
           breakpoint: 450,
           settings: {
             arrows: false
           }
         }
      ]  
   });

   //Разворот кнопок и текста в карточках товара
   function CallBoth(){
      rotateBtn();
      textToggle();
   }
   $(document).ready(function(textToggle){
      $('.about-item-btn-hidden').click(function(){
         $('.cards-text-hidden').slideToggle(450);
         $('.about-item__btn, .about-item__btn::after').toggleClass('active');      
         if (window.matchMedia("(max-width: 376px)").matches) {
            $('.cards-text-main--adaptive-lock').slideToggle(450);
         }
         return false;
      });
   });
   $(function(rotateBtn){
      $('.about-item-btn-hidden').on('click', function(){
        $(this).toggleClass('rotate');
     });
   });
   
   //Отключение телефона и почты на пк
   $(function(){
      if (window.matchMedia("(min-width: 1300px)").matches) {
         $('a.number').click(function() { return false; });
      }
   });

   //Плавный скролл к якорю

   const anchors = document.querySelectorAll('a[href^="#"]')
   // Цикл по всем ссылкам
   for(let anchor of anchors) {
   anchor.addEventListener("click", function(e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
   }
   //Бургер

   $('.header-menu__btn').click(function(event) {
      $('.header-menu__btn, .header-menu, .header-menu__line, .header-menu__btn--close, .header-menu__overlay').toggleClass('active');
      $('body').toggleClass('lock');
   }); 

});
