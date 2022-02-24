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

let morseConv = {};
let encode = (code) => {
    code = code.replace(/-/g, '11');
    code = code.replace(/\./g, '10');
    return code.padStart(10, '0');
}

Object.entries(MORSE_TABLE).forEach(entry => morseConv[encode(entry[0])] = entry[1]);
morseConv['*'.repeat(10)] = ' ';
function decode(expr) {
    // Split in batches 10 symbols each, convert each batch separatly, then join and return
    let decoded = "";
    for (let i = 0; i < expr.length; i+=10)
    {
        let symbol = expr.slice(i, i + 10);
        decoded += morseConv[symbol];
    }
    return decoded;
}

module.exports = {
    decode
}