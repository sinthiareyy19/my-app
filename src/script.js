
const searchButton = document.querySelector('.seacrh-button');
searchButton.addEventListener('click', function(Home){

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('https://developers.giphy.com/docs/api/endpoint#search' + inputKeyword.value) //menjalankan promise
    .then(response => response.json())

})
