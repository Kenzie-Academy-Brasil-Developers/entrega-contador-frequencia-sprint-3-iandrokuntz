const letterCounts = {};
const palavrasCount = {};

const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById('textInput').value
    typedText = typedText.toLowerCase(); 
    // Isto muda todas as letras para minúsculas
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
    }
    
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
        
       
     }

     




        words = typedText.split(/\s/);

        for (let i = 0; i < words.length; i++) {
            const palavras = words[i]
    
            if (palavrasCount[palavras] === undefined) {
                palavrasCount[palavras] = 1; 
             } else { 
                palavrasCount[palavras]++; 
             }
        }
        
        for(let palavroes in palavrasCount){
            const span = document.createElement("span");
            const textContent = `"${palavroes}": ${palavrasCount[palavroes]}, `;
            span.innerText = textContent;
            const letters = document.getElementById("wordsDiv");
            letters.appendChild(span);
            
           
         }

});

