//Ej Cruz
/*
setLanguage function big picture wise recognizes abbreviations to
country names. setLanguage takes on a parameter called 'code'
A conditional statement is created to take care of three cases
Case1: if the first two letters are 'ru' , then it sets the variable language
to 'Russian.'
Case2" if the first two letters are 'es, then it sets the variable language
to 'Spanish'
Case3: if the first two letters are not 'ru' or 'es', then it sets the variable
language to 'English'
*/
let language
let languageCode

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'en') {
        language = 'English'
    } else if (code === 'sl') {
        language = 'Slovenian'
    } else {
        language = 'Tagalog'
    }
    document.getElementById('language').innerHTML = language
}
