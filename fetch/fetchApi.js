
//fetch GET请求
fetch('http://localhost:3000/123?1&age:2', {
    // mode: 'no-cors'
})
    .then(res => {
        if (res.ok) {
            return res.text()
        }
    })
    .then(data => {
        console.log(data);
    })


//fetch POST请求
fetch('http://localhost:3000/', {
    method: "POST",
    body: JSON.stringify({
        name: "hjx"
    })
})
    .then(res => {
        if (res.ok) {
            return res.text()
        }
    })
    .then(data => {
        console.log(data);
    })



//fetch POST请求 流式读取
let r = []
fetch('http://localhost:3000/', {
    method: "POST",
    body: JSON.stringify({
        name: "hjx"
    })
})
    .then(res => {
        if (res.ok) {
            return res.body
        }
    })
    .then(async body => {
        let r = []
        const reader = body.getReader()
        while (true) {
            const { done, value } = await reader.read()
            if (done) {
                console.log("stream  complete");
                console.log(new TextDecoder().decode(r[0]));
                console.log(r[0]);
                return
            }
            r.push(value)
        }
    })
