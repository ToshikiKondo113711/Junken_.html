$(document).ready(function(){

    var doraJan_gu = "dora_gu.jpg"
    var doraJan_cho = "dora_cho.jpg"
    var doraJan_par = "dora_par.jpg"
    var doraJan_par_win = "dora_par_win.jpg"

    $(".gu_btn").on("click",function(){

        var humanGu , offsetTop  = 1;
        var comp = Math.floor(Math.random()*3+1);

            if(comp == 1){
            $("#PC").text("ドラえもんの手はグー")
            $("#gazou").html('<img src="CSS/img/dora_gu.jpg" alt="ドラえもん　グーの手">')
            $("#result").text("あいこです")

            
        }else if(comp == 2){
            
            $("#PC").text("ドラえもんの手はチョキ")
            $("#gazou").html('<img src="CSS/img/dora_cho.jpg" alt="ドラえもん　チョキの手">')
            $("#result").text("あなたの勝ちです")


        }else if(copmp == 3){
            $("#PC").text("ドラえもんの手はパー")
            $("#gazou").html('<img src="CSS/img/dora_par.jpg" alt="ドラえもん　パーの手">')
            $("#result").text("あなたの負けです")
            
        }
    });
    $(".cho_btn").on("click",function(){

        var humanCho = 2;
        var comp = Math.floor(Math.random()*3+1);
    
        if(comp == 1){

            $("#PC").text("ドラえもんの手はグー")
            $("#gazou").html('<img src="CSS/img/dora_gu.jpg" alt="ドラえもん　グーの手">')
            $("#result").text("あなたの負けです")


        }else if(comp == 2){
            
            $("#PC").text("ドラえもんの手はチョキ")
            $("#gazou").html('<img src="CSS/img/dora_cho.jpg" alt="ドラえもん　チョキの手">')
            $("#result").text("あいこです")

        }else if(copmp == 3){
            $("#PC").text("ドラえもんの手はパー")
            $("#gazou").html('<img src="CSS/img/dora_par.jpg" alt="ドラえもん　パーの手">')
            $("#result").text("あなたの勝ちです")
            
        }
    });

    $(".par_btn").on("click",function(){

        var humanPar = 3;
        var comp = Math.floor(Math.random()*3+1);

        if(comp == 1){

            $("#PC").text("ドラえもんの手はグー")
            $("#gazou").html('<img src="CSS/img/dora_par_win.jpg" alt="ドラえもん　嘆きのグー">')
            $("#result").text("あなたの勝ちです")
            

        }else if(comp == 2){
            
            $("#PC").text("ドラえもんの手はチョキ")
            $("#gazou").html('<img src="CSS/img/dora_cho.jpg" alt="ドラえもん　チョキの手">')
            $("#result").text("あなたの負けです")
            
            
        }else if(copmp == 3){
            $("#PC").text("ドラえもんの手はパー")
            $("#gazou").html('<img src="CSS/img/dora_par.jpg" alt="ドラえもん　パーの手">')
            $("#result").text("あいこです")
            
        }
  
    });
   
});


$(".gu_btn,.cho_btn,.par_btn").on("click", function () {
    // クリックされた要素のhref属性の値を取得 例：#position
    //   const scrollTarget = $(this)[0].attributes[1].nodeValue;
    // 取得した値のid属性がついた要素の位置を取得
    const offsetTop = $(this).position().top;
    // 取得した箇所に移動
    $("html, body").animate({ scrollTop: offsetTop }, 600);
    return false;
  });

// // 画面スクロール
// const position__button = $(this).position().top;
// $("html, body").animate({ scrollTop: position__button }, 300);
// return false;

  
$(".button").on("click", function() {
    location.reload();
  });