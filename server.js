const Express = require('express');
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;

const app = Express();

const hbs = exphbs.create({ });
app.engine("handlebars", hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('main.handlebars');
});

app.listen(PORT);