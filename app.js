const API =  "https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?";
const shareTwitter = "https://twitter.com/intent/tweet?text=";
const colorsArr = ["#14cc8d", "#1481cc", "#cc3114", "#bb14cc", "#14ccbb", "#5f14cc", "#cc8d14"];
const article = document.getElementById('article');
const newArticleButton = document.getElementById("new");
const shareButton = document.getElementById('share');

// Получаем рандомный цвет для фона
function getRandomColor() {
  return colorsArr[Math.round(Math.random()*(6 - 0) + 0)];
}

// напишем функцию getData

function getData() {
  // fetch(API).then( (response) => {
  //   // console.log(response);
  //   return response;
  axios.get(API)
  .then( result => {
    // console.log(result.text());
    return result.data; 
  }).then(value => {
    return JSON.parse(value.slice(2, -1));
  }).then(json => {
    document.body.style.background = getRandomColor();
    console.log(json);
    article.innerHTML = `
    <p id="text">${json.quoteText}</p>
    ${json.quoteAuthor ? `
    <p id="author">${json.quoteAuthor}<p>` : ""}`; // автро есть не всегда с помощью интерполяции
    // return json;
    // share actions
    shareButton.setAttribute('href', shareTwitter + json.quoteText);
  }).catch( err => {
    throw err
  })
}

getData();

newArticleButton.addEventListener('click', () => {
  getData();
})

// shareButton.addEventListener('click', (e) => {
//   e.preventDefault();

// })
