###Getting Started
* Download the zip or use the command line to get a local copy 
```sh
$ git clone https://github.com/BenchLord/Spark.git
```
* Fetch app dependencies
```sh
$ npm install
$ bower install
```
* Run gulp to start the server
```sh
$ gulp
```
* In your browser navigate to <a href="http://localhost:1337" target="_blank">http://localhost:1337</a>

* Make it yours
Change 'myApp' in 'javascripts/app.js' to your app name

change 'myApp" in 'views/base.html' to your app name

###Authentication
Adding authentication to your app is extremely simple with Spark. It's as
simple as adding an html tag.

* Google

```html
<sp-google></sp-google>
```

If the text attribute doesn't exist it will defualt to 'Google'

Don't worry! You can easily costumize the buttons using normal css. They are both buttons with a class of 'googleButton'. If you need to costumize both the login button and the 
logout button seperately, just use the id 'googleLogin' for the login button and 'googleLogout' for the logout button.

* Facebook

```html
<sp-facebook text="Login with Facebook"></sp-facebook>
```

If the text attribute doesn't exist it will defualt to 'Facebook'
