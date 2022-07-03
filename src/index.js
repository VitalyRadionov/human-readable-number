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
      20: `twenty ${number - 20 ? units(number - 20) : ''}`,
      30: `thirty ${number - 30 ? units(number - 30) : ''}`,
      40: `forty ${number - 40 ? units(number - 40) : ''}`,
      50: `fifty ${number - 50 ? units(number - 50) : ''}`,
      60: `sixty ${number - 60 ? units(number - 60) : ''}`,
      70: `seventy ${number - 70 ? units(number - 70) : ''}`,
      80: `eighty ${number - 80 ? units(number - 80) : ''}`,
      90: `ninety ${number - 90 ? units(number - 90) : ''}`,
    }

    return n[(89 < number) ? 90 : (79 < number) ? 80 : (69 < number) ? 70 : (59 < number) ? 60 : (49 < number) ? 50 : (39 < number) ? 40 : (29 < number) ? 30 : (19 < number) ? 20 : number];
  }


  function str(number) {
    let l = number.toString().length;
    switch (l) {
      case 1:
        console.log(`${units(number)}`);
        return `${units(number)}`;
      case 2:
        console.log(`${tenths(number)}`);
        return `${tenths(number)}`;
      case 3:
        console.log(`${units(Number(number.toString()[0]))} hundred ${tenths(number - 100)}`);
        return `${units(Number(number.toString()[0]))} hundred ${tenths(number - 100)}`;
      default:
        break;
    }
  }
  return str(number);
}
