const categoriesLiElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesLiElements.length}`);

categoriesLiElements.forEach((elem) => {
  const titleLiElem = elem.querySelector("h2").textContent;
  console.log(`Category: ${titleLiElem}`);
  const totalLiElements = elem.querySelectorAll("ul li").length;
  console.log(`Elements: ${totalLiElements}`);
});
