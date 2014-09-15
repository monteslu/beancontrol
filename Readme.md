## Beancontrol

Simple example app to control a Beanbot with Bean-IO

* add the plaform you want
`cordova platform add android`

* Make sure to install dependencies:

from the `jssource` folder:
run `npm install`

* then build the bundle.js:

also from the `jssource` folder: 

`browserify -s main ./main.js > ../www/js/bundle.js`


### help
The UI is super ugly and not all mobile friendly. An PRs to help with that would be appreciated.


