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
  let res = [];
  for(let i = 0, j = 0; i < expr.length; i += 10, j++) {
    res[j] = expr[i] + expr[i + 1] + expr[i + 2] + expr[i + 3] + expr[i + 4] + expr[i + 5] + expr[i + 6]  + expr[i + 7] + expr[i + 8] + expr[i + 9];
  }
  for(let i = 0; i < res.length; i++) {
    if(res[i] == '**********') {
      res[i] = " ";
    } else {
      res[i] = codeToLet(res[i]);
    }
  }
  return res.join('');
    function codeToLet(code) {
      let item = code.split(''), res = [], letter = '';
      for(let i = 0; i < 9; i += 2) {
        res.push(item[i] + item[i + 1]);
      }
      for(let i = 0; i < 5; i++) {
        if(res[i] == 10) {
          letter += '.';
        } else if (res[i] == 11) letter += '-';
      }
      
      letter = MORSE_TABLE[letter];
      return letter;
    }
}

module.exports = {
    decode
}