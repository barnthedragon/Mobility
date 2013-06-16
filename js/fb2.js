//java script for Fizz Buzz


function startGame()
{

	var startVal=parseInt(document.getElementById("startVal").value);
	var endVal=parseInt(document.getElementById("endVal").value);
	var timeVal=parseInt(document.getElementById("timeVal").value);

	//alert(startVal);
	//alert(endVal);
	// Test input values are integers and in correct range.
	if (!(endVal >= startVal))
		{
		//alert(startVal);
		document.getElementById("warnEnd").innerHTML="The end value should be bigger than the start value.";
		// Break as invalid start or end value.
		return;
		}
	if (!(startVal>=0))
		{
		document.getElementById("warnStart").innerHTML="The start value should be numeric and greater than  or equal to 0";
		// Break as invalid start or end value.
		return;
		}
	//alert("endVal is bigger than startVal");
	// Test time delay is valid.
	if(!(timeVal>=250 && timeVal<=5000))
		{
		document.getElementById("warnTime").innerHTML=" The time should be between 250 and 5000.";
		// Break as invalid time inteval.
		//alert("invalid time");
		return;
		}
	document.getElementById("nums").innerHTML="";
	warnStartNull();
	warnEndNull();
	warnTimeNull();
	goUp(startVal, endVal, timeVal);


}

function goUp(numStart,numEnd, timeInt)
{
	var myNum=numStart;
	var numEnd=numEnd;
	var timeInt=timeInt;
	var newMyNum=parseInt(myNum)+1;
	var nextNum=newMyNum;
	if(newMyNum>numEnd)
		return;
	if(newMyNum%3==0 && newMyNum%5==0)
		{newMyNum="FizzBuzz";}
	if (newMyNum%3==0)
		{newMyNum = "Fizz";}
	if(newMyNum%5==0)
		{newMyNum="Buzz";}
	// Create new para for insertion.
	var newP=document.createElement("p");
	if(newMyNum=="Fizz")
		{newP.setAttribute("class", "Fizz");}
	if(newMyNum=="Buzz")
		{newP.setAttribute("class", "Buzz");}
	if(newMyNum=="FizzBuzz")
		{newP.setAttribute("class", "FizzBuzz");}
	// Prepend new blank paragraph
	var existingP=document.getElementById("nums");
	existingP.insertBefore(newP,existingP.childNodes[0]);
	// Put a value in the new para
	document.getElementById("nums").childNodes[0].innerHTML=newMyNum;
	// Do it all again.
	setTimeout(function() {goUp(nextNum,numEnd, timeInt);}, timeInt);
	
}

function testBigger()
{
	var startVal=parseInt(document.getElementById("startVal").value);
	var endVal=parseInt(document.getElementById("endVal").value);
	//alert(endVal);
	if (endVal <= startVal)
		{
		//alert(startVal);
		document.getElementById("warnEnd").innerHTML="The end value should be bigger than the start value.";
		}	
}

function warnEndNull()
	{
	document.getElementById("warnEnd").innerHTML="";
	}
	
function warnStartNull()
	{
	document.getElementById("warnStart").innerHTML="";
	}
	
function warnTimeNull()
	{
	document.getElementById("warnTime").innerHTML="";
	}	
	
function testValidStart()
	{
	var startVal=parseInt(document.getElementById("startVal").value);
	//alert(startVal);
	if (!(startVal>=0))
		{
		//alert("start not valid");
		document.getElementById("warnStart").innerHTML="The start value should be numeric and greater than  or equal to 0";
		}
	}
function testValidTime()
	{
	var timeInt = parseInt(document.getElementById("timeVal").value);
	//alert(timeInt);
	if(!(timeInt>=250 && timeInt<=5000))
		{
		document.getElementById("warnTime").innerHTML=" The time should be between 250 and 5000.";
		}
	}
