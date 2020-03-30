
var slidcontainer= document.querySelector('#sldrcntnr')
var sldrcntnr2= document.querySelector('#sldrcntnr2')
var slider= document.querySelectorAll('#sldrcntnr img');
var slider2= document.querySelectorAll('#sldrcntnr2 img');
//button




//counter
var count= 1;
var count2= 1;
var size= slider[0].clientHeight;
var size2= slider2[0].clientHeight;


//click function

setInterval(function(){
	if(count<=0) return;
	slidcontainer.style.transition="transform 1s ease-in-out";
	count--;
	slidcontainer.style.transform= 'translateY('+(- size * count)+'px)';
	


slidcontainer.addEventListener("transitionend",function(){
	
if(slider[count].id=== 'sliderfItems'){
	slidcontainer.style.transition="none";
	count= slider.length - 2;
	slidcontainer.style.transform= 'translateY('+(- size * count)+'px)';
}

});
},4000);
setInterval(function(){
	if(count2<=0) return;
	sldrcntnr2.style.transition="transform 1s ease-in-out";
	count2--;
	sldrcntnr2.style.transform= 'translateY('+(- size2 * count2)+'px)';
	


sldrcntnr2.addEventListener("transitionend",function(){
	
if(slider2[count2].id=== 'sliderfItems2'){
	sldrcntnr2.style.transition="none";
	count2= slider2.length - 2;
	sldrcntnr2.style.transform= 'translateY('+(- size2 * count2)+'px)';
}

});
},4000);
