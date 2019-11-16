const myInp = document.getElementById("myInp");
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function() {
	// step -1 selection the text
	myInp.select();

	// step-2 copying the text
	document.execCommand("Copy");
};

