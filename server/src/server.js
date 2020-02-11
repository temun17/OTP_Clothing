const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const database = {
	users: [
		{
		  id: 1,
		  name: "Allen",
		  email: "ajtemunovic@gmail.com",
		  password: "eatitbitch"
		},
		{
		  id: 2,
		  name: "Tasha",
		  email: "tasha@gmail.com",
		  password: "123"
		}
	]
}

app.get("", (req, res) => {
  res.json("Hello Express!");
});


app.post("/signin", (req, res) => {
  if (req.body.email === database.users[0].email &&
  	req.body.password === database.users[0].password) {
	res.json('Success!');
  } else {
   res.json('Error!');
  }
});


const port = 3001;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}!`);
});
