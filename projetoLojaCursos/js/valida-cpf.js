export function validarCpf(campo) {
    const cpf = campo.value.replace(/\D/g, '');
    
  
    campo.addEventListener('input', function() {
        this.value = formatarCpf(this.value);
    });
    

    if (!cpf) {
        campo.setCustomValidity("CPF é obrigatório");
        return;
    }
    
    if (cpf.length !== 11) {
        campo.setCustomValidity("CPF deve ter 11 dígitos");
        return;
    }
    
   
    if (/^(\d)\1{10}$/.test(cpf)) {
        campo.setCustomValidity("CPF inválido");
        return;
    }
    
   
    campo.setCustomValidity("");
}

function formatarCpf(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
   
    if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})/, '$1.');
    }
    if (cpf.length > 7) {
        cpf = cpf.replace(/(\d{3})\.(\d{3})/, '$1.$2.');
    }
    if (cpf.length > 11) {
        cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})/, '$1.$2.$3-');
    }
    
    return cpf;
}