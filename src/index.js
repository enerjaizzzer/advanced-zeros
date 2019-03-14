module.exports = function getZerosCount(number, base) {
    var baseExp = [];
    var exp = [];

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
    var result = 0;
    for (var i = 0; i < baseExp.length; i++) {
        // for baseExp
        for (var j = 1; j <= exp[i]; j++) {
            var n = number;
            if (n % Math.pow(baseExp[i], exp[i]) === 0) {
                result += n / Math.pow(baseExp[i], exp[i]);
                break;
            } else {
                result = Math.trunc(n / Math.pow(baseExp[i], exp[i]));
                n -= result;
            }
        }

    }

    console.log(baseExp);
    console.log(exp);
    console.log(result);
}
