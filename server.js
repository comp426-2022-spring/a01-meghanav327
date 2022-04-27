const https = require('https')
const fs = require('fs')
const args = require('minimist')(process.argv.slice())
args['port']
const port = args.port || process.env.port || 3000


fs.readFile('./www/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
        process.exit(1)
    }

    const server = https.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })

    server.listen(port, () => {
        console.log('Server running at port ${port}')
    })
})