class Livro {
    constructor(titulo, autor, ano, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }

    exibirInformacoes() {
        return `${this.titulo} - ${this.autor} (${this.ano}) - ${this.genero}`;
    }
}

class Biblioteca {
    constructor() {
        this.livros = this.carregarLivros(); // Carrega livros do localStorage
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.salvarLivros(); // Salva no localStorage
        this.exibirLivros();
    }

    removerLivro(index) {
        this.livros.splice(index, 1);
        this.salvarLivros(); // Salva no localStorage
        this.exibirLivros();
    }

    salvarLivros() {
        localStorage.setItem('livros', JSON.stringify(this.livros));
    }

    carregarLivros() {
        const livros = localStorage.getItem('livros');
        return livros ? JSON.parse(livros) : [];
    }

    exibirLivros() {
        const listaLivrosDiv = document.getElementById('listaLivros');
        listaLivrosDiv.innerHTML = ''; // Limpa a lista antes de exibir

        if (this.livros.length === 0) {
            listaLivrosDiv.innerHTML = '<p>Biblioteca Vazia...</p>';
        } else {
            this.livros.forEach((livro, index) => {
                const livroDiv = document.createElement('div');
                livroDiv.className = 'livro';
                livroDiv.innerHTML = `
                    <strong>Título:</strong> ${livro.titulo} <br>
                    <strong>Autor:</strong> ${livro.autor} <br>
                    <strong>Ano:</strong> ${livro.ano} <br>
                    <strong>Gênero:</strong> ${livro.genero} <br>
                    <button class="remover" onclick="biblioteca.removerLivro(${index})">Remover</button>
                    <hr>
                `;
                listaLivrosDiv.appendChild(livroDiv);
            });
        }
    }
}

// Inicializa a biblioteca
const biblioteca = new Biblioteca();
biblioteca.exibirLivros();

// Adiciona evento ao formulário
document.getElementById('formLivro').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('ano').value;
    const genero = document.getElementById('genero').value;

    const novoLivro = new Livro(titulo, autor, ano, genero);
    biblioteca.adicionarLivro(novoLivro);

    // Limpa os campos do formulário
    this.reset();
});
