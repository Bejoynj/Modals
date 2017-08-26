var modalopenButton = document.getElementById('modal-button');
var bodyTag = document.getElementsByTagName("body")[0];   
var att = document.createAttribute("class");       
att.value = "modalbody";                            
modalopenButton.addEventListener("click" , modalOpen);
function modalOpen(){
    cartmodal.style.cssText = "display:block;";
    modal_bg.style.cssText = "display:block;";
    bodyTag.setAttributeNode(att);
}
var modalcloseButton = document.getElementById('close');
modalcloseButton.addEventListener("click", modalClose);
var modalBackground = document.getElementById('modal_bg');
modalBackground.addEventListener("click", modalClose);
function modalClose(){
    cartmodal.style.cssText = "display:none;";
    modal_bg.style.cssText = "display:none;";
    bodyTag.removeAttribute("class")
}