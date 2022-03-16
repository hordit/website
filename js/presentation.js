function view(){
	let pusk = document.getElementById("pusks");
    pusk.style.display = getComputedStyle(pusk).display == 'block' ? 'none' : 'block';
}