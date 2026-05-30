#!/usr/bin/env node
/**
 * Local Development Server with Clean URL Support
 * 
 * This server automatically handles clean URLs by appending .html
 * when a file is not found, mimicking Netlify/Vercel behavior.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const ROOT_DIR = __dirname;

// MIME types for common files
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

// Cache durations
const CACHE_RULES = {
    '.html': 'no-cache',            // always fresh
    '.css':  'public, max-age=86400',   // 1 day
    '.js':   'public, max-age=86400',
    '.png':  'public, max-age=604800',  // 7 days
    '.jpg':  'public, max-age=604800',
    '.jpeg': 'public, max-age=604800',
    '.webp': 'public, max-age=604800',
    '.svg':  'public, max-age=604800',
    '.woff2':'public, max-age=2592000', // 30 days
    '.ico':  'public, max-age=2592000',
    '.xml':  'public, max-age=3600',
    '.txt':  'public, max-age=3600',
};

function serveFile(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
            return;
        }

        const ext   = require('path').extname(filePath).toLowerCase();
        const mime  = getMimeType(filePath);
        const cache = CACHE_RULES[ext] || 'public, max-age=3600';

        res.writeHead(200, {
            'Content-Type': mime,
            'Cache-Control': cache,
            'X-Content-Type-Options': 'nosniff',
            'Vary': 'Accept-Encoding',
        });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    let urlPath = req.url.split('?')[0]; // Remove query string

    // Default to index.html for root
    if (urlPath === '/') {
        urlPath = '/index.html';
    }

    let filePath = path.join(ROOT_DIR, urlPath);

    // Check if file exists
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            // Try adding .html extension for clean URLs
            const htmlPath = filePath + '.html';

            fs.stat(htmlPath, (htmlErr, htmlStats) => {
                if (htmlErr || !htmlStats.isFile()) {
                    // 404 - File not found
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 Not Found</h1>');
                    console.log(`404: ${urlPath}`);
                    return;
                }

                // Serve the .html file
                console.log(`200: ${urlPath} -> ${path.basename(htmlPath)}`);
                serveFile(res, htmlPath);
            });
            return;
        }

        // Serve the file normally
        console.log(`200: ${urlPath}`);
        serveFile(res, filePath);
    });
});

server.listen(PORT, () => {
    console.log(`\n🚀 Development server running at http://localhost:${PORT}/`);
    console.log(`📁 Serving files from: ${ROOT_DIR}`);
    console.log(`✨ Clean URLs enabled (e.g., /about works)\n`);
    console.log('Press Ctrl+C to stop\n');
});
