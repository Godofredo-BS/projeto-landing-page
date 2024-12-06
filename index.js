var setaDireita=window.document.getElementById("setadireita")
var leonardo= window.document.getElementById("leonardo")
var samanta=window.document.getElementById("samanta")
var bruna=window.document.getElementById("bruna")
var setaEsquerda=window.document.getElementById("setaesquerda")

function rolarparadireita(){
    leonardo.style="display:none"
    bruna.style="display:flex"
   setaDireita.style="display:none"
   setaEsquerda.style="display:flex;margin-top:55px"
}
function rolarparaesquerda(){
    leonardo.style="display:flex"
    bruna.style="display:none"
    setaDireita.style="display:flex;margin-top:55px"
setaEsquerda.style="display:none"
}
