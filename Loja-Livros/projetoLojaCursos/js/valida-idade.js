export function validarIdade(campo) {
    const data = new Date(campo.value);
    const hoje = new Date();
    
    if (data > hoje) {
        campo.setCustomValidity("Data não pode ser futura");
        return;
    }
    
    const idade = hoje.getFullYear() - data.getFullYear();
    const mes = hoje.getMonth() - data.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
        idade--;
    }
    
    if (idade < 16) {
        campo.setCustomValidity("Deve ter pelo menos 16 anos");
        return;
    }
    
    campo.setCustomValidity("");
}