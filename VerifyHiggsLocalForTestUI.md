Steps to create tar package in Higgs
1. npm run preversion
2. npm run postversion
3. npm pack dist/

Steps to integration local Higgs package to TestUI
1. npm install ../atom-web-higgs/abot-atom-web-higgs-4.0.21.tgz
2. this should update package.json higgs version to this local file instead of npm pubished package
