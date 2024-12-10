async function permittedCharacters() {
    let permitted = [ ];
    if(process.env.UPPERCASE_LETTER==="true")
        permitted.push(..."QWERTYUIOPÇLKJHGFDSAZXCVBNM");
    
    if(process.env.LOWCASE_LETTERS === "true")
        permitted.push(..."qwertyuiopasdfghjklçzxcvbnm");
    
    if(process.env.NUMBERS === "true")
        permitted.push(..."1234567890");
    
    if(process.env.SPECIAL_CHARACTER === "true")
        permitted.push(..."!@#$%¨&*()_+=");

    return permitted;
}
export default permittedCharacters;
