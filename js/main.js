$(function(){

    //menu 영역
    $(".main > li, .sub_bg").mouseover(function(){
        $(".sub ,.sub_bg").stop().slideDown();
    }) /* mouseover */
    $(".main > li, .sub_bg").mouseout(function(){
        $(".sub ,.sub_bg").stop().slideUp();
    }) /* mouseout */

    // 이미지 영역
    $(".fade li").eq(0).siblings().hide();
    var n = 0;
    setInterval(function(){

        // $(".fade li").eq(n).fadeOut();
        if(n == 2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        console.log (n);
    },3000)/* setInterval */

})/* js_end */