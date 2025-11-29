export default function validarNome(campo) {
    const nome = campo.value.trim();
    
    if (nome.length < 2) {
        campo.setCustomValidity("Nome deve ter pelo menos 2 letras");
        return;
    }
    
    campo.setCustomValidity("");
}