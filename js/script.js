import { configurarFormulario } from "./formulario.js";

import imagemOng from "../imagens/ong.webp";

const app = document.querySelector("#app");

function renderizarInicio() {
    app.innerHTML = `
        <section>
            <h1>Educação para Todos</h1>

            <p>
                Olá! A nossa ONG tem como objetivo fornecer serviços de educação
                através de cursos gratuitos, visando ajudar diferentes tipos de
                públicos com diferentes necessidades.
            </p>

            <img
                src="${imagemOng}"
                alt="Projetos de educação acessível para pessoas com deficiências visuais, auditivas e motoras e pessoas com dificuldades de aprendizado"
            >
        </section>
    `;
}

function renderizarProjetos() {
    app.innerHTML = `
        <section>
            <h1>Projetos Sociais</h1>

            <p>
                Desenvolvemos projetos educacionais gratuitos para pessoas
                com diferentes necessidades, buscando ampliar o acesso
                à educação e ao conhecimento.
            </p>
        </section>

        <section>
            <h2>Campanhas de Doação</h2>

            <p>
                As campanhas de doação ajudam a manter nossos projetos
                e possibilitam que mais pessoas tenham acesso aos
                serviços oferecidos pela ONG.
            </p>
        </section>

        <section>
            <h2>Voluntariado</h2>

            <p>
                Pessoas voluntárias podem contribuir com seus conhecimentos,
                habilidades e tempo para ajudar no desenvolvimento
                das atividades da organização.
            </p>
        </section>
    `;
}

function renderizarCadastro() {
    app.innerHTML = `
        <section>
            <h1 id="titulo-cadastro">Cadastro</h1>

            <form aria-labelledby="titulo-cadastro">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        required
                    >

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >

                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        required
                    >

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required
                    >

                    <label for="nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="nascimento"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                    >

                    <label for="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        required
                    >

                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        required
                    >

                    <label for="estado">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        required
                    >
                </fieldset>

                <fieldset>
                    <legend>Como deseja contribuir?</legend>

                    <div class="opcoes-contribuicao">
                        <label>
                            <input
                                type="radio"
                                name="contribuicao"
                                value="doacao"
                                required
                            >
                            Doação
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="contribuicao"
                                value="voluntariado"
                            >
                            Trabalho voluntário
                        </label>
                    </div>
                </fieldset>

                <button type="submit">Enviar</button>
            </form>
        </section>
    `;

    configurarFormulario();
}

renderizarInicio();

const links = document.querySelectorAll(".menu-links a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const rota = link.getAttribute("href");

        if (rota === "#inicio") {
            renderizarInicio();
        }

        if (rota === "#projetos") {
            renderizarProjetos();
        }

        if (rota === "#cadastro") {
            renderizarCadastro();
        }
    });
});

const botaoTema = document.querySelector("#alternar-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});