import logo from '../../assets/logo.jpeg';
import codigoLimpo from '../../assets/codigoLimpo.jpeg';
import solid from '../../assets/solid.jpeg';
import padroesDeProjeto from '../../assets/padroesDeProjeto.jpeg';

const colecao = {
    topo: {
        titulo: 'Detalhes da coleção de livros'
    },
    detalhes: {
        nome: 'Coleção de livros',
        fornecedor: 'Livraria Santos Dumont',
        descricao: 'Livros importandos da França, todos escritos por autores renomados.',
        preco: 'R$ 350,00',
        logo: logo,
        botao: ''
    },
    livros: {
        titulo: 'Livros da coleção',
        lista: [
            {
                nome:'Código Limpo',
                imagem: codigoLimpo
            },
            {
                nome:'Solid',
                imagem: solid
            },
            {
                nome:'Padrões de Projeto',
                imagem: padroesDeProjeto
            },
            {
                nome:'Código Limpo',
                imagem: codigoLimpo
            },
            {
                nome:'Solid',
                imagem: solid
            },
            {
                nome:'Padrões de Projeto',
                imagem: padroesDeProjeto
            },

        ]
    }
};

export default colecao;
