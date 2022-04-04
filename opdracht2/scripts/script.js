var sortables = document.querySelectorAll("section ul, header ul");

var allHeaderButtons = document.querySelectorAll('header ul li');
var allSectionButtons = document.querySelectorAll('section ul li');
var allSections = document.querySelectorAll('section ul');

const listA = document.querySelector('section:first-of-type ul');
const listB = document.querySelector('section:nth-of-type(2) ul');
const listC = document.querySelector('section:nth-of-type(3) ul');
const listD = document.querySelector('section:nth-of-type(4) ul');
const listE = document.querySelector('section:nth-of-type(5) ul');
const listF = document.querySelector('section:last-of-type ul');

var SectionLists = document.getElementById('sectionlists');


sortables.forEach(aSortable => {

    new Sortable(aSortable, {
        group: 'shared', // set both lists to same group
        animation: 200
    });
});


function randomPokemon() {


    var randomImages = document.querySelectorAll("header img");
    var duplicatePokemon = document.querySelectorAll("section ul img");

    randomImages.forEach(function (aPokemon) {
        var randomNumber = Math.floor(Math.random() * 250) + 1;

        duplicatePokemon.forEach(function (dPokemon) {

            if (aPokemon.src == "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + [randomNumber] + ".png") {
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
                var aPokemon = event.target.closest('header li');
                var aSectionPokemon = event.target.closest('section li');
                var CurrentSelection = event.target.closest('section')

                if (aButton == aPokemon) {
                    listF.appendChild(aPokemon);
                    event.target.closest('section button').focus();
                }
                if (aButton == aSectionPokemon) {
                    allSections.forEach(aSection => {
                        CurrentSelection.nextElementSibling.querySelector('ul').appendChild(aSectionPokemon);
                        event.target.closest('button').focus();
                    });
                }
                // Do something for "down arrow" key press.
                break;

            case "ArrowUp":
                console.log(event.key);
                var aPokemon = event.target.closest('header li');
                var aSectionPokemon = event.target.closest('section li');
                var CurrentSelection = event.target.closest('section')

                if (aButton == aPokemon) {
                    listF.appendChild(aPokemon);
                }
                if (aButton == aSectionPokemon) {
                    allSections.forEach(aSection => {
                        CurrentSelection.previousElementSibling.querySelector('ul').appendChild(aSectionPokemon);
                        event.target.closest('button').focus();
                    });
                }
                // Do something for "up arrow" key press.
                break;

            case "ArrowLeft":
                console.log(event.key);
                var aSectionPokemon = event.target.closest('li');
                (aSectionPokemon.previousElementSibling)
                aSectionPokemon.parentNode.insertBefore(aSectionPokemon, aSectionPokemon.previousElementSibling);
                event.target.closest('button').focus();
                // Do something for "left arrow" key press.
                break;

            case "ArrowRight":
                console.log(event.key);
                var aSectionPokemon = event.target.closest('li');
                (aSectionPokemon.nextElementSibling)
                aSectionPokemon.parentNode.insertBefore(aSectionPokemon.nextElementSibling, aSectionPokemon);
                event.target.closest('button').focus();
                // Do something for "right arrow" key press.
                break;


        }
    });

});

document.getElementById("focus").focus();
