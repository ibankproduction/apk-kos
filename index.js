const express=require("express");
const bodyParser=require('body-parser');
const session = require('express-session');
const connection = require('./database/config');
const app = express();
const path = require('path');
const ejs = require('ejs');
const registerController=require('./controllers/register-controller');
const loginController= require ('./controllers/login-controller');
const router = express.Router();
const { error } = require("console");

 
// Middleware untuk meng-handle data JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// Setting folder untuk file statis (contoh: CSS)
app.use(express.static(path.join(__dirname,'public')));


// Middleware untuk session
app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true
}));

// Setting template engine EJS
app.set('view engine', 'ejs');


// Middleware untuk memeriksa apakah pengguna sudah login
const checkAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

app.get('/', function (req, res) {  
  res.sendFile( __dirname + "/" + "index.html" );  
})  

app.get('/login', function (req, res) {  
  res.sendFile( __dirname + "/login.html" );  
}) 

app.get('/login', loginController.login);


app.get('/register', function (req, res) {  
  res.sendFile( __dirname + "/" + "register.html" );  
}) 

// router.get('/login', loginController.login);
// app.get('/login', loginController)


app.post('/register', function (req, res)  {
 console.log("regis")
 registerController.register(req,res)
});


app.post('/controllers/register-controller', registerController.register);
app.get('/controllers/login-controller', loginController.login);

// Menampilkan halaman login
app.get('/login', (req, res) => {
  res.render('login');
});

  // Menangani proses register
 
// Menangani proses login
app.post('/login', (req, res) => {
  const { username, password } = req.body;



  // Contoh: Validasi login
  if (username === 'user' && password === 'password') {
    req.session.user = username;
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

// Menampilkan halaman home (memeriksa apakah pengguna sudah login)
app.get('/home', checkAuth, (req, res) => {
  res.render('home', { user: req.session.user });
});

// Menampilkan halaman dashboard (memeriksa apakah pengguna sudah login)
app.get('/', checkAuth, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});


// menmpilkan data dari database
function loadHTMLTable(data) {
  console.info(data)
  const table = document.querySelector('table');

  if (data.length === 0) {
      table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
      return;
  }

  let tableHtml = "";

  data.forEach(function ({id, name, email, created_at}) {
      tableHtml += "<tr>";
      tableHtml += `<td>${id}</td>`;
      tableHtml += `<td>${name}</td>`;
      tableHtml += `<td>${email}</td>`;
      tableHtml += `<td>${new Date(created_at).toLocaleString()}</td>`;
      tableHtml += "</tr>";
  });

  table.innerHTML = tableHtml;
}



app.listen(5000);
