'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const uuid = require('uuid/v4');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* ========================================================
 Routes
======================================================== */
app.get('/things', getThings);
app.post('/things', makeThing);
app.delete('/things/:id', deleteThing);

/* ========================================================
 Helper Functions / Storage
======================================================== */
let things = {
  'test-id-0': { name: 'test1', thing: 'thing' },
  'test-id-1': { name: 'test2', thing: 'other thing' },
};

function getThings(request, response){
  response.json(things);
}

function makeThing(request, response){
  things[uuid()] = request.body;
  response.json(things);
}

function deleteThing(request, response){
  delete things[request.params.id];
  response.json(things);
}


module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Up on server: ${port}`);
    });
  },
};