const express = require("express");
// note ES5 syntax is required. We cannot use the import syntax currently
const app = express();
//this convetntion to remap express to app


app.use("/books",express.static("books"));
//first parameter is the route or end point written by user in the browser bar after the web address of the server, second parameter is the function it will run which in this case is to statically server HTML from a folder called books
app.use("/anotherroute",express.static("ar"));
app.use("/aboutme",express.static("page3"));

app.listen(5001, () => console.log("server is running on port 5001"));
//first parameter is the port we are listening on and second parameter is the function to run app launch of this listener.