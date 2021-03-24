document.addEventListener("click", handlerClick);
const starList = document.querySelectorAll("i");
const star1 = 4;
const star2 = 3;
const star3 = 2;
const star4 = 1;
const star5 = 0;
const allStar = 5;

function handlerClick(evento) {
  const itemClicked = evento.target.id;

  if (itemClicked === "") {
    starsTocheck(allStar);
  }

  if (itemClicked === "star1") {
    if (starList[star1].classList.contains("print")) {
      starList[star1].classList.remove("print");
    } else {
      starsToPaint(star1);
      starList[star1].classList.add("print");
    }

    starsTocheck(4);
  }

  if (itemClicked === "star2") {
    if (starList[star2].classList.contains("print")) {
      starList[star2].classList.remove("print");
    } else {
      starsToPaint(star1, star2);
    }

    starsTocheck(3);
  }

  if (itemClicked === "star3") {
    if (starList[star3].classList.contains("print")) {
      starList[star3].classList.remove("print");
    } else {
      starsToPaint(star1, star2, star3);
    }

    starsTocheck(2);
  }

  if (itemClicked === "star4") {
    if (starList[star4].classList.contains("print")) {
      starList[star4].classList.remove("print");
    } else {
      starsToPaint(star1, star2, star3, star4);
    }

    starsTocheck(1);
  }

  if (itemClicked === "star5") {
    if (starList[star5].classList.contains("print")) {
      starList[star5].classList.remove("print");
    } else {
      starsToPaint(star1, star2, star3, star4, star5);
    }
  }
}

function starsToPaint(...starNumber) {
  for (const starPosition of starNumber) {
    starList[starPosition].classList.add("print");
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
