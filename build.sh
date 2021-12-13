rm -r ./public
zola build
rsync -arP --delete public/ root@bugswriter.com:/var/www/site/
rm -r ./public
git add .
git commit -m "auto updating site"
git push origin master
