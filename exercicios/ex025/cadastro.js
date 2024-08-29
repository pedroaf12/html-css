const formularioDeDados = document.getElementById('formulario');
function obterDadosDaTela(){
    const usuario = document.getElementById('iusuario').value;
    const senha = document.getElementById('isenha').value
    
    return {
        usuario,
        senha
        
    }
}
formularioDeDados.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(obterDadosDaTela());
})