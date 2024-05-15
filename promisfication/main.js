function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);

}

loadScript('./my/script.js', () => {
    a()
})



function promisify(f) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, res) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            }
            args.push(callback)
            f.call(this, ...args)
        })
    }
}


let loadScriptPromise = promisify(loadScript)
loadScriptPromise('./my/script.js').then(() => {
    a()
})