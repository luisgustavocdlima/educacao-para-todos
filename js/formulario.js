import { salvarCadastro, carregarCadastro } from "./storage.js";

export function configurarFormulario() {
    const formulario = document.querySelector("form");

    const nome = document.querySelector("#nome");
    const cpf = document.querySelector("#cpf");
    const email = document.querySelector("#email");
    const telefone = document.querySelector("#telefone");
    const nascimento = document.querySelector("#nascimento");
    const cep = document.querySelector("#cep");
    const endereco = document.querySelector("#endereco");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    const dadosSalvos = carregarCadastro();

    if (dadosSalvos) {
        nome.value = dadosSalvos.nome;
        cpf.value = dadosSalvos.cpf;
        email.value = dadosSalvos.email;
        telefone.value = dadosSalvos.telefone;
        nascimento.value = dadosSalvos.nascimento;
        cep.value = dadosSalvos.cep;
        endereco.value = dadosSalvos.endereco;
        cidade.value = dadosSalvos.cidade;
        estado.value = dadosSalvos.estado;

        const contribuicaoSalva = dadosSalvos.contribuicao;

        if (contribuicaoSalva) {
            const radioContribuicao = document.querySelector(
                `input[name="contribuicao"][value="${contribuicaoSalva}"]`
            );

            if (radioContribuicao) {
                radioContribuicao.checked = true;
            }
        }
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            document.querySelector(".mensagem-erro")?.remove();

            formulario
                .querySelectorAll("[aria-invalid='true']")
                .forEach(function(campo) {
                    campo.removeAttribute("aria-invalid");
                    campo.removeAttribute("aria-describedby");
                    campo.style.border = "";
                });

            const campoInvalido = formulario.querySelector(":invalid");

            campoInvalido.style.border =
                "2px solid var(--vermelho-erro)";

            campoInvalido.setAttribute("aria-invalid", "true");
            campoInvalido.setAttribute(
                "aria-describedby",
                "erro-formulario"
            );

            campoInvalido.insertAdjacentHTML(
                "afterend",
                '<p id="erro-formulario" class="mensagem-erro" role="alert">Verifique este campo antes de enviar.</p>'
            );

            return;
        }

        // Remove estados de erro anteriores após uma submissão válida.
        document.querySelector(".mensagem-erro")?.remove();

        formulario
            .querySelectorAll("[aria-invalid='true']")
            .forEach(function(campo) {
                campo.removeAttribute("aria-invalid");
                campo.removeAttribute("aria-describedby");
                campo.style.border = "";
            });

        const contribuicao = document.querySelector(
            'input[name="contribuicao"]:checked'
        );

        const dadosCadastro = {
            nome: nome.value,
            cpf: cpf.value,
            email: email.value,
            telefone: telefone.value,
            nascimento: nascimento.value,
            cep: cep.value,
            endereco: endereco.value,
            cidade: cidade.value,
            estado: estado.value,
            contribuicao: contribuicao.value
        };

        salvarCadastro(dadosCadastro);
    });
}