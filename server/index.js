const express = require('express');
const routes = require('./routes');

const { sequelize } = require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('PORT', process.env.PORT || 4000);

sequelize.sync();


app.use('/', routes);

app.listen(app.get('PORT'), () => {
  console.log(`${app.get('PORT')}번 포트에서 대기중~!!`)
});