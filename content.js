var elements = document.getElementsByTagName('*');

var stylesheet = document.styleSheets[0];
console.log(stylesheet.cssRules[0]);
stylesheet.cssRules[0].style.color="blue";

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
        	//node.style.color = 'green';
            var text = node.nodeValue;
            var replacedText = text.replace(/millennials/gi, 'snake people');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}