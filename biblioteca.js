class livro{
    constructor(titulo, autor, genero, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
    }
}

class biblioteca{
    Adicionarlivro (titulo, autor, genero, ano) {
        const livro = {
            titulo,
            autor,
            genero,
            ano
        };
        this.livros.push(livro);
    }
}
    Exibirlivro (titulo, autor, genero, ano); {
        if (this.livros.length === 0) {
            const Exibirlivro = document.querySelector('.Exibirlivro');
            return;
        }

        console.log ("Livros na biblioteca: ");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) [${livro.genero}]`);
        });
    }

    Removerlivro (titulo, autor); {
            const index = this.livros.findIndex(livro => livro.titulo === titulo && livro.autor === autor);
            if (index === -1) {
                console.log("Livro não encontrado.");
                return;
            }
    
            this.livros.splice(index, 1);
            console.log(`Livro '${titulo}' de '${autor}' removido com sucesso.`);
    }