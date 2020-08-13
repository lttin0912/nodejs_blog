const newsRouter = require('./news');
const coursesRouter = require('./course');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use(function (req, res, next) {
        if (req.query._method == 'DELETE') {
            req.method = 'DELETE';
            req.url = req.path;
        }
        next();
    });
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
