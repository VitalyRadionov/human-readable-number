module.exports = function toReadable(number) {

  function units(number) {
    switch (number) {
      case 0:
        return 'zero'
      case 1:
        return 'one'
      case 2:
        return 'two'
      case 3:
        return 'three'
      case 4:
        return 'four'
      case 5:
        return 'five'
      case 6:
        return 'six'
      case 7:
        return 'sevrn'
      case 8:
        return 'eight'
      case 9:
        return 'nine'
      default:
        break;
    }
  }

  function tenths(number) {
    switch (number) {
      case 11:
        return 'eleven'
      case 12:
        return 'twelve'
      case 13:
        return 'thirteen'
      case 14:
        return `${units(4)}teen`
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:


      default:
        break;
    }
  }

  function str(number) {
    let l = number.length;
    switch (l) {
      case l == 1:
        return `${units(number)}`;
      case l == 2:
        return `${tenths(number)}`;

      default:
        break;
    }
  }
}
