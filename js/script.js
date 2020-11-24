function dada(){
	var x = document.getElementById("one").value;
	var y = document.getElementById("two").value;
	var z = parseInt(x) + parseInt(y);
	
	document.getElementById("result").innerHTML=z;
};

function habijabi(){
	var x = document.getElementById("three").value;
	
	
	if (x >=1 && x <8){
		document.getElementById("output").innerHTML = "good morning";
	} else if (x >=8 && x <16){
		document.getElementById("output").innerHTML = "good afternoon";
	} else if (x >=16 && x <25){
		document.getElementById("output").innerHTML = "good evening";
	}else{
		document.getElementById("output").innerHTML = "invalied number";
	}
}

