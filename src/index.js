module.exports = function getZerosCount(number, base) {
    var baseExp = [];
    var exp = [];
    var arr = [];
    var result = number;

    for (var i = 2; i <= base; i++) {
        var exponent = 0;
        while (base % i === 0) {
            base /= i;
            exponent++;
        }
        if (exponent > 0) {
            baseExp.push(i);
            exp.push(exponent);
        }
    }

    for (var i = 0; i < baseExp.length; i++) {
        var value = 1;
        arr[i] = 0;
        while (value <= number) {
            value *= baseExp[i];
            arr[i] += Math.floor(number / value);
        }
        
        result = Math.min(result, Math.floor(arr[i] / exp[i]));
    }

    return result;


    console.log(baseExp);
    console.log(exp);
    console.log(result);
}