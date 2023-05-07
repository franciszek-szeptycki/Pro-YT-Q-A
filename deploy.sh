arg=$1

git add .
git commit -m"deploy"
git push $arg 
