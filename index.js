#!/usr/bin/env node
/*jshint node: true*/
'use strict';
var fs = require('fs');
var path = require('path');
var NodeRSA = require('node-rsa');
var rsaFilePath = path.join(process.env.HOME, '.ssh', 'id_rsa');
var privatePEM = fs.readFileSync(rsaFilePath, 'utf-8');
var key = new NodeRSA(privatePEM);
console.log('public key pem:\n');
console.log(key.exportKey('public'));
console.log('\n\nprivate key pem:\n');
console.log(key.exportKey('private'));
