document.getElementById('cepForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede que a página recarregue
  
    const cep = document.getElementById('cep').value;
    const autorizacao = document.getElementById('autorizacao').checked;
  
    if (!autorizacao) {
      alert("Você precisa autorizar a busca.");
      return;
    }
  
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(dados => {
        if (dados.erro) {
          alert("CEP não encontrado!");
          return;
        }
  
        // Preenche os campos com os dados retornados
        document.getElementById('logradouro').value = dados.logradouro;
        document.getElementById('complemento').value = dados.complemento;
        document.getElementById('bairro').value = dados.bairro;
      })
      .catch(erro => {
        console.log("Erro ao buscar o CEP:", erro);
      });
  });
   
