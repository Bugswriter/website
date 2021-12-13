zola build
rsync -arP --delete public/ root@bugswriter.com:/var/www/site/
git add .
git commit -m "auto updating site"
git push origin master
