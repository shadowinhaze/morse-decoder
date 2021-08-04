const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let midStr = expr.match(/.{1,10}/g).map( item => {
      return item.replace(/00|10|11/g, (str, offset) => {
      switch (true) {
        case offset % 10 === 0 && offset != 0:
          return '===';
          break;
        case str === '00':
          return '';
          break;
        case str === '10':
          return '.';
          break;
        case str === '11':
          return '-';
          break;
      }
    })
    });
       return midStr.map(item => item.replace(/.*/, MORSE_TABLE[item])).join('').replace(/undefined/g, ' ');
  }

module.exports = {
    decode
}