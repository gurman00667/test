import CryptoJs from 'crypto-js';
const secKey = 'Id09tk90w'; //we can store it into environment variable too
const funcs = {

    encrypt(string){
        return CryptoJs.AES.encrypt(string, secKey).toString();
    },

    decrypt(string) {
        var bytes = CryptoJs.AES.decrypt(string, secKey);
        return bytes.toString(CryptoJs.enc.Utf8);
    }
}
export default funcs;