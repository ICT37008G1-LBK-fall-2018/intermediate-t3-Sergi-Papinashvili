document.getElementById("highlight-product").onclick = function(e){
    let font_size = prompt("Font Size");
    let brand = prompt("Mwarmoebeli");
    
    let els = document.querySelectorAll("[data-brand='"+brand+"']");
    if (!els) {
        alert("not found");
        return;
    }
   for (let i = 0; i < els.length; i++) {
    els[i].style.fontSize = font_size+"px";
    els[i].style.fontWeight = "900";
   }
    
}