export function validarSenha(campo) {
    const senha = campo.value;
    
    if (!senha) {
        campo.setCustomValidity("Senha é obrigatória");
        return;
    }
    
    if (senha.length < 6) {
        campo.setCustomValidity("Senha deve ter pelo menos 6 caracteres");
        return;
    }
    
    campo.setCustomValidity("");
}