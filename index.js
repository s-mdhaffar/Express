const express = require('express');
const { home } = require('nodemon/lib/utils');
const app = express();

const PORT = 8000;

// app.get('/', (req, res) => {
// 	res.send('Hello World');
// });
var time = new Date();
var day = time.getDay();
var hours = time.getHours();
const timeMiddleware = (req, res, next) => {
	if (day == 0 || day == 6 || (hours > 17 || hours < 9)) {
		res.send('Closed');
	}
	else {
		next();
	}
};
app.use(timeMiddleware);
app.use(express.static('pages'));

app.listen(PORT, () => {
	console.log(`app listening at the port : ${PORT}`);
});
