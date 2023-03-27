// vARIABLE  //
var show,  X =4, Y=4;


// navSection  //
const startNav=()=>{
    Presentation=document.getElementById("Presentation").style.display='';
    Presentation=document.getElementById("BTS").style.display='none';
    Presentation=document.getElementById("Realisation").style.display='none';
    Presentation=document.getElementById("Veille").style.display='none';
}
startNav();



function nav(){
    
   
    if (show==1) {
        Presentation=document.getElementById("Presentation").style.display='';
        Presentation=document.getElementById("BTS").style.display='none';
        Presentation=document.getElementById("Realisation").style.display='none';
        Presentation=document.getElementById("Veille").style.display='none';
    }
    if (show==2) {
        Presentation=document.getElementById("Presentation").style.display='none';
        Presentation=document.getElementById("BTS").style.display='';
        Presentation=document.getElementById("Realisation").style.display='none';
        Presentation=document.getElementById("Veille").style.display='none';
    }
    if (show==3) {
        Presentation=document.getElementById("Presentation").style.display='none';
        Presentation=document.getElementById("BTS").style.display='none';
        Presentation=document.getElementById("Realisation").style.display='';
        Presentation=document.getElementById("Veille").style.display='none';
    }
    if (show==4) {
        Presentation=document.getElementById("Presentation").style.display='none';
        Presentation=document.getElementById("BTS").style.display='none';
        Presentation=document.getElementById("Realisation").style.display='none';
        Presentation=document.getElementById("Veille").style.display='';
    }
}
////
