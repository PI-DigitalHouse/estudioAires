const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyparser = require('body-parser')

const indexRouter = require('./routes/index');
const dashboardUsuarioRouter = require ('./routes/dashboardUsuario')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser())

app.use('/', indexRouter);
app.use('/orcamento', require('./routes/orcamento'));
app.use('/novo', require('./routes/orcamentosemlogin'));
app.use('/dashboardUsuario', dashboardUsuarioRouter);
app.use('/cadastro-membro', require('./routes/cadastroMembro'));
app.use('/cadastro-usuario', require('./routes/cadastro-usuario'));
app.use('/dashboardMembro', require('./routes/dashBoardMembro_meuPerfil'))
app.use('/alterarDados', require('./routes/alterarDados'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
