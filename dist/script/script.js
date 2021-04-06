document.addEventListener("click", handlerClick);
const starList = document.querySelectorAll("i");
const allStar = 5;

function handlerClick(evento) {
  const itemClicked = evento.target.id;
  const itemNumber = itemClicked.replace(/\D/g, "");

  if (itemClicked === "") {
    starsTocheck(allStar);
  } else {
    classAdder(itemNumber);
  }
}

function starsTocheck(items) {
  for (let index = 0; index < items; index++) {
    let starItem = starList[index].classList.contains("print");
    if (starItem) {
      starList[index].classList.remove("print");
    }
  }
}

function classAdder(item) {
  const starItem = starList[item - 1];

  if (starItem.classList.contains("print")) {
    starsTocheck(item);
  } else {
    const nStar = 4;
    for (let index = item - 1; index <= nStar; index++) {
      starList[index].classList.add("print");
    }
  }
}
