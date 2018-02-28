module.exports = function solveEquation(equation) {
  // your implementation
  
	var arr = equation.split(' ') ;   
    if (arr.length == 9) { 
         var a = parseFloat(arr[0]);
         var b = parseFloat(arr[4]);
         var c = parseFloat(arr[8]);
         var s1 = arr[3];
         var s2 = arr[7];
    }
    if (arr.length == 5) {
        var a = arr[0];
        var b = 0;
        var c = arr[4];
        var s1 = '+';
        var s2 = arr[3];
    }
    if (s2 == '-'){
        c = - c;
    }
    if (s1 == '-') {
        b = - b;
    }
    
    
        var d = parseFloat(Number(b) * Number(b) - 4 * Number(a) * Number(c));

        var x1 = Math.round((- b + Math.sqrt(d))/ (2 * a));
        var x2 = Math.round((- b - Math.sqrt(d))/ (2 * a));
	if (x1 < x2) {
        var x = [x1,x2];
	} else {
		var x = [x2,x1];
	}
 
	return x;
}
