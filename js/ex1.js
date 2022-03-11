const bodyNodes = (document.body)

for (const bodyNodes of document.body.childNodes) {
    console.log(bodyNodes);
}

console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[20]);
console.log(document.body.childNodes[5].childNodes[0]);
console.log(document.body.childNodes[5].childNodes[1]);
