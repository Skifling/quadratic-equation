module.exports = solveEquation(equation) {
  // your implementation
  
 arr = equation.split(' ') ;   
    if (arr.length == 9) { 
         a = arr[0];
         b = arr[4];
         c = arr[8];
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
    
 
    if (s2 == '+') {
        d = Number(b) * Number(b) - 4 * Number(a) * Number(c);
    }
    if (s2 == '-') {
        d = Number(b) * Number(b) + 4 * Number(a) * Number(c); 
    }
    if (s1 == '+') {
        x1 = (- b + Math.sqrt(d))/ (2 * a);
        x2 = (- b - Math.sqrt(d))/ (2 * a);
    }
    if (s1 == '-') {
        x1 = (- b + Math.sqrt(d))/ (2 * a);
        x2 = (- b - Math.sqrt(d))/ (2 * a);
    }
 
 
 return a + ',' + b + ',' + c + ',' + s1 + ',' + s2 + ',' + d + ',' + arr.length + ',' + x1 + ',' + x2;
}
