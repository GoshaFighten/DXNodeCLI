set destination=%1
git clone https://github.com/GoshaFighten/Angular2DXWebpack %destination%
cd /d %destination%
rd .git /S/Q
del .gitignore README.md
call npm install
call code .
npm start