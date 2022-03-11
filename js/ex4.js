const titleElement = document.querySelector("h2");
titleElement.classList.add("name");
console.log(titleElement);

const cbaLink = document.createElement("li");
cbaLink.textContent = "College of Business";
document.getElementsByClassName("name").appendChild(cbaLink);
console.log(cbaLink);