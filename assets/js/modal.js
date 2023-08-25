$(document).ready(function (){
    $('#modalApresentacao').modal('show')
})

function abrirModalPorta(id){
    console.log(id);
    $(`#${id}`).modal('show')
}