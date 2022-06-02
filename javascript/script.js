jQuery(document).ready(function(){
    $('.navi >li').mouseover(function(){ //.navi의 li태그에 mouseover이벤트 설정
        $(this).find('.submenu').stop().slideDown(500); //$(this):현재 선택된 태그 요소
        //find('submenu'): 선택된 태그의 자식태그 중 .submenu와 일치하는 태그를 찾아서 반환함.
        //만약에 ,chlidren()사용할 경우 직계 자식 태그를 반환함
        //stop(): 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
        //slideDown(), slideUp():jQuery 라이브러리에서 제공하는 함수로
        //슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의
        //helight 값을 낮추거나 높혀가며 슬라이드 업 또는 다운 전환되게 함.
        //매개변수값(인수) 500은 0.5초를 의미함
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide > a:gt(0)').hide();  //.imgslide > a:gt(0)은 index 0번째 보다 더 큰 값을 가진 요소로 선택함.
                                      //0번쨰부터 계수하여 index 값보다 큰 값을 가저옴 gt(0)이므로 1,2,3이 됨.
        setInterval(function(){
            //가상클래스 선택자로서 부모요소가 가지고있는 자식요소 중 첫번째를 선택함. imgslide의 자식요소
            //a 태그에서 첫번째 선택하여 페이드 아웃 실행함
            $('.imgslide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide');} ,3000);

    

    $(".notice li:first").click(function(){ 
        //(".notice li:first").click:. notice 요소의 후손 요소중에서 첫번째 요소를 클릭하면
        $('#modal').addClass('active'); 
        //#modal과 일치하는 요소를 찾아 active 클래스를 추가해줌
    });
    
    $(".btn").click(function(){
        $('#modal').removeClass('active');
    });



        });


