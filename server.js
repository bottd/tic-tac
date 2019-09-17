const path = require('path');
const express = require('express');
const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const port = process.env.PORT || 4000;

const database = knex(config);
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/matches', async (req, res) => {
  try {
    const matches = await database('matches').select();
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post('/api/matches', async (req, res) => {
  const match = req.body;
  let missingProps = [];

  ['winner_name', 'loser_name'].forEach(requiredParam => {
    if (!match[requiredParam]) {
      missingProps = [...missingProps, requiredParam];
    }
  });

  if (missingProps.length) {
    res.status(422).json({
      message: `Missing ${missingProps} parameters {recipe_name: <STRING>, steps: <ARRAY>, ingredients: <ARRAY>}`,
    });
  } else {
    try {
      const { winner_name, loser_name } = match;
      const matchId = await database('matches').insert(match, 'id');
      res.status(201).json({ message: `Match inserted, id: ${matchId[0]}` });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
