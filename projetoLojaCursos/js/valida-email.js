export function validarEmail(campo) {
    const email = campo.value.trim();
    
    
    if (!email || !email.includes('@')) {
        campo.setCustomValidity("E-mail inválido");
        return;
    }
    
    campo.setCustomValidity("");
}