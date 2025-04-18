// Dados dos destinos
const destinos = [
  {
    id: 1,
    nome: "Nova York",
    descricao: "A cidade que nunca dorme! Conhecida por seus arranha-céus, parques e cultura vibrante.",
    imagem: "https://picsum.photos/id/1000/300/200",
    tipo: "cidade"
  },
  {
    id: 2,
    nome: "Rio de Janeiro",
    descricao: "Famosa por suas praias, o Cristo Redentor e o Pão de Açúcar.",
    imagem: "https://picsum.photos/id/1019/300/200",
    tipo: "praia"
  },
  {
    id: 3,
    nome: "Veneza",
    descricao: "Conhecida por seus canais românticos e arquitetura histórica.",
    imagem: "https://picsum.photos/id/1020/300/200",
    tipo: "cidade"
  }
];

// Verifica se estamos na página de detalhes
const isDetalhesPage = window.location.pathname.includes('detalhes.html');

if (isDetalhesPage) {
  // Código para a página de detalhes.html
  // Pegar através do id
  document.addEventListener('DOMContentLoaded', function() {
      const urlParams = new URLSearchParams(window.location.search);
      const destinoId = parseInt(urlParams.get('id'));
      const destino = destinos.find(d => d.id === destinoId);

      if (destino) {
          document.getElementById('destino-imagem').src = destino.imagem;
          document.getElementById('destino-imagem').alt = destino.nome;
          document.getElementById('destino-titulo').textContent = destino.nome;
          document.getElementById('destino-descricao').textContent = destino.descricao;
          document.getElementById('destino-tipo').textContent = `Tipo: ${destino.tipo}`;
          
          // Adicionando mais detalhes (podemos expandir depois)
          document.getElementById('destino-detalhes').innerHTML = `
              <p><strong>Descrição completa:</strong> ${destino.descricao}</p>
              <p><strong>Tipo de destino:</strong> ${destino.tipo}</p>
          `;
      } else {
          window.location.href = 'index.html';
      }
  });
} else {
  // Código para a página index.html
  document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('cards-container');
      
      destinos.forEach(destino => {
          const cardHTML = `
              <div class="col-md-4 mb-4">
                  <div class="card h-100">
                      <img src="${destino.imagem}" class="card-img-top" alt="${destino.nome}">
                      <div class="card-body">
                          <h5 class="card-title">${destino.nome}</h5>
                          <p class="card-text">${destino.descricao}</p>
                          <p class="card-text"><small class="text-muted">${destino.tipo}</small></p>
                          <a href="detalhes.html?id=${destino.id}" class="btn ver-detalhes-btn">Ver detalhes</a>
                      </div>
                  </div>
              </div>
          `;
          container.innerHTML += cardHTML;
      });
  });
}