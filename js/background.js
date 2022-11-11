const images = ["a.jpg", "b.jpg", "c.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
//createElement("img") js에서 html 요소를 생성 
//html 내에 img태그를 생성한다. 
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// 함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
//prepend() 함수 안의 경로에 정의한 값을 가장 앞에 기입
