const button = document.querySelector('.btn')
button.addEventListener('click', function(){
    const dataArea = document.querySelector('.data-area').value;
    let parseJSON = JSON.parse(dataArea);
    console.log(parseJSON)
    parseJSON.forEach(dataPiece => {
        document.querySelector('.json-area').innerHTML += `${dataPiece.name} <br>`
    });
})