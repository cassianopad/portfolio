// Seleciona o formulário
const formulario = document.getElementById("formContato");

// Aguarda o envio
formulario.addEventListener("submit", function(event){

    // Impede o envio padrão
    event.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se algum campo está vazio
    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos.");

        return;

    }

    // Validação simples do e-mail
    if(!email.includes("@") || !email.includes(".")){

        alert("Digite um e-mail válido.");

        return;

    }

    // Simulação de envio
    document.getElementById("mensagemStatus").textContent =
"Mensagem enviada com sucesso!";

    // Limpa o formulário
    formulario.reset();

});

// ==========================
// Tema Claro / Escuro
// ==========================

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        botaoTema.textContent = "Alternar Tema";

    }else{

        botaoTema.textContent = "Alternar Tema";

    }

});