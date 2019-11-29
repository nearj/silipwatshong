# coding: utf-8
from __future__ import division, unicode_literals 
import re
import codecs
import requests
from bs4 import BeautifulSoup, NavigableString

# crawling
res = requests.get('https://uos.ac.kr/korNotice/view.do?list_id=FA1&seq=21627&sort=0&pageIndex=1&searchCnd=&searchWrd=&cate_id=&viewAuth=Y&writeAuth=Y&board_list_num=10&lpageCount=10&epTicket=ST-151740-VkKzi2TXUszNm4ZwfzEqkUHGTK5ChIRxiHe-22')
_soup_to_crawl = BeautifulSoup(res.content, 'html.parser')
text_ = _soup_to_crawl.find('ul', class_='listType view')
text__ = text_.text
arr_text = text__.split("\n")
arr_text = [x for x in arr_text if x]
title = arr_text[0]
writer = arr_text[1]
depart = arr_text[2]
date = arr_text[3]
content = _soup_to_crawl.select('p', class_="0")
context_result = []
for j in range(len(content)):
    tmp = content[j].text.strip()
    context_result.append(tmp)

# formatting
_soup_to_format = BeautifulSoup(codecs.open("test.html", 'r', 'utf-8').read(), 'html.parser')
head = _soup_to_format.find('head')
main = _soup_to_format.find('main')

main.p.insert(0, NavigableString(text__));
print(re.sub('\n', ' ', str(_soup_to_format)))