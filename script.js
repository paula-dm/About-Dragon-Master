
<<<<<<< HEAD
=======

>>>>>>> 1779fcd0e1d3c0657409413bf3c6e09def445903
const heroSection = document.getElementById("banner");
const heroTitle = document.querySelector(".hero__title");

let imageCounter = 1;
const changeHeroImage = function () {
    imageCounter < 3 ? imageCounter++ : imageCounter = 1;
    heroSection.classList = `banner banner--image${imageCounter}`;
};

const changeHeroImageToPrevious = function () {
    imageCounter === 1 ? imageCounter = 3 : imageCounter--;
    heroSection.classList = `banner banner--image${imageCounter}`;
};

let autoImageChanging;

const startAutoImageChanging = function () {
    clearInterval(autoImageChanging);
<<<<<<< HEAD
    autoImageChanging = setInterval(changeHeroImage, 3000);
=======



    autoImageChanging = setInterval(changeHeroImage, 2000);

>>>>>>> 1779fcd0e1d3c0657409413bf3c6e09def445903
};

const stopAutoImageChanging = function () {
    clearInterval(autoImageChanging);

};

heroSection.addEventListener('mouseenter', stopAutoImageChanging);
heroSection.addEventListener('mouseleave', startAutoImageChanging);


<<<<<<< HEAD
startAutoImageChanging();
=======

startAutoImageChanging();
>>>>>>> 1779fcd0e1d3c0657409413bf3c6e09def445903
