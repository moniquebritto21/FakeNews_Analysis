from bs4 import BeautifulSoup
import requests
page_to_scrape= requests.get("https://www.octoparse.com/blog/top-10-most-scraped-websites")
soup=BeautifulSoup(page_to_scrape.text,"html.parser")
titles= soup.find_all("title")
authors=soup.find_all("a", attrs={"class":"block font-semibold"})
paragraphs=soup.find_all("p")
headings=soup.find_all("h2",attrs={"class":"wp-block-heading"})
for paragraph in paragraphs:
    print (paragraph.text)