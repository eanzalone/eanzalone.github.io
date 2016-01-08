console.log("Client Side JS Connected.");
$(document).ready(function(){
	console.log("Document Ready");
	// alert("Hello! I am an alert box!!");
	if (window.confirm('Interested in meeting Emily? Come to General Assembly\'s Meet & Hire! Wednesday, January 13th.\nClick OK to be redirected to the event page. Click Cancel to continue browsing this page.')) 
	{
	window.location.href='https://generalassemb.ly/education/web-developer-meet-greet-ef751d9f-4e50-4bc5-9d60-e231c2992d15/san-francisco/17130';
	};

	(function(d, t){
	   var g = d.createElement(t),
	       s = d.getElementsByTagName(t)[0];
	   g.src = "http://www.foxyform.com/js.php?id=737880&sec_hash=45202e02d88&width=350px";
	   s.parentNode.insertBefore(g, s);
	}(document, "script"));
	
}); //close doc ready