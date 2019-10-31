function myfun()
{

	var UserName=document.getElementById('UName').value;
	var UserEmail=document.getElementById('UEmail').value;
	var UPass=document.getElementById('UPass').value;
	var UCPass=document.getElementById('UCPass').value;

	if (UserName=="") 
	{
		document.getElementById('UBlank').innerHTML="Please Enter the User Name";
	}

	else if(UserName!="")
	{
		document.getElementById('UBlnak').innerHTML="";
	}



	if (UserEmail=="") 
	{
		document.getElementById('EmailBlank').innerHTML="Please Enter the User Name";
	}

	else if(UserEmail!="")
	{
		document.getElementById('EmailBlank').innerHTML="";
	}


	if (UPass=="") 
	{
		document.getElementById('PassBlank').innerHTML="Please Enter the User Name";
	}

	else if(UPass!="")
	{
		document.getElementById('PassBlank').innerHTML="";
	}


	if (UCPass=="") 
	{
		document.getElementById('PassCBlank').innerHTML="Please Enter the User Name";
	}

	else if(UCPass!="")
	{
		document.getElementById('PassCBlank').innerHTML="";
	}

	if (UPass!=UCPass) 
	{
		document.getElementById('PassCBlank').innerHTML="Please Enter Conform Password";
	}
	else if (UserName!="" && UserEmail!="" && UPass!="" && UCPass!="") 
	{
		document.getElementById('Success').innerHTML="You Have Successfully Register";
		window.location=('http://www.onlineittuts.com');
	}

}