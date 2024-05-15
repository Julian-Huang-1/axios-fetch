function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`script load error for ${src}`))
        document.head.append(script);
    })

}

loadScript('./my/script.js').then(() => {
    a()
})
