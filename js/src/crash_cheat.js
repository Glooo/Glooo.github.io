<!--崩溃欺骗-->
 var OriginTitle = document.title;//原始标题
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        //  $('[rel="icon"]').attr('href', "/images/TEP.ico");
         document.title = '╭(°A°`)╮ 汪汪～';
         clearTimeout(titleTime);
     }
     else {
        //  $('[rel="icon"]').attr('href', "pig.ico");
         document.title = '(ฅ>ω<*ฅ) 旺~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);//过2000毫秒变回原来的title
     }
 });
