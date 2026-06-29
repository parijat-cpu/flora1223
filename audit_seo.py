import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
res = []

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    
    lang = bool(re.search(r'<html[^>]*lang="', c))
    
    title_match = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE)
    title = title_match.group(1).strip() if title_match else 'None'
    
    desc = bool(re.search(r'<meta[^>]*name=["\']description["\']', c, re.IGNORECASE))
    canon = bool(re.search(r'<link[^>]*rel=["\']canonical["\']', c, re.IGNORECASE))
    og = bool(re.search(r'property=["\']og:title["\']', c, re.IGNORECASE))
    
    res.append(f"{f}: Lang={lang}, Desc={desc}, Canon={canon}, OG={og}, Title='{title}'")

print('\n'.join(res))
