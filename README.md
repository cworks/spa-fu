## Spa-fu
My musings and scratch work from the lessons in the epic book

Single Page Web Applications
By: MICHAEL S. MIKOWSKI & JOSH C. POWELL
Manning Publishers

## spa ch3

Overall project structure:
```
|____spa
| |____css
| | |____spa.css
| | |____spa.shell.css
| |____js
| | |____jquery
| | |____spa.js
| | |____spa.shell.js
| |____layout.html
| |____spa.html
|____spa.html
```

spa - root directory and our root namespace
css - directory contains all stylesheets
js - directory that contains all our javascript
js/jquery - directory that contains jquery and jquery plugins
spa.js - root javascript namespace 'spa', has corresponding stylesheet in css/spa.css
spa.shell.js - provides the namespace 'spa.shell' and has corresponding stylesheet in css/spa.shell.css
spa.html - file read by the browser to run the single page application


