# Procesverslag
**Auteur:** Alex Lanting

**De opdrachten:** [opdracht 1](opdracht1/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Bronnenlijst
  1. https://fonts.google.com/specimen/Nobile (font dat lijkt op kodak font)
  2. https://sortablejs.github.io/Sortable/ (sortable library voor de drag & drop)
  3. https://pokeapi.co/ (pokemon sprites die extern ingeladen worden)



## Opdracht 1 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 2)</summary>


  ### Je storyboard:
  <img src="readme-images/storyboard.jpg" width="375px" alt="storyboard voor opdracht 1">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Ik wil graag meer weten over animatie, zodat ik als designer weet wat er allemaal mogelijk is. 
  - CSS tricks leren zodat ik die kan toepassen op mijn eigen website. 
  - Pseudo-elements gebruiken, nog nooit gebruikt. 
  - ...
 
</details>



## Opdracht 1 reflectie

<details open>
  <summary>uitwerken bij afronden opdracht (voor week 3)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/clipart.png" width="375px" alt="kodak logo">


  ### Dit ging goed/Heb ik geleerd: 
  Het logo op de webpagina zetten door middel van clip art zonder een svg te gebruiken. Ik heb nog nooit met clip art gewerkt dus dit was erg leerzaam. Verder heb ik de clip art op pseudo-elements gezet. Het was ook erg leerzaam om de pseudo-elementen te gebruiken voor het logo. Verder heb ik mijn css animatie techniek weer up to date gemaakt.  

  <img src="readme-images/clipart-code.png" width="375px" alt="clipart code">


  ### Dit was lastig/Is niet gelukt:
  Ik wou graag de achtergrond van de pagina grainy maken wanneer je over het kodak logo gaat met je muis. Eerst had ik deze grain op de body::after gezet, alleen omdat het logo element in het body element zit kon ik deze niet aanspreken op hover. Daarom heb ik de grain op het div element gezet zodat het een sibling element is en deze kon ik dus nu wel op hover aanspreken. Verder was het lastig om het gewenste effect, het nabootsen van 8mm film die afspeelt te visualiseren op een witte achtergrond met een rood logo. Daarom heb ik ervoor gekozen om op de achtergrond op dark en light mode donker te houden. Het effect werkt wel beter wanneer het logo wit is in plaats van rood omdat het contrast dan hoger is en je meer dat flitsende effect kunt zien. 

  <img src="readme-images/div-code.png" width="375px" alt="div in code">
</details>



## Opdracht 2 plan

<details open>
  <summary>uitwerken na schetsen idee (voor week 4)</summary>


  ### Je ontwerp:
  <img src="readme-images/tier-list-mobile.jpg" width="375px" alt="tier list ontwerp mobile"><br>
  <img src="readme-images/tier-list-desktop.jpg" width="375px" alt="tier list ontwerp desktop">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - Ik wil graag een lijst kunnen maken met html & css.
  - Ik wil graag expirimenteren met drag en drop. 
  - Elementen verschuiven met toetsenbord of andere controls.
  - Em gebruiken, normaal gebruik ik altijd pixels en procenten.
  - CSS code voorzien van duidelijk commentaar.
</details>



## Opdracht 2 test

<details open>
  <summary>uitwerken na testen (week 6/7)</summary>

  Neem minimaal 5 bevindingen op:



  ### Bevinding 1:
  Wanneer je de pokemon een focus gaf lukte het niet om ze met de arrow keys te verschuiven van links naar rechts. 
  
  <img src="readme-images/focus-move.jpg" width="375px" alt="pokemon focus">
  

  #### oplossing:
  Ik heb met javascript door middel van nextElementSibling en PreviousElementSibling het probleem opgelost. 
  
  <img src="readme-images/focus-move-code.jpg" width="375px" alt="pokemon focus code">


  ### Bevinding 2:
  Ik wou graag dat je met de arrow keys de pokemons van tier lists kon verschuiven.
  
  <img src="readme-images/focus-tiers.jpg" width="375px" alt="pokemon focus">  

  #### oplossing:
  Ik heb met behulp van een nextElementSibling, querySelector en een appendChild de pokemon van tier kunnen laten wisselen met de arrow keys wanneer ze focus hebben. 

  <img src="readme-images/focus-tiers-code.jpg" width="375px" alt="pokemon focus code"> 

  ### Bevinding 3:
  Wanneer je de pokemon hebt verschoven tijdens de focus met de arrow keys verliest de pokemon de focus. 
  
  <img src="readme-images/focus-geen.jpg" width="375px" alt="pokemon focus">
  
  #### oplossing:
  Ik heb aan het einde van de javascript code de pokemon een focus gegeven nadat die verschoven is. 
  
  <img src="readme-images/focus-lost-code.jpg" width="375px" alt="pokemon focus code">
  
  ### Bevinding 4:
  Wanneer je de pokemon in de list naar rechts verplaats stopt hij op het einde maar aan de linker kant aan het einde komt de pokemon weer helemaal rechts terecht, het zou beter zijn als dit niet kon gebeuren.  
  
  <img src="readme-images/focus-list.jpg" width="375px" alt="pokemon focus">
  
  #### oplossing:
  Er voor zorgen dat de "li" niet van de eerste naar de laatste plek kan gaan, deze code schrijven is mij niet gelukt. 
  
  
  ### Bevinding 5:
  Ik had een random pokemon button toegevoegd omdat het ook leuk is om een tier list te maken van random pokemons. Alleen wanneer je deze random knop inklikte had je soms dat je een paar dezelfde pokemons in je list kreeg. 
  
  <img src="readme-images/duplicates.jpg" width="375px" alt="pokemon duplicates">
  
  #### oplossing:
  Een extra stuk code toevoegen die checkt welk nummer math random heeft en wanneer die hetzelfde is doet de functie nogmaals een math random om zo te voorkomen dat er duplicates zijn. 
  
  <img src="readme-images/duplicate-code.jpg" width="375px" alt="pokemon duplicate code">
  
</details>



## Opdracht 2 reflectie

<details open>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/product.jpg" width="375px" alt="uitkomst opdracht 2"><br>
  <img src="readme-images/product-light.jpg" width="375px" alt="uitkomst opdracht 2">
  


  ### Dit ging goed/Heb ik geleerd: 
  <img src="readme-images/goed-code.jpg" width="375px" alt="top"><br>
  <img src="readme-images/goed-code-01.jpg" width="375px" alt="top"><br>
  <img src="readme-images/goed-code-02.jpg" width="375px" alt="top">
  
  Ik heb mijn code een stuk netter gemaakt dan ik normaal zou doen, dit maakt het een stuk overzichtelijker. Verder heb ik veel geleerd van de Javascript functies schrijven. Vooral nextElementSibling en appendChild zijn functies die ik nu beter begrijp en van pas kunnen komen. Ook heb ik veel met "EM" gewerkt, normaal werk ik altijd met "PX". 


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>
