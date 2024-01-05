function clickk(val){
    document.getElementById("display").value+=val;
}
function clearr(){
    document.getElementById("display").value=""
}
function equalclick(){
    var text= document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}