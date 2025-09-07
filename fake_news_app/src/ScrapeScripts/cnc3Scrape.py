from bs4 import BeautifulSoup
import requests
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://google.com/",
    "Accept-Language": "en-US,en;q=0.9"
}
url = "https://www.ttt.live/ministry-of-the-people-distributes-over-69000-in-seed-grants-to-san-fernando-entrepreneurs/"
page_to_scrape= requests.get(url)
print(page_to_scrape.status_code)   # e.g. 200
print(page_to_scrape.reason) 
soup=BeautifulSoup(page_to_scrape.text,"html.parser")
titles= soup.find_all("title")
authors=soup.find_all("div", attrs={"class":"entry-content"})
paragraphs=soup.find_all("div")
headings=soup.find_all("h1",attrs={"class":"entry-title"})
for paragraph in paragraphs:
    print (paragraph.text)
