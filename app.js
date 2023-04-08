const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoute = require('./routes/contact')
const successRoute = require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoute);
app.use(successRoute)

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3200, () => {
  console.log("Server is listeming on port 3200");
});
