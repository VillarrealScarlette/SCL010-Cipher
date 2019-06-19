window.cipher = {
    encode: (number, textToCode) => {
                let encodeMessage = "";
                 for (let i = 0; i < textToCode.length; i++) {
                     console.log(textToCode[i]);
                     let codeAscii = textToCode.charCodeAt(i);
            console.log(codeAscii);
            let newCodeAscii = 
            //Espacio
            codeAscii === 32 ? codeAscii
            //Gatito
            : codeAscii ===  35 ? codeAscii
            //Caracter /
            : codeAscii === 47 ? codeAscii
            //Caracter : 
            : codeAscii === 58 ? codeAscii
            //Letra ñ
            : codeAscii === 164 ? codeAscii
            //Letro Ñ
            : codeAscii === 165 ? codeAscii
            //Mayúsculas
            : codeAscii >= 65 && codeAscii <= 90
            ? ((codeAscii-65+number)%26)+65
            //Minúsculas
            : codeAscii >= 97 && codeAscii <= 122
            ? ((codeAscii-97+number)%26)+97
            //Números
            : codeAscii >= 48 && codeAscii <= 57
            ? ((codeAscii-48+number)%10) + 48
            //Para todo lo demás
            : codeAscii;  
            console.log(newCodeAscii);
            let newChar = String.fromCharCode(newCodeAscii);
            console.log(newChar);
            encodeMessage += newChar;
            console.log(encodeMessage);
            }
        
        return encodeMessage;
    },
    decode: (number, textToCode) => {
        let decodeMessage = "";
        for (let i = 0; i < textToCode.length; i++) {
            console.log(textToCode[i]);
            let codeAscii = textToCode.charCodeAt(i);
            console.log(codeAscii);
            let newCodeAscii = 
            //Espacio
            codeAscii === 32 ? codeAscii
            //Gatito
            : codeAscii ===  35 ? codeAscii
            //Caracter /
            : codeAscii === 47 ? codeAscii
            //Caracter :
            : codeAscii === 58 ? codeAscii
            //Letra ñ
            : codeAscii === 164 ? codeAscii
            //Letro Ñ
            : codeAscii === 165 ? codeAscii
            //Mayúsculas
            : codeAscii >= 65 && codeAscii <= 90
            ? ((codeAscii-90-number)%26) + 90
            //Minúsculas
            : codeAscii >= 97 && codeAscii <= 122
            ? ((codeAscii-122-number)%26) + 122
            //Números
            : codeAscii >= 48 && codeAscii <= 57
            ? ((codeAscii-57-number)%10) + 57
            //Para todo lo demás
            : codeAscii;
            console.log(newCodeAscii);
            let newChar = String.fromCharCode(newCodeAscii);
            console.log(newChar);
            decodeMessage += newChar
            console.log(decodeMessage);
        }
        return decodeMessage;
    }
}