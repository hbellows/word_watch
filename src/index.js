import $ from 'jquery'

const productionUrl = 'https://wordwatch-api.herokuapp.com';
const getWord = '/api/v1/top_word';
const postWord = '/api/v1/words';

$(document).ready(() => {
  getTopWord()
})

const getTopWord = () => {
  let url = `${productionUrl}` + `${getWord}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    displayTopWord(data)
  })
  .catch(error => {
    console.log(error)
  });
};


const displayTopWord = (data) => {
  $("#top-word").html('')
  $('#top-word').append(`
    <h2>${Object.keys(data.word)}: ${Object.values(data.word)}</h2>
  `)
}

const postWords = (wordData) =>{
  let url = `${productionUrl}` + `${postWord}`
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(wordData)
  })
  .then((response) => response.json())
  .then((res) => {
    alert(res.message)
  })
}
