module.exports = function getZerosCount(number, base) {
  var dividers = [];
  var powers = [];

  for (var i = base / 2; i >= 2; i--) {

      var power = 0;

      while (base % i === 0) {
          base /= i;
          power++;
      }

      if (power > 0) {
          dividers.push(i);
          powers.push(power);
      }
  }
  console.log(powers);
  console.log(dividers);
}
