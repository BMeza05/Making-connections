function removeUser(Todd){
var element = document.getElementById("Todd")
element.parentNode.removeChild(element)
}
function changename(){
    var username = document.getElementById("name")
    console.log(username.innertext)
    username.innerHTML = 'Candyman'
}