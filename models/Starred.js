'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var starredSchema = Schema( {
  userId: ObjectId,
  objectID: Number,
} );

module.exports = mongoose.model( 'Starred', starredSchema );
