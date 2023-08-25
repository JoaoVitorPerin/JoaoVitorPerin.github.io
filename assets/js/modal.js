$(document).ready(function (){
    $('#portaCertificacao').modal('show')
})

function abrirModalPorta(id){
    console.log(id);
    $(`#${id}`).modal('show')
}