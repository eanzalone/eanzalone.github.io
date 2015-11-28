console.log("Client Side JS Connected.");
$(document).ready(function(){
	console.log("Document Ready");




$('.testbtn').click(function(e){
	console.log("btn clicked");
});

(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=725796&sec_hash=ee6c8ca016a&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));



}); //close doc ready