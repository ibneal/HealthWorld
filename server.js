if (process.env.NODE_ENV !== "production")
{
    require('dotenv').config()
}

//Stripe secret key
const stripeSecretKey=process.env.STRIPE_SECRET_KEY
const stripePublicKey=process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey)

var express=require('express')
var router=express.Router()
var app=express()

app.set('view engine','ejs')
app.use(express.static('public'))


//Create views
app.listen(3000)


// app.js already makes these routes start at /donate!

// Donation form.
router.get('/', function(req, res) {
  res.render('donate.html');
});

// Thanks page.
router.post('/thanks', function(req, res) {
  res.render('thanks', { title: 'Thanks!' });
});