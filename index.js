const button = document.querySelector('.btn')
button.addEventListener('click', function(){
    const dataArea = document.querySelector('.data-area').value;
    let parseJSON = JSON.parse(dataArea);
    for(let key in parseJSON){
        if(parseJSON.hasOwnProperty(key)){
            document.querySelector('.json-area').innerHTML += `${key} : ${parseJSON[key]} <br>`
        }
    }
})