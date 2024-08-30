document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = document.getElementById('iusuario').value;
    const key = document.getElementById('isenha').value;

    // output.textContent = `Usuário ${user} e Senha ${key}`
    console.log(user,key);
});