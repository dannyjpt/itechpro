      
   
     $(function() {
         var con = 0;
   $(".navigation__icon").click(function() {
 
       if(con == 0){
           con=con+1;
        $("#mynav").css("height", "100%");
        $("#mynav").css("width", "350px");
        $("#mynav").css("border-radius", "0% 0% 0% 0%");
        $("#mynav").css("top", "0");
        $("#mynavi").css("top", "10%");
        $("#mybtn").val("Mostrar menos");
        $("#mytxt").css("display", "block");
    
    $(".navigation").toggleClass('navigation-open');
       
       }else{
           con = 0;
           $("#mynav").css("height", "50%");
           $("#mynav").css("width", "400px");
           $("#mynav").css("border-radius", "0% 100% 0% 0%");
           $("#mynav").css("top", "50%");
           $("#mynavi").css("top", "35%");
           $("#mybtn").val("¿Quienes Somos?");
           $("#mytxt").css("display", "none");
       }
   });
 });

let nave = document.querySelector('.nave');
var lastScrollTop = 0;

function scrollPB(){
    let sT = document.documentElement.scrollTop;
    let sH = document.documentElement.scrollHeight;
    let cH = document.documentElement.clientHeight;
    
    let wH = sH - cH;
    let valor = sT / wH * 115;
    
    var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
     nave.style.transform= "rotateY(0deg)";

   } else {
     nave.style.transform= "rotateY(180deg)";
   }
   lastScrollTop = st;
    
    nave.style.marginLeft = valor + '%';
}
  
    function ChangeLink(){
        var link = document.getElementById("Clink_txt").value;
        var sl=0;
        var sl2=0;
        var newLink="";
        for(var i=0;i<=link.length;i++){
            if(link.charAt(i)=="/"){
                sl++;
            }
            if(sl==5){
                sl2++;
                      
            }
            if(sl==5 && sl2>=2){
                newLink=newLink+link.charAt(i);
            }
        }
        document.getElementById("Clink_txt").value="http://drive.google.com/uc?export=view&id="+newLink;
        document.getElementById("Clink_txt").style.background="#48dbfb";
    }

    function act(){
        window.location = "actividades.html";
    }
        
window.addEventListener('scroll',scrollPB);