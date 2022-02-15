

//check whether the name should be minimum 3 character in length and should not contain any numbers	

function namecorrect(){
	
	value=document.getElementById('id1').value;

	if (value.length<3)
	{
		document.getElementById("demo1").innerHTML = "*Minimum 3 characters";
		document.getElementById("fourm").addEventListener("click", function(event){event.preventDefault() });

	}
	else if (value.length>3||value.length==3)
	{
		document.getElementById("demo1").innerHTML = "";
		return fourm;
	}
}	

function pcorrect(){

	value4=document.getElementById('id1').value;
	nameRegex = /^[a-zA-Z]+$/;
			
	if(!value4.match(nameRegex))
	{
		document.getElementById("demo2").innerHTML = "*characters only";
		document.getElementById("fourm").addEventListener("click", function(event){event.preventDefault() });
	}
	else if (value4.match(nameRegex))
	{
		document.getElementById("demo2").innerHTML = "";
		return fourm;
	}
}


// check whether the email should be in valid format

function validation() {
	
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	value3=document.getElementById('id2').value;
				
	if (!value3.match(validRegex)) 
	{
		document.getElementById('demo3').innerHTML='*Not Valid format';
		document.getElementById("fourm").addEventListener("click", function(event){event.preventDefault() });
	}
	else if (value3.match(validRegex)) 
	{
		document.getElementById("demo3").innerHTML = "";
		return fourm;
	}
			
}


//check whether the phone should be minimum 10 numbers in length

function numcorrect(){
	
	value1=document.getElementById('id3').value;
			
	if (value1.length<10) 
	{
		document.getElementById("demo4").innerHTML = "*Minimum 10 numbers";
		document.getElementById("fourm").addEventListener("click", function(event){event.preventDefault() });

	}
	else if (value1.length>10||value1.length==10)
	{
		document.getElementById("demo4").innerHTML = "";
		return fourm;
	}
}	

			
//check whether password should be minimum 6 character in length	

function passcorrect(){
	
	value2=document.getElementById('id4').value;
			
	if (value2.length<6) 
	{
		document.getElementById("demo5").innerHTML = "*Minimum 6 charcters";
		document.getElementById("fourm").addEventListener("click", function(event){event.preventDefault() });
	}
	else if (value2.length>6||value2.length==6)
	{
		document.getElementById("demo5").innerHTML = "";
		return fourm;
	}
}	
	
//To check all the fields are filled

function myFunction() {

    if (!document.getElementById("id1").value||!document.getElementById("id2").value||!document.getElementById("id3").value||!document.getElementById("id4").value) 
    {
        
        document.getElementById("demo6").innerHTML = "*Please fill all the required fields";
        document.getElementById("fourm").addEventListener("click", function(event){ event.preventDefault() });

 	}
 	 else if (document.getElementById("id1").value||document.getElementById("id2").value||document.getElementById("id3").value||document.getElementById("id4").value)
 	{
    
    	document.getElementById("demo6").innerHTML = "";
    	return fourm;
    } 
}
		



			
		
		
		