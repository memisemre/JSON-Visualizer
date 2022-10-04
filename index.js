const convertButton = document.querySelector('.btn');
convertButton.addEventListener('click',function(){
    const outputTextArea = document.querySelector('.output-area')
    const inputTextArea = document.querySelector('#inputTextArea').value;
    const data = JSON.parse(inputTextArea);
     for(const [key,value] of Object.entries(data)){
         if(typeof value === typeof {}){
             outputTextArea.innerHTML += `${key} area2 </br>`
             for(const [subKey,subValue] of Object.entries(value)){
                 if(typeof subValue === typeof{}){
                    for(const [subsubKey,subsubValue] of Object.entries(subValue)){
                         outputTextArea.innerHTML += `${subsubKey} area3 ${subsubValue} </br>`
                     }
                }
             }
         }
         else{
             outputTextArea.innerHTML += `${key} area1 ${value} </br>`
             }
        }
    // Object.entries(data).reduce((prev,key,value)=>{
    //     console.log(`${key},${value}`)
    //     console.log(typeof value)
    //     if (typeof value == typeof []){
    //         value.reduce((prev,subKey,subValue)=>{
    //             console.log("osman")
    //             console.log(`${subKey},${subValue}`)
    //         })
    //     }
    // })
    // for(const [key,value] of Object.entries(data)){
    //     let newMap = new Map()
    //     newMap['key'] = `${key}`
    //     newMap['value'] = `${value}`
    //     outputTextArea.innerHTML += `${key}: ${value} </br>`
    //     // console.log(key,value)
    //     // console.log(typeof value)
    //     if (typeof value == typeof {}){
    //         let valueArray = [];
    //         valueArray.push(value);
    //         for(const [key,value] of Object.entries(valueArray)){
    //             let subNewMap = new Map();
    //             subNewMap['key'] = `${key}`;
    //             subNewMap['value'] = `${value}`;
    //             console.log(key,value)
    //             console.log(typeof key, typeof value)
    //             outputTextArea.innerHTML += `${key} : ${value} </br>`
    //         }
            
    //     }
    // }
    }
)
