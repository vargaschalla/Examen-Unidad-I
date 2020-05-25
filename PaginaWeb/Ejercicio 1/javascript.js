function multiplicar(){
	var nume1=document.getElementById('numero').value;
	var nume2=document.getElementById('numero1').value;
	
	var a,b,total=0;
	a=nume1;
	b=nume2;

	while(a!=0){
		if (a%2!=0){
			total=total+b;
		}
		a=parseInt(a/2);
		b=b*2;
	}
	document.getElementById('resultado').innerHTML="Resultado : "+total;
}



