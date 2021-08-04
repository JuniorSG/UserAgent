var h1ene1 = document.getElementById("brow");


window.onload = ()=>{
    console.log(window.navigator)
    h1ene1.innerHTML=window.navigator.userAgentData.mobile
}