function entra(){
    let login = document.getElementById('login1').value;
    let senha = parseInt(document.getElementById('senha').value);
    let val1 = 0;
    let val2 = 0;
    if(login === "Marcelo" || login === "Willian" || login === "Fernando" || login === "Saskia" || login === "Nathália" || login === "Thiago"){
        val1 = 1;
    }else{
        alert("Login inexistente!");
    }
    if(senha === 1234){
        val2 = 1;
    }else{
        alert('Senha Incorreta!');
    }
    if(val1 === 1 && val2 === 1){
        window.open('pag1.html');
    }
}