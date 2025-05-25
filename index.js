const express = require("express");
const fs = require("fs");
const app = express();
const PORT=8080;

app.use(express.static(__dirname + '/public'));

app.get("/", (_, res) => {
    console.log("page0");
    const indexHTML = fs.readFileSync(__dirname + "/page0.html", "utf-8");
    res.send(indexHTML);
})
app.get("/1", (_, res) => {
    console.log("page1");
    const indexHTML = fs.readFileSync(__dirname + "/page1.html", "utf-8");
    res.send(indexHTML);
})

app.post("/tasks/mam", (req, res) => {
    console.log("pageMam");
})



app.get("/2", (_, res) => {
    console.log("page2");
    const indexHTML = fs.readFileSync(__dirname + "/page2.html", "utf-8");
    res.send(indexHTML);
})

app.engine('html', require('ejs').renderFile);

app.get('/Ejs', function(req, res) {
  var name = 'hello';
  res.render(__dirname + "/pageEjs.html", {name:name});
});

app.get('/task', function(req, res) {
  res.render(__dirname + "/pageTask.html");
});


app.post('/tasks/add', (req, res) => {
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("task/add");
		let user = {
		name: 'Johncccc',
		surname:'xxxx'
    };
    res.json(user);
  });

app.post('/user', (req, res) => {
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log("user");

		let user = {
		name: 'Uuuucccc',
		surname:'xxxxuuu'
    };
    res.json(user);
  });



// import our dependencies
const sqlite = require('sqlite3');

// open a connect to the database file using sqlite
const db = new sqlite
	.Database(
		// this argument specifies the database file location
		'server/database',
		// using this mode causes the program to throw an error if the file isn't found
		sqlite.OPEN_READWRITE
	)
	// enable foreign keys since they're disabled by default in sqlite
	.exec('PRAGMA foreign_keys = ON');












app.listen(PORT, () => {
    console.log("le serveur est lancé")
}
)