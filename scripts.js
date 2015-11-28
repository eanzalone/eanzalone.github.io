console.log("Client Side JS Connected.");
$(document).ready(function(){
	console.log("Document Ready");

(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=725845&sec_hash=94006383102&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));

}); //close doc ready