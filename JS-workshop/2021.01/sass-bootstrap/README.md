Sass és bootstrap összekötése

[MarkDown] (link) dokumentum

1. 'npm -y' az üres folderben
2. bootstrap telepítése 'npm i bootstrap@next'
3. SCSS folder
4. index.scss file a mappában
5. scss-ben használni az importot:
```scss
$primary: #aaa;

 @import "../node_modules/bootstrap/scss/bootstrap";

 .btn{
     border-radius: 0px;
 }
 ```
6. scss fordítása cssre 'sass scss/index.scss css/index.css'
7. 'index.html készítése, css file linkelésével
8. fejlesztés közben a watch használata 'sass --watch sass scss/index.scss css/index.css'







