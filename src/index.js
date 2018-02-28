module.exports = solveEquation(equation) {
  // your implementation
  
	arr = equation.split(' ') ;   
    if (arr.length == 9) { 
         a = parseFloat(arr[0]);
         b = parseFloat(arr[4]);
         c = parseFloat(arr[8]);
         s1 = arr[3];
         s2 = arr[7];
    }
    if (arr.length == 5) {
        a = arr[0];
        b = 0;
        c = arr[4];
        s1 = '+';
        s2 = arr[3];
    }
    if (s2 == '-'){
        c = - c;
    }
    if (s1 == '-') {
        b = - b;
    }
    
    
        d = parseFloat(Number(b) * Number(b) - 4 * Number(a) * Number(c));

        x1 = Math.round((- b + Math.sqrt(d))/ (2 * a));
        x2 = Math.round((- b - Math.sqrt(d))/ (2 * a));
	if (x1 < x2) {
        var x = [x1,x2];
	} else {
		var x = [x2,x1];
	}
 
	return x;
}
