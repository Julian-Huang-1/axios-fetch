const http = require('http')
const url = require('url')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    const method = req.method
    const { query } = url.parse(req.url)
    const _qs = qs.parse(query)
    console.log(_qs);
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.setHeader('Access-Control-Allow-Origin', '*')
    let data;
    switch (method) {
        case 'GET':
            console.log("get");
            res.end("get请求")
            break
        case 'POST':
            console.log("post");
            data = ''
            req.on('data', temp => {
                data += temp
            })
            req.on('end', () => {
                console.log(data);
            })

            res.end("post请求")
            break
    }
})

server.listen(3000, () => {
    console.log("server is running");
})