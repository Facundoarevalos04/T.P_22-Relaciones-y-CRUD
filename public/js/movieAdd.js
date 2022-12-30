const qs = (e) => document.querySelector(e)
const $ = e => document.getElementById(e);

$("title").addEventListener("focus", function (e) { 
    cleanError ("nameMsg", e)
   });
   $("title").addEventListener("blur", function (e) {
       switch (true) {
           case !this.value.trim():
               msgError("nameMsg", "el nombre de producto es obligatorio", e)
               break;
           default:
               validField("nameMsg", e)
               break;
       } 
   });