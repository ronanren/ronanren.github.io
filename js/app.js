var bars = document.getElementsByClassName('bar');

for(i=0; i<bars.length; i++){
	bars[i].style.width = bars[i].textContent + "%";	
	bars[i].textContent = "";				
} 

