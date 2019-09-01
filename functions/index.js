const functions = require('firebase-functions');
var bodyParser = require('body-parser');
var session = require('express-session');
const cors = require('cors')({origin: true});

const admin = require('firebase-admin');
admin.initializeApp();

// set up express app
var app = express();
app.use(session({
   secret: 'lvdsession',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: false }
 }))

app.set('view engine','ejs');

//middleware
app.use('/assets',express.static('public'));
var urlencodedParser = bodyParser.urlencoded({extended:false});
 app.use(bodyParser.json());
 app.use(cors);



 exports.app = functions.https.onRequest(app);


