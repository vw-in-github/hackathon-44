var images = document.getElementsByTagName("img");
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = "https://codesmith.io/81ff5ac1c752947addbb16c2c7c84381.jpg";
}
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
