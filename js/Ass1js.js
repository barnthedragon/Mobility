/* 
	Javascript code for Calculator app.
	Bond Uni, Mobility, Assignment 1
	by Barney St George 13208897
	
	Using Jquery.
*/

var newNumber;							// The number we will read from the display.
var displayValue;						// The value we will write to the display.
var mathFunction=null;					// Hold the value of the maths function or operator * / + or -.
var storedValue0=null;					// Perform math functions on this.
var storedValue1=null;					// Perform math functions on this.
var memoryValue = 0;					// Initialise memory value.
var displayReadyForNewNumber = true;	// Control. Display additional digits or make new entry.
var testPoint = false;					// Control so decimal point entered only once.
var multipleMathsFunction=false;		// Control. Nullify multiple presses of * / + and -.
var multipleEqualSign=false;			// Control. Nullify multiple presses of = button.

/* Get a digit or decimal and build a number. */
$(document).ready(function() 
	{
        $('.digitButton').click(function() 
		{
			multipleEqualSign=false;
			multipleMathsFunction=false;
			if(displayReadyForNewNumber == true)
			{
				$('#Display').val("");
				displayReadyForNewNumber = false;
			}
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

/* A maths operator button gets pressed. */
$(document).ready(function() 
	{$('.mathButton').click(function() 
		{
			// Deal with multiple presses of a maths operator button.
			if(multipleMathsFunction==true)
			{
				mathFunction=$(this).attr('value');
				return;
			}
			// Set up to do maths.
			multipleMathsFunction=true;
			storedValue0=storedValue1;
			storedValue1=$("#Display").val();
			// Can't do maths on only number.
			if(storedValue0==null)
			{
				mathFunction=$(this).attr('value');
				displayReadyForNewNumber = true;
				testPoint = false;
				return;
			}
			// Do the maths, show result and get ready for next maths function.
			calculateEquals();
			mathFunction=$(this).attr('value');
			storedValue1=$("#Display").val();
		});
	});

/* Calculate and display an answer - ie do the maths. */
function calculateEquals()
	{	
		storedValue0=parseFloat(storedValue0);
		storedValue1=parseFloat(storedValue1);
		if(mathFunction=="*")
		{
			storedValue1 = storedValue0 * storedValue1;
			// Make sure display not more than 10 digits.
			storedValue1 = storedValue1.toString(10);
			if(storedValue1.length>11)
			{
				storedValue1=storedValue1.substr(0,11);
			}
			// Write * result to display.
			$('#Display').val(storedValue1);
		}
		if(mathFunction=="/")
		{
			if(storedValue1==0)
			{
				$('#Display').val("/0 Error");
				displayReadyForNewNumber = true;
				testPoint = false;
				return;
			}
			else
			{	
				storedValue1=storedValue0 / storedValue1;
				// Make sure display not more than 10 digits.
				storedValue1 = storedValue1.toString(10);
				if(storedValue1.length>11)
				{
					storedValue1=storedValue1.substr(0,11);
				}
				// Write / result to display.
				$('#Display').val(storedValue1);
			}
		}
		if(mathFunction=="+")
		{
			storedValue1=storedValue0+storedValue1;
			// Write + result to display.
			$('#Display').val(storedValue1);
		}
		if(mathFunction=="-")
		{
			storedValue1=storedValue0 - storedValue1;
			// Write - result to display.
			$('#Display').val(storedValue1);
		}
		// Show error if result is too large or too small.
		if ($('#Display').val()>9999999999)
		{
			$('#Display').val("Too Large");
		}
		if ($('#Display').val()<=(-10000000000))
		{
			$('#Display').val("Too Small");
		}
		// Reset control variables.
		displayReadyForNewNumber = true;
		testPoint = false;
		storedValue0=null;
		return;
	}

	/* The equals button gets pressed.  */
$(document).ready(function() 
	{
$('#equalButton').on('click',  function()
	{
		if(multipleEqualSign)
		{
			return;
		}
		multipleEqualSign=true;
		storedValue0=storedValue1;
		if(storedValue0==null)
		{
			return;
		}
		storedValue1=$('#Display').val();
		calculateEquals();
		multipleMathsFunction=true;
	});
});

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
			memoryValue = 0;
			displayReadyForNewNumber = true;
			testPoint = false;
		});
	});
	
/* Recall Memory */
	$(document).ready(function() 
	{
        $('#rmButton').click(function() 
		{
			$('#Display').val(memoryValue);
			displayReadyForNewNumber = true;
			testPoint = false;
		});
	});
	
/* Memory Add */
$(document).ready(function() 
	{
        $('#mAddButton').click(function() 
		{
			memoryValue = memoryValue + parseFloat($('#Display').val());
			displayReadyForNewNumber = true;
			testPoint = false;
		});
	});
	
/* Memory Minus */
$(document).ready(function() 
	{
        $('#mMinusButton').click(function() 
		{
			memoryValue = memoryValue - parseFloat($('#Display').val());
			displayReadyForNewNumber = true;
			testPoint = false;
		});
	});
	
/* Change Sign */
/* Change Sign idea comes from my home calculator Canon LS-80H */
$(document).ready(function() 
	{
        $('#changeSignButton').click(function() 
		{
			$('#Display').val(-1* parseFloat($('#Display').val()));
		});
	});
	


