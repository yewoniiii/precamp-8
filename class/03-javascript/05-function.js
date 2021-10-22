const aaa=()=> {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("qqq").innerText = token
    console.log(document.getElementById("qqq").innerText)
}
