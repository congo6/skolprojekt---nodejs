from bs4 import BeautifulSoup
import requests
import os
import json
import time


def fetchMovies(url):
    res = requests.get(url, headers = {"Accept-Language": "en-US,en;q=0.5"})
    time.sleep(5)
    res.encoding = 'UTF-8'
    soup = BeautifulSoup(res.text, 'lxml') 
    div = soup.find_all('div', {'class':'lister-item mode-advanced'})
    return div

def writeToFile(div):
    d = {}
    with open("output.txt", "w") as file:
        for movie in div:
            d['title'] = movie.find('h3', {'class':'lister-item-header'}).find('a').text
            d['description'] = movie.select_one('p:nth-of-type(2)').text.strip()
            d['genre'] = movie.find('span', {'class':'genre'}).text.strip()
            d['director'] = movie.select_one('p:nth-of-type(3)').find('a').text
            
            #Hämtar och formaterar skådespelarna
            #stars = ''
            stars = []
            for i in movie.select_one('p:nth-of-type(3)').find_all('a')[1:]:
                stars.append(i.text)
            
            #stars = stars[:-2]
            d['stars'] = stars
   

            #hämtar affischer genom en annan REST api
            imdbId = movie.find('div', {'class':'ribbonize'}).get('data-tconst')
            d['Year'], d['poster'] = getPoster(imdbId)
            print(d['title'])
            print(json.dumps(d), file=file)
            
    print('klar')

# Hämtar affischer från en annnan REST api då det förenklar hela processen
def getPoster(imdbId):
    param = {
        "i": imdbId,
        "apikey": "4c566d63"
    }
    
    res = requests.get('http://www.omdbapi.com/', param)
    data = res.json()
    return data['Year'], data['Poster']
    



        
div = fetchMovies('https://www.imdb.com/search/title?genres=drama&groups=top_250&sort=user_rating,desc')
writeToFile(div)

