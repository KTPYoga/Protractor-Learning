git log --oneline -3
npm version
npm version patch
git push --tags
 if rejected git fetch --tags
to delete a tag git tag -d v1.0.6

---------------------------------
git checkout -b feature/1.0.6
npm version
npm version patch
git push --tags
git push -u origin feature/1.0.6

go to jenkins to repo and test/build docker images
feature/version branch
build with parameters (push image:true, gittag: version 1.0.6)

itemselection.api steps
after branch creation
change version in Atom.ItemSelection.Api.csproj
and git add Atom.ItemSelection.Api/Atom.ItemSelection.Api.csproj
git commit -m 'v1.0.5'
git tag -a v1.0.5 -m 'support field test and versioned items'
git push --tags
git push -u origin feature/1.05

------------------------------
git commit --amend (to update last commit message)

