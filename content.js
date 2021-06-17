let images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].src =
    "https://github.com/garyiacobucci/hackathon-44/blob/master/assets/study.jpg?raw=true";
}

// @font-face {
//   font-family: "maras_eyeregular";
//   src: url("https://github.com/garyiacobucci/hackathon-44/blob/master/assets/maras_eye-webfont.woff2?raw=true")
//       format("woff2"),
//     url("https://github.com/garyiacobucci/hackathon-44/blob/master/assets/maras_eye-webfont.woff?raw=true")
//       format("woff");
// }

// * {
//   font-family: "maras_eyeregular";
//   font-weight: normal;
//   font-style: normal;
// }

// const images = document.getElementsByTagName('img');

// for (let i = 0, i < images.length; i++) {
//     images[i].src = 'https://codesmith.io/81ff5ac1c752947addbb16c2c7c84381.jpg'; //+ images[i].width + '/' + images[i].height;
// }

// var elements = document.getElementsByTagName('*');

// var stylesheet = document.styleSheets[0];
// console.log(stylesheet.cssRules[0]);
// stylesheet.cssRules[0].style.color="blue";

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];

//     for (var j = 0; j < element.childNodes.length; j++) {
//         var node = element.childNodes[j];

//         if (node.nodeType === 3) {
//         	//node.style.color = 'green';
//             var text = node.nodeValue;
//             var replacedText = text.replace(/millennials/gi, 'snake people');

//             if (replacedText !== text) {
//                 element.replaceChild(document.createTextNode(replacedText), node);
//             }
//         }
//     }
// }
