const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];

let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

}); 

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const campoTelefone = inputTelefone.value;

    const indexNome = nomes.findIndex(checkNomes);
    const indexTelefone = telefones.findIndex(checkTelefones);

    // Verificar se o campo contém apenas números
    if (!/^[\d]+$/.test(campoTelefone) || campoTelefone.length < 10 ) {
        alert('Favor digitar um telefone válido, apenas com numeros e o DDD, tente novamente');
        return;
    }

    function checkNomes(element){
        return element === inputNome.value;
    }
    function checkTelefones(element){
        return element === inputTelefone.value;
    }

    if(indexNome!== -1 && indexNome.length === inputNome.lenght){
        alert(`Esse nome já foi adicionado a lista com o número: ${telefones[indexNome]}, altere o nome e tente novamente`);
    }else if(indexTelefone!== -1 && indexTelefone.lenght === inputTelefone.lenght){
        alert(`Esse telefone já foi adicionado a lista com o nome: ${nomes[indexTelefone]}, altere o numero de telefone e tente novamente`);
    }else{
        nomes.push(inputNome.value);
        telefones.push((inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}




