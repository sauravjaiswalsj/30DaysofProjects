const fs = require('fs');
const sqlite = require('sqlite3');
const util = require('util');
const path = require('path');

const dbPath = path.join(__dirname,"my.db");
const db_Schema = path.join(__dirname,"myDbSchema.sql");