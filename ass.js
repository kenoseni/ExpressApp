const ass = (args) => {
    let string = []
    let number = []
    let obj = {}
    //var a = args;
    for(let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'string') {
            string.push(args[i])
        } else {
            number.push (args[i])
        }
    }
    obj.string = string
    obj.number = number
    return(obj)
    //console.log(string)
}
console.log(ass(['bool', 3, 'pin', 3.5]))


const isPrime = numb => {
    if(numb === 0) {
      return false;
    }
    else if(Number.isInteger(numb)) {
      for(let i = 2; i < numb; i++) {
        if(numb%i === 0) {
          return false;
        }
      }
      return numb !== 1;
    } else {
      throw Error ('Argument must be an integer');
    }
  };
  console.log(isPrime(2))

  const fibonacci = (n) => {
    let a = 0;
    let b = 1;
    let f = 1;
    if (n === 0) {
      return 0;
    }
    else if (Number.isInteger(n)) {
      for(let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
      }
      return f;
    } else {
      throw Error('Argument must be an interger');
    }
    
  };
  console.log(fibonacci(131));