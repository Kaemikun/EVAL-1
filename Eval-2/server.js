if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}



//libraries
const express = require ("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initialize = require("./passport-config.js")
const flash = require("express-flash")
const session = require("express-session")

initialize(
    passport,
    email=>users.find(user =>user.email===email),
    id =>users.find(user => user.id === id)
)

app.use(express.static('public'));

const users = [];

app.use(express.urlencoded({extended: true}));

app.use(flash())

app.use(session({
    secret: process.env.SESSION_SECRET,  
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

//post method login
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true  
// }));

app.get('/login', (req, res) => {
    res.render('login.ejs', { messages: req.flash() });
});


app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        // if (err) {
        //     return next(err);
        // }
        if (!user) {
            req.flash("error", "Authentication failed.");
            return res.redirect("/login");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            
            return res.redirect("/");
        });
    })(req, res, next);
});



//post method register
app.post("/register", async (req,res)=>{
    try {
        const hashed = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashed
        })
        console.log(users);
        res.redirect("/login");
    } catch(error) {
        console.log(error)
        res.redirect("/register");
    }
})

app.get("/", (req, res) => {
    // Add a check to confirm if the user is authenticated
    if (req.isAuthenticated()) {
        res.render("index.ejs", { user: req.user });
    } else {
        res.redirect("/login");
    }
});




//routes
app.get('/',(req, res)=>{
    res.render("index.ejs");
})

app.get('/login',(req, res)=>{
    res.render("login.ejs");
})

app.get('/register',(req, res)=>{
    res.render("register.ejs");
})

app.get('/contact',(req, res)=>{
    res.render("contact.ejs");
})

app.get('/aboutus',(req, res)=>{
    res.render("about_us.ejs");
})

app.get('/yourname',(req, res)=>{
    res.render("yourname.ejs");
})

app.get('/community',(req, res)=>{
    res.render("community.ejs");
})

app.get('/yourname1',(req, res)=>{
    res.render("yourname_ep.ejs", {name: req.user.name});
})

app.get('/codegeass',(req, res)=>{
    res.render("code.ejs");
})

app.get('/codegeass1',(req, res)=>{
    res.render("codegeass_ep", {name: req.user.name});
})

app.get('/slime-isekai',(req, res)=>{
    res.render("slime.ejs");
})

app.get('/slime-isekai1',(req, res)=>{
    res.render("slime_ep.ejs", {name: req.user.name});
})

app.get('/attack-on-titan',(req, res)=>{
    res.render("aot.ejs");
})

app.get('/attack-on-titan1',(req, res)=>{
    res.render("aot_ep.ejs", {name: req.user.name});
})

app.get('/account', (req, res) => {
    if (req.user && req.user.name) {
        // Pass a single object with both `name` and `email` to the view
        res.render('account.ejs', { 
            name: req.user.name,
            email: req.user.email 
        });
    } else {
        res.redirect('/login'); // Redirect if the user is not authenticated
    }
});


//end of routes


app.listen(3000)