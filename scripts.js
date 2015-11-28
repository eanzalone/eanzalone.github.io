console.log("Client Side JS Connected.");
$(document).ready(function(){
	console.log("Document Ready");




$('.contact-btn').click(function(e){
	console.log("contact-btn clicked");
	window.location.replace('file:///Users/emilyanzalone/dev/portfolio/contact.html');
});


(function(d, t){
   var g = d.createElement(t),
       s = d.getElementsByTagName(t)[0];
   g.src = "http://www.foxyform.com/js.php?id=725796&sec_hash=ee6c8ca016a&width=350px";
   s.parentNode.insertBefore(g, s);
}(document, "script"));



}); //close doc ready