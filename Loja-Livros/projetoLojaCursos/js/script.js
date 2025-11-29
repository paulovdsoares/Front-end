import validarNome from "./valida-nome.js";
import { validarCpf } from "./valida-cpf.js";
import { validarSenha } from "./valida-senha.js";
import { validarIdade } from "./valida-idade.js";
import { validarEmail } from "./valida-email.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
    'rangeUnderflow',
    'rangeOverflow',
    'customError'
]

const mensagens = {
    txtNome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "O nome deve ter pelo menos 2 caracteres.",
        tooLong: "O nome deve ter no máximo 40 caracteres."
    },
    txtCpf: {
        valueMissing: "O campo de CPF não pode estar vazio.",
        patternMismatch: "Por favor, preencha um CPF válido.",
        tooShort: "O CPF deve ter 11 dígitos.",
        customError: "CPF inválido."
    },
    txtEmail: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    Nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        rangeUnderflow: 'Você deve ter pelo menos 16 anos para se cadastrar.',
        customError: 'Data de nascimento inválida.'
    },
    txtsenha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        tooShort: "A senha deve ter pelo menos 6 caracteres.",
        tooLong: "A senha deve ter no máximo 8 caracteres.",
        patternMismatch: "A senha deve conter letras maiúsculas, minúsculas e números."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    
    
    if (campo.name == "txtNome" && campo.value.length >= 2) {
        validarNome(campo);
    }
    
    if (campo.name == "txtCpf" && campo.value != "") {
        validarCpf(campo);
    }
    
    if (campo.name == "Nascimento" && campo.value != "") {
        validarIdade(campo);
    }
    
    if (campo.name == "txtsenha" && campo.value.length >= 6) {
        validarSenha(campo);
    }

  
    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            if (mensagens[campo.name] && mensagens[campo.name][erro]) {
                mensagem = mensagens[campo.name][erro];
            } else {
                switch(erro) {
                    case 'valueMissing':
                        mensagem = "Este campo é obrigatório.";
                        break;
                    case 'typeMismatch':
                        mensagem = "Por favor, preencha um valor válido.";
                        break;
                    default:
                        mensagem = "Por favor, preencha este campo corretamente.";
                }
            }
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.error');
    const validadorDeInput = campo.checkValidity();
    
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}


function validarRadiosCheckboxes() {
    
    const novidadesSelecionada = document.querySelector('input[name="radNovi"]:checked');
    const erroNovi = document.getElementById('errNovi');
    
    if (!novidadesSelecionada) {
        erroNovi.textContent = "Selecione uma opção para receber novidades.";
        erroNovi.style.display = "block";
    } else {
        erroNovi.textContent = "";
        erroNovi.style.display = "none";
    }

   
    const netSelecionada = document.querySelector('input[name="radNet"]:checked');
    const erroNet = document.getElementById('errNet');
    
    if (!netSelecionada) {
        erroNet.textContent = "Selecione uma opção para acesso à internet.";
        erroNet.style.display = "block";
    } else {
        erroNet.textContent = "";
        erroNet.style.display = "none";
    }

    
    const cursosSelecionados = document.querySelectorAll('input[name="chkCursos"]:checked');
    const erroCursos = document.getElementById('errCursos');
    
    if (cursosSelecionados.length === 0) {
        erroCursos.textContent = "Selecione pelo menos um curso.";
        erroCursos.style.display = "block";
    } else {
        erroCursos.textContent = "";
        erroCursos.style.display = "none";
    }
}


document.querySelectorAll('input[name="radNovi"], input[name="radNet"], input[name="chkCursos"]').forEach(input => {
    input.addEventListener('change', validarRadiosCheckboxes);
});


document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    camposDoFormulario.forEach(campo => verificaCampo(campo));
    
    
    validarRadiosCheckboxes();
    
   
    const todosCamposValidos = Array.from(camposDoFormulario).every(campo => campo.checkValidity());
    
    const errosVisiveis = Array.from(document.querySelectorAll('.error'))
        .filter(erro => erro.textContent !== "" && erro.style.display !== "none");
    
    if (todosCamposValidos && errosVisiveis.length === 0) {
        alert('Formulário enviado com sucesso!');
      
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});