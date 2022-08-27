const Express = require('express');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;

const app = Express();

app.engine('handlebars', handlebars.engine({
layoutsDir: __dirname + '/views/layouts',
}));

app.set('view engine', 'handlebars');

app.use(Express.static('public'))

app.get('/', (req, res) => {
    res.render('main', {layout : 'index'});
});

app.listen(PORT);