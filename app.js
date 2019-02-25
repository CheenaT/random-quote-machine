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
