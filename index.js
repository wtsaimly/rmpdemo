const fs = require('fs');
const html = fs.readFileSync('index.html', { encoding:'utf8' });
const driverjs = fs.readFileSync('driver.min.js', { encoding:'utf8' });
const rmphlsjs = fs.readFileSync('rmp-hls.min.js', { encoding:'utf8' });

exports.handler = async (event) => {
    if(event.rawPath === "/driver.min.js"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/plain',
            },
            body: driverjs,
        };
        return response;
    }
    if(event.rawPath === "/rmp-hls.min.js"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/plain',
            },
            body: rmphlsjs,
        };
        return response;
    }
    if(event.rawPath === "/index.html"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: html,
        };
        return response;
    }
    if(event.rawPath === "/"){
        const response = {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/html',
            },
            body: html,
        };
        return response;
    }
};

