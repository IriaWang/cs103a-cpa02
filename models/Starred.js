'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var starredSchema = Schema( {
  userId: ObjectId,
  pieceId: ObjectId,
} );

module.exports = mongoose.model( 'Starred', starredSchema );
