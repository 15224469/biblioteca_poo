class Livro{
    constructor(Nome, Autor, Genero, Ano){
        this.Nome = Nome;
        this.Autor = Autor;
        this.Genero = Genero;
        this.Ano = Ano;
    }
}

class Biblioteca{
    Adicionarlivro (event) {
        const Nome = document.getElementById('Nome').value;
        const Autor = document.getElementById('Autor').value;
        const Ano = document.getElementById('Ano').value;
        const Genero = document.getElementById('Genero').value;

        const Adicionarlivro = document.querySelector('Adicionarlivro')
        Adicionarlivro.addEventListed('click',() => {
        const sidebarContent = document.querySelector('.sidebarContent');
            let Nome = parseFloat(document.querySelector('#Nome').value.replace(',', '.'));
            let Autor = parseFloat(document.querySelector('#Autor').value.replace(',', '.'));
            let Ano = parseFloat(document.querySelector('#Ano').value.replace(',', '.'));
            let Genero = parseFloat(document.querySelector('#Genero').value.replace(',', '.'));
        });     
    }
}
    Exibirlivro (); {
        const acervoDiv = document.getElementById('acervo');
        acervoDiv.innerHTML = ''; // Limpa a área antes de exibir

        if (this.biblioteca.length === 0) {
            acervoDiv.innerHTML = '<p> Biblioteca Vazia.</p>';
        } else {
            this.biblioteca.forEach(livro => {
                const livroDiv = document.createElement('div');
                livroDiv.className = 'livro';
                livroDiv.innerHTML = `
                    <strong>Nome:</strong> ${livro.Nome} <br>
                    <strong>Autor:</strong> ${livro.Autor} <br>
                    <strong>Ano:</strong> ${livro.Genero} <br>
                    <strong>Gênero:</strong> ${livro.Ano} <br>
                    <hr>
                `;
                acervoDiv.appendChild(livroDiv);
            });
        }
    }

    Removerlivro (Nome, Autor); {
            const index = this.livros.findIndex(livro => livro.Nome === Nome && livro.Autor === Autor);
            if (index === -1) {
    
            this.livro.splice(indice, 1);
            localStorage.setItem('biblioteca', JSON.stringify(this.livro)); // Atualiza o localStorage
            alert(`O livro "${Nome}" foi excluído do acervo.`);
        } else {
            alert(`O livro "${Nome}" não encontrado no acervo.`);
        }
    }

    // Instancia a classe Biblioteca
const livro = new Livro();

// Funções que podem ser chamadas a partir do HTML
function Adicionarlivro(event) {
    livro.Adicionarlivro(event);
}

function Exibirlivro() {
    livro.Exibirlivro();
}
function Removerlivro(event) {
    event.preventDefault(); // Previne o envio do formulário

    const livro = document.getElementById('tituloExcluir').value; // Obtém o título do livro
    livro.Removerlivro(Nome, Autor); // Chama a função para excluir o livro
    document.getElementById('formularioExcluir').reset(); // Limpa o formulário
}