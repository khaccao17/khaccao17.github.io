const http = require('http')
const fs = require('fs')
const port = process.env.PORT||3000
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err)
                console.error(err)
            else
                res.end(data)
        })
    }
        else if (req.url === '/demo') {
            fs.readFile('demo.html', (err, data) => {
                if (err)
                    console.error(err)
                else
                    res.end(data)
            })
        }
        else if (req.url === '/login2') {
            fs.readFile('login2.html', (err, data) => {
                if (err)
                    console.error(err)
                else
                    res.end(data)
            })
        }
        else {
            res.write('<h1>404-Not Found</h1>')
            res.end()
        }
    })

server.listen(port , () => {
console.log("http://localhost:" + port)
})