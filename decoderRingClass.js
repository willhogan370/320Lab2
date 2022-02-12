"use strict"
// Implementation of the decoder ring classes
class decoder {
    constructor(cipher) {
      this._cipher = cipher;
      this._rebuildMaps();  
    }

    get cipher() {
        return this._cipher;
    }

    set cipher(newcipher) {
      // DO THIS PART -- don't forget to rebuild the maps
      this._cipher = newcipher; 
      this._rebuildMaps(); 
    }

    _rebuildMaps() { // rebuilds encodeMap and decodeMap
      this.encodeMap = {};
      this.decodeMap = {};
      let charArr = this._cipher.split(''); 
      charArr.forEach((item, index) => {
        this.encodeMap[String.fromCharCode(index + 97)] = charArr[index];
        this.decodeMap[charArr[index]] = String.fromCharCode(index + 97);
      }); 

    }

    encode(str) {
      let encodedArr = str.toString().split('').map((ch) => {
        return (ch === ' ') ? ' ' : this.encodeMap[ch]; 
      })
      return encodedArr.join('')
    }

    decode(str) {
      let decodedArr = str.split('').map((ch) => {
        return (ch === ' ') ? ' ' : this.decodeMap[ch]; 
      })
      return decodedArr.join('');
    }
}

class decoderRing extends decoder {
    constructor(rotation) {
      let str = '';
      let charArr = [];
      for (let i = 0; i < 26; i++) {
        let x = (i + rotation) % 26; 
        charArr[i] = (String.fromCharCode(x + 97));    
        }
        str = charArr.join('');
      super(str);
    }
}



