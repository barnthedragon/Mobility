/* Javascript code for Calculator app.
Bond Uni, Mobility, Assignment 1
by Barney St George
*/

/*
	Code for getting button value if not using jquery: 
	function newNumber()
	{
	var dom = document.getElementById("#buttionId");
	//alert(dom.value);
	}
*/

var newNumber;
var displayValue;
var displayReadyForNewNumber = true;
var testPoint = false;
var mathFunction=null;
var storedValue0=null;
var storedValue1=null;
//var storedValue2=null;
var memoryValue = 0;
var changeSignTempStore;
var multipleEqualSign=false;
var multipleMathsFunction=false;



//newNumber = document.getElementById("blah").value;
  $(document).ready(function() 
	{
        $('.digitButton').click(function() 
		{
			multipleEqualSign=false;
			multipleMathsFunction=false;
			if(displayReadyForNewNumber == true)
			{
			//alert(displayReadyForNewNumber);
			$('#Display').val("");
			displayReadyForNewNumber = false;
			//alert(displayReadyForNewNumber);
			}
            //alert($(this).attr('value'));
			newNumber=$(this).attr('value');
			if(newNumber == ".")
			{
			if(testPoint==true)
			{
			return;
			}
			}
			disNumber= $('#Display').val();
			if(disNumber.length<10)
			{
			
			
			if(disNumber == "" )
				{
				$('#Display').val(newNumber);
				//alert($('#Display').val());
				}
			else
				{
				disNumber= disNumber + newNumber;
				$('#Display').val(disNumber);
								}
			if(newNumber == ".")
			{
			testPoint=true;
			}
			}
			else
			{
			// Display is already 10 digits in length.
			return;
			}
		
        });
    });

$(document).ready(function() 
	{$('.mathButton').click(function() 
		{
		if(multipleMathsFunction==true)
		{
		mathFunction=$(this).attr('value');
		return;
		}
		multipleMathsFunction=true;
		//alert("start math sv0: " + storedValue0);
		//alert("start math sv1: " + storedValue1);
		storedValue0=storedValue1;
		//alert("New storedValue0 : " + storedValue0);
		storedValue1=$("#Display").val();
		//alert("in math sv1 from display: " + storedValue1);
		//alert("from display storedValue1: " + storedValue1);
		//alert("existing mathfunction: " + mathFunction);
		if(storedValue0==null)
		{
		//alert("returning asstoredValue0 null: ");
		mathFunction=$(this).attr('value');
		displayReadyForNewNumber = true;
		testPoint = false;
		return;
		}
		calculateEquals();
		mathFunction=$(this).attr('value');
		//alert("new mfunct: " + mathFunction);

		});
	});

function calculateEquals()
{	storedValue0=parseFloat(storedValue0);
	storedValue1=parseFloat(storedValue1);
	//alert ("cal");
	//alert("sv0: " +storedValue0);
	//alert("sv1: " + storedValue1);


	if(mathFunction=="*")
		{
		$('#Display').val(storedValue0 * storedValue1);
		}
		if(mathFunction=="/")
		{
		if(storedValue1==0)
		{
		$('#Display').val("/0 Error");
		displayReadyForNewNumber = true;
		testPoint = false;
		return (storedValue1);
		}
		else
		{	
		$('#Display').val(storedValue0 / storedValue1);
		}
		}
		if(mathFunction=="+")
		{
		//alert("doing +");
		var temp = storedValue0 + storedValue1;
		//alert("temp value: " + temp);
		storedValue1=storedValue0+storedValue1;
		$('#Display').val(storedValue1);
		//alert("pause");
		//$('#Display').val(temp);
		}
		if(mathFunction=="-")
		{
		$('#Display').val(storedValue0 - storedValue1);
		}
	
	
		if ($('#Display').val()>9999999999)
		{
		$('#Display').val("Too Large");
		}
		if ($('#Display').val()<=(-10000000000))
		{
		$('#Display').val("Too Small");
		}

		displayReadyForNewNumber = true;
		testPoint = false;
		storedValue0=null;
		storedValue1=null;
		return;
		//alert("end calc sv1: " + storedValue1);
}

$(document).ready(function() 
	{
$('#equalButton').on('click',  function()
	{
	//alert("DE start: " + multipleEqualSign);
	if(multipleEqualSign)
	{
	return;
	}
	multipleEqualSign=true;
	//alert("DE later: " + multipleEqualSign);
	storedValue0=storedValue1;
		//alert("sv0: " +storedValue0);
	//alert("sv1: " + storedValue1);
		if(storedValue0==null)
	{
	return;
	}

storedValue1=$('#Display').val();
	
	calculateEquals();
	});
});

/*	
$(document).ready(function() 
	{
        $('.mathButton').click(function() 
		{
		
		if(storedValue==null)
		{
		alert(".math storedVal = null");
		storedValue=parseFloat($('#Display').val());
		$('#Display').val(storedValue);
		mathFunction=$(this).attr('value');
		//alert(mathFunction);
		displayReadyForNewNumber = true;
		testPoint = false;
		//alert(displayReadyForNewNumber);
		//alert(storedValue);
		return;
		}
		else
	
		{
		//alert(".math storedVal not null");
		alert("storedValue1 at start : "+ storedValue);
		alert("sv2 at start: " + storedValue2);
		calculateEquals();
		//alert("mathfunct old: " + mathFunction);
		mathFunction=$(this).attr('value');
		//alert("mathfunct new: " + mathFunction);
		storedValue = parseFloat($('#Display').val());
		$('#Display').val(storedValue);
		alert("sv end of math: "+ storedValue);
		alert("sv2 end of math: "+ storedValue2);
		//storedValue2=0;
		displayReadyForNewNumber = true;
		testPoint = false;
		}
		});
	});
$(document).ready(function() 
	{
$('#equalButton').on('click',  calculateEquals);
	});


function calculateEquals()
{
//alert("begin calcequals storedValue: " + storedValue);
//alert("begin calcequals storedValue2: " + storedValue2);

		storedValue2=parseFloat($('#Display').val());
		$('#Display').val(storedValue2);

		alert("in calcequals sv1: " + storedValue);
		alert(" in calcequals sv2: " + storedValue2);
		alert(mathFunction);

		if(mathFunction=="*")
		{
		$('#Display').val(storedValue * storedValue2);
		}
		if(mathFunction=="/")
		{
		if(storedValue2==0)
		{
		$('#Display').val("/0 Error");
		displayReadyForNewNumber = true;
		testPoint = false;
		return;
		}
		$('#Display').val(storedValue / storedValue2);
		}
		if(mathFunction=="+")
		{
		alert("doing +");
		var temp = storedValue + storedValue2;
		alert(temp);
	
		$('#Display').val(storedValue + storedValue2);
		alert("pause");
		$('#Display').val(temp);
		}
		if(mathFunction=="-")
		{
		$('#Display').val(storedValue - storedValue2);
		}
		if ($('#Display').val()>9999999999)
		{
		$('#Display').val("Too Large");
		}
		if ($('#Display').val()<=(-10000000000))
		{
		$('#Display').val("Too Small");
		}
		displayReadyForNewNumber = true;
		testPoint = false;
		//storedValue = null;
		//alert(displayReadyForNewNumber);
		//alert(" end calcequals sv: "+ storedValue);
		//alert("end calcequals sv2: "+ storedValue2);

}
*/
/*	
function truncateDecimals(num, digits) {
  var numS = num.toString(),
      decPos = numS.indexOf('.'),
      result = numS.substr(0, 1 + decPos + digits);

  if(isNAN(result) {
    result = 0;
  }

  return parseFloat(result);
}

*/
/* Clear Screen ready for new sum */
$(document).ready(function() 
	{
        $('#clearButton').click(function() 
		{
		storedValue0=null;
		storedValue1=null;
		mathFunction=0;
		$('#Display').val("0");
		displayReadyForNewNumber = true;
		testPoint = false;

		});
	});
/* Clear Memory */
		$(document).ready(function() 
	{
        $('#cmButton').click(function() 
		{
		//alert(memoryValue);
		memoryValue = 0;
		displayReadyForNewNumber = true;
		testPoint = false;
		//alert(memoryValue);
		});
	});
/* Recall Memory */
		$(document).ready(function() 
	{
        $('#rmButton').click(function() 
		{
		//alert(memoryValue);
		$('#Display').val(memoryValue);
		displayReadyForNewNumber = true;
		testPoint = false;
		//alert(memoryValue);
		});
	});
/* Memory Add */
	$(document).ready(function() 
	{
        $('#mAddButton').click(function() 
		{
		//alert(memoryValue);
		memoryValue = memoryValue + parseFloat($('#Display').val());
		displayReadyForNewNumber = true;
		testPoint = false;
		//alert(memoryValue);
		});
	});
/* Memory Minus */
		$(document).ready(function() 
	{
        $('#mMinusButton').click(function() 
		{
		//alert(memoryValue);
		memoryValue = memoryValue - parseFloat($('#Display').val());
		displayReadyForNewNumber = true;
		testPoint = false;
		//alert(memoryValue);
		});
	});
/* Change Sign */
/* Change Sign idea comes from my home calculator Canon LS-80H */
		$(document).ready(function() 
	{
        $('#changeSignButton').click(function() 
		{
			changeSignTempStore = $('#Display').val();
		$('#Display').val(changeSignTempStore);
		if(changeSignTempStore == 0)
		{
		$('#Display').val("0")
		return;
		}
		//$('#Display').val(-1* parseFloat(changeSignTempStore));

		$('#Display').val(-1* parseFloat($('#Display').val()));
	
		});
	});


