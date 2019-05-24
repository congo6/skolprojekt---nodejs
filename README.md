# Skolprojekt - nodejs

Strunta i installationen och se länk istället:
https://glacial-reef-57128.herokuapp.com/

INNEHÅLL

* index.js - servern
* routes/ - hanterar länkarna
* routes/api - REST api
* views/index.handlebars - html & javascript
* models/ - databas struktur
* scrapemovies/scrapemovies.py - python webscraper, hämtar 50 filmer från top 100 https://www.imdb.com/search/title?genres=drama&groups=top_250&sort=user_rating,desc



INSTALLATION
------------
 * Installera mongodb och nodejs
 
 * Klona projektet och skriv följande i mappen där appen befinner sig i (detta installerar nödvändiga moduler): 

        npm install

* Kopiera JSON texten i scrapemovies/output.txt och importera i t.ex. ROBO 3T

 * Starta appen genom:
 
        node index.js

