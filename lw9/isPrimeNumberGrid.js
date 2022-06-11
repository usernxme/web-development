function isPrimeNumber(Num)
{
	if (typeof Num == 'number' || Array.isArray(Num)) {
   	if (typeof Num == 'number') {
	  	(primeDigit(Num))
	    	? console.log(Num + ' is prime number')
	    	: console.log(Num + ' is not prime number');
    } else {
      if (Array.isArray(Num)) {
        for (let i = 0; i < Num.length; i++) {
          if (typeof Num[i] == 'number') {
            (primeDigit(Num[i]))
              ? console.log(Num[i] + ' is prime number')
              : console.log(Num[i] + ' is not prime number');                
          } else if (typeof Num[i] == 'undefined' || typeof Num[i] == 'string') {
            console.log('Error: this element not number');                
          }
        }
      }
    }
	}
	else if (typeof Num == 'undefined' || typeof Num == 'string')
	{
		console.log('Error: this element not number');
	}
}

function primeDigit(Num)
{
	let isPrime;
	for (let i = 0; i <= Num; i++)
	{
		isPrime = true;
		for (let j = 2; j < i; j++)
		{
			if (i % j == 0)
			{
				isPrime = false;
				break;
			}
		}
	}  
	return isPrime;
}