"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var https_1 = require("https");
var buildHookUrl = 'https://api.netlify.com/build_hooks/682f56498875354818453fb3';
(0, child_process_1.exec)('npm run build', function (error, stdout, stderr) {
    if (error) {
        console.error('Build failed:', stderr);
        return;
    }
    console.log('Build succeeded:\n', stdout);
    var req = https_1.default.request(buildHookUrl, { method: 'POST' }, function (res) {
        console.log('Netlify build hook response:', res.statusCode);
    });
    req.on('error', function (e) {
        console.error('Netlify build hook error:', error);
    });
    req.end();
});
