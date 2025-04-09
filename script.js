document.getElementById(`checker`).addEventListener(`click`, ()=>{
    let word = document.getElementById(`getText`).value.toLowerCase().split(` `).join(``);
    for(let i = 0; i < word.length; i++){
        if(word[0 + i] !== word[word.length - 1 - i] ){
            return document.getElementById(`display`).innerText = `False: Not a Palindrome`;
        } 
    }
    return document.getElementById(`display`).innerText = `True: A Palindrome`;
});