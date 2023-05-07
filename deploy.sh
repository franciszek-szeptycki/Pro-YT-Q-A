arg=$1

cd yt-comments/client
npm run build
cd ../..

git add .
git commit -m"deploy"
git push $arg 
