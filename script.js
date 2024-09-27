document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenha os valores do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Crie uma nova linha na tabela
    const tabela = document.getElementById('contatosTabela').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpe os campos do formulário
    document.getElementById('contatoForm').reset();
});
