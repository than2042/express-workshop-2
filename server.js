const express = require("express");
const app = express();
const exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', (req, res) => {
  res.render('index', { 
    title: "Than Than Profile",
    subtitle: "Test"
  });
});

app.get('/my-cv',(req, res) => {
  res.render("my-cv", {
    title: "Than Than CV"
  });
});

app.get('/admin', (req, res) => {
  res.render("admin", {
    title: "Than Than Admin Page"
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: "Than Than Contact Page"
  });
});


// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html



app.use(express.static("public", {'extensions': ['html']}));

// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});