zola build
rsync -arP --delete public/ root@bugswriter.com:/usr/local/www/site/
git add .
git commit -m "auto updating site"
git push bwgit master
