var sortables = document.querySelectorAll("section ul, header ul");

var allHeaderButtons = document.querySelectorAll('header button');
var allSectionButtons = document.querySelectorAll('section button');

const listA = document.querySelector('section:first-of-type ul');
const listB = document.querySelector('section:nth-of-type(2) ul');
const listC = document.querySelector('section:nth-of-type(3) ul');
const listD = document.querySelector('section:nth-of-type(4) ul');
const listE = document.querySelector('section:nth-of-type(5) ul');
const listF = document.querySelector('section:last-of-type ul');

sortables.forEach(aSortable => {

    new Sortable(aSortable, {
        group: 'shared', // set both lists to same group
        animation: 200
    });
});


//function randomPokemon() {
//
//
//    var randomImages = document.querySelectorAll("header img");
//
//    randomImages.forEach(function (aPokemon) {
//        var randomNumber = Math.floor(Math.random() * 492) + 1;
//
//        aPokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + [randomNumber] + ".png"
//    });
//};
//
//document.getElementById("random").addEventListener("click", randomPokemon);


function randomPokemon() {


    var randomImages = document.querySelectorAll("header img");
    var duplicatePokemon = document.querySelectorAll("section ul img");

    randomImages.forEach(function (aPokemon) {
        var randomNumber = Math.floor(Math.random() * 250) + 1;

        duplicatePokemon.forEach(function (dPokemon) {

            if (dPokemon.src == "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + [randomNumber] + ".png") {
                randomNumber = Math.floor(Math.random() * 492) + 1;
            }

        });

        aPokemon.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + [randomNumber] + ".png"
    });
};

document.getElementById("random").addEventListener("click", randomPokemon);


allHeaderButtons.forEach(aButton => {
    console.log(aButton);

    aButton.addEventListener('keydown', event => {

        switch (event.key) {
            case "ArrowDown":
                console.log(event.key);
                // Do something for "down arrow" key press.
                break;

            case "ArrowUp":
                console.log(event.key);
                var aPokemon = event.target.closest('header ul li');
                listF.appendChild(aPokemon);
                // Do something for "up arrow" key press.
                break;

            case "ArrowLeft":
                console.log(event.key);
                // Do something for "left arrow" key press.
                break;

            case "ArrowRight":
                console.log(event.key);
                // Do something for "right arrow" key press.
                break;
        }
    });

});

allSectionButtons.forEach(aButton => {
    console.log(aButton);

    aButton.addEventListener('keydown', event => {

        switch (event.key) {
            case "ArrowDown":
                console.log(event.key);
                var aPokemon = event.target.closest('li');
                listE.appendChild(aPokemon);
                // Do something for "down arrow" key press.
                break;

            case "ArrowUp":
                console.log(event.key);
                // Do something for "up arrow" key press.
                break;

            case "ArrowLeft":
                console.log(event.key);
                // Do something for "left arrow" key press.
                break;

            case "ArrowRight":
                console.log(event.key);
                // Do something for "right arrow" key press.
                break;
        }
    });

});
