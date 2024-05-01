const crypto = require('crypto');

const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/';

const HASH_ID = 'dds';

function countTrailingZeros(binaryString) {
    const number = parseInt(binaryString, 2);
    let count = 0;
    while ((number & 1) === 0) {
        count++;
        number >>= 1;
    }
    return count;
}

function extendedNumberToString(num, radix) {
    if (radix < 2n || radix > 64n || typeof (radix) !== 'bigint') {
        throw new RangeError('extendedNumberToString() radix must be between 2 and 64');
    }

    let result = '';

    let newNum = num;//Math.abs(num);

    do {
        const remainder = newNum % radix;
        result = CHARACTERS[remainder] + result;
        newNum = (newNum - remainder) / radix;//Math.floor(newNum / radix);
    } while (newNum > 0n);

    if (num < 0n) {
        result = '-' + result;
    }

    return result;
}

function bigRandomInt(size) {
    let res = 0n;
    let remainder = size;
    do {
        let remove = remainder > 48 ? 48 : remainder;
        res = (res << BigInt(remove)) + BigInt(crypto.randomInt((2 ** remove) - 1));
        remainder -= remove;
    } while (remainder > 0);
    return res;
}

function genSalt(size = 256) {
    return extendedNumberToString(bigRandomInt(size), 62n);
}

function shiftCharacters(str, amount) {
    let am = -amount % str.length;
    return str.slice(am) + str.slice(0, am);
}

function stringToBinary(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str.charCodeAt(i).toString(2);
    }
    return newStr;
}

function hashPassword(hash) {
    function binaryMix(mixStr) {
        const shiftOneLeft = (str) => {
            return str.slice(1) + str[0];
        }

        const shuffleChars = (str) => {
            if (str.length === 1) {
                return str;
            }

            const numeroOno = shuffleChars(str.slice(0, str.length * 0.5));
            const numeroDos = shuffleChars(str.slice(str.length * 0.5));

            return shiftOneLeft(numeroDos + numeroOno).split('').reverse().join('');
        }

        const mixed = shuffleChars(mixStr);

        const mixedBinary = BigInt(stringToBinary(mixed));
        const origBinary = BigInt(stringToBinary(mixStr));

        let switchy = (mixedBinary ^ origBinary) & BigInt(stringToBinary(hash));

        return extendedNumberToString(switchy, 64n);
    }

    const mixed = binaryMix(hash);

    const spinChars = (str) => {
        let newStr = '';
        let curStr = str;
        for (let i = 0; i < str.length; i++) {
            const shiftAmount = CHARACTERS.indexOf(curStr[0]);
            curStr = shiftCharacters(curStr, shiftAmount);
            newStr = shiftCharacters(newStr + curStr[0], shiftAmount);
            curStr = curStr.slice(1);
        }
        return newStr;
    }

    const tangoed = mixed; spinChars(mixed);

    let newHash = tangoed.slice(0, 36);

    return newHash;
}

function saltPassword(salt, saltRounds, password) {
    let hash = password;
    for (let i = 0; i < saltRounds; i++) {
        hash = hashPassword(hash + salt);
    }
    return hash;
}

function hash(password, saltRounds = 1000) {
    const salt = genSalt();
    const passwordHash = saltPassword(salt, saltRounds, password);
    return `${HASH_ID}$${salt}$${saltRounds}$${passwordHash}`;
}

function compare(password, passwordHash) {
    const [hashId, salt, saltRounds, passwordHashed] = passwordHash.split('$');
    if (hashId !== HASH_ID) {
        throw new Error('Invalid hash id');
    }
    return saltPassword(salt, saltRounds, password) === passwordHashed;
}

module.exports = {
    hash,
    compare,
};
