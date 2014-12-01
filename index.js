#!/usr/bin/env node
/*jshint node: true*/
'use strict';
var fs = require('fs');
var path = require('path');
var NodeRSA = require('node-rsa');
var rsaFilePath = path.join(process.env.HOME, '.ssh', 'id_rsa');
var privatePEM = fs.readFileSync(rsaFilePath, 'utf-8');
console.log(privatePEM);
var key = new NodeRSA(privatePEM);
return module.exports = key;
console.log('public key pem:');
console.log(key.exportKey('public'));
console.log('private key pem:');
console.log(key.exportKey('private'));
