document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.getElementById('survey-form');
  
    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
      // Previne o envio padrão do formulário para validação
      event.preventDefault();
  
      // Validação de campos obrigatórios
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const role = document.getElementById('dropdown');
      const recommendRadios = document.getElementsByName('user-recommend');
      const comment = document.getElementById('comments');
  
      if (!name.value || !email.value || !role.value) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // Checa se uma opção foi selecionada nos radios
      let recommendChecked = false;
      recommendRadios.forEach(function(radio) {
        if (radio.checked) {
          recommendChecked = true;
        }
      });
  
      if (!recommendChecked) {
        alert('Por favor, selecione uma opção para a recomendação.');
        return;
      }
  
      // Se todos os campos forem válidos, envia o formulário (apenas um exemplo)
      alert('Formulário enviado com sucesso!');
  
      // Aqui você pode adicionar a lógica para realmente enviar os dados, como enviar para um servidor.
      form.reset();
    });
  });
  