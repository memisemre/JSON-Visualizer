const button = document.querySelector('.btn')
button.addEventListener('click', function(){
    let dataArea = document.querySelector('.data-area').value;
    console.log(typeof dataArea)
    let parseJSON = JSON.parse(dataArea);
    // let evalDataArea = eval(parseJSON);
    // console.log(evalDataArea);
    // console.log(typeof parseJSON)
    // console.log(typeof parseJSON)
    // let mapJSON = parseJSON.map(map)
    // console.log(mapJSON)
    if (typeof parseJSON == 'object'){
        for(let key in parseJSON){
        // let mapJSON = parseJSON.map(key)
        // console.log(mapJSON)
        if(parseJSON.hasOwnProperty(key)){
            let parseJSONKey = parseJSON[key];
            console.log(typeof parseJSONKey)
            if (typeof parseJSONKey == 'object'){
                for(let key in parseJSONKey){
                    if(parseJSONKey.hasOwnProperty(key)){
                        console.log(parseJSONKey[key])
                        document.querySelector('.second-json-area').innerHTML += `${key} : ${parseJSONKey[key]} <br>`
                    }
                }
            document.querySelector('.json-area').innerHTML += `${key} : ${parseJSON[key]} <br>`
            }
        }
    }}
    else {
        console.log("hata")
    }
})