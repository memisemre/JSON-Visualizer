const convertButton = document.querySelector('.btn');
convertButton.addEventListener('click',function(){
    const outputTextArea = document.querySelector('.output-area')
    const inputTextArea = document.querySelector('#inputTextArea').value;
    const data = JSON.parse(inputTextArea);
    for(const [key,value] of Object.entries(data)){
        if(typeof value === typeof {}){
            outputTextArea.innerHTML += `${key} </br>`
            for(const [subKey,subValue] of Object.entries(value)){
                if(typeof subValue === typeof{}){
                    for(const [subsubKey,subsubValue] of Object.entries(subValue)){
                        outputTextArea.innerHTML += `${subsubKey} : ${subsubValue} </br>`
                    }
                }
            }
        }
        else{
            outputTextArea.innerHTML += `${key} : ${value} </br>`
        }
    }
})