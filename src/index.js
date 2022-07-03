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
        return 'seven'
      case 8:
        return 'eight'
      case 9:
        return 'nine'
      default:
        return '';
    }
  }

  function tenths(number) {

    let nStart = Number(number.toString().slice(0, 1));

    function end(number) {
      let nEnd = Number(number.toString().slice(1));
      return nEnd ? ' ' + units(nEnd) : '';
    }

    const n = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: `${units(number - 10)}teen`,
      15: 'fifteen',
      16: `${units(number - 10)}teen`,
      17: `${units(number - 10)}teen`,
      18: 'eighteen',
      19: `${units(number - 10)}teen`,
      20: `twenty${end(number)}`,
      30: `thirty${end(number)}`,
      40: `forty${end(number)}`,
      50: `fifty${end(number)}`,
      60: `sixty${end(number)}`,
      70: `seventy${end(number)}`,
      80: `eighty${end(number)}`,
      90: `ninety${end(number)}`,
    }

    return n[nStart > 1 ? Number(nStart.toString() + '0') : number];
  }

  function str(number) {

    let str = number.toString();
    let start = Number(str[0]);
    let end = Number(str.slice(1));

    switch (str.length) {
      case 1:
        return `${units(number)}`;
      case 2:
        return `${tenths(number)}`;
      case 3:
        return `${units(start)} hundred${end > 9 ? ' ' + tenths(end) : end != 0 ? ' ' + units(end) : ''}`;
      default:
        break;
    }
  }
  return str(number);
}
