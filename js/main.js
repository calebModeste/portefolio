// vARIABLE  //
var  show, type;



// navSection  //
const startNav=()=>{
    Presentation=document.getElementById("Presentation").style.display='';
    Presentation=document.getElementById("BTS").style.display='none';
    Presentation=document.getElementById("Realisation").style.display='none';
    Presentation=document.getElementById("Veille").style.display='none';
    
}
const typeDeProjet=()=>{
    type=document.getElementById("Project").style.display='';
    type=document.getElementById("E5").style.display='none';
    type=document.getElementById("stage").style.display='none'
}
startNav();
typeDeProjet();


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

function typeProj(){
    if (type == 0) {
        type=document.getElementById("Project").style.display='';
        type=document.getElementById("E5").style.display='none';
        type=document.getElementById("stage").style.display='none'

    }
    if (type == 1) {
        type=document.getElementById("Project").style.display='none';
        type=document.getElementById("E5").style.display='';
        type=document.getElementById("stage").style.display='none'

    }
    if (type == 2) {
        type=document.getElementById("Project").style.display='none';
        type=document.getElementById("E5").style.display='none';
        type=document.getElementById("stage").style.display=''

    }
}
////
