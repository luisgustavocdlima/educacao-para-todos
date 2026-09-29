export function salvarCadastro(dadosCadastro) {
    const dadosJSON = JSON.stringify(dadosCadastro);

    localStorage.setItem("cadastro", dadosJSON);
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}