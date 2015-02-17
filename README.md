# react-express-socketio-boilerplate
Boiler plate for client side reactjs with express, socketio


-----------
Browse to folder
```
npm install
node server.js
```
To start express server
```
npm start
```

To compile react code
```
watchify -t reactify client/app.js -o public/javascripts/app.js
```
Now browse to `http://localhost:3000` url in the browser