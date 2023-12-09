function run(){
    const html=document.getElementById("html-code").value
    const css=document.getElementById("css-code").value
    const js=document.getElementById("js-code").value

    const output=document.getElementById("output-frame")
    output.contentDocument.body.innerHTML=html+"<style>"+css+"</style>"
    output.contentWindow.eval(js)

}



