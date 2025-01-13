Formulário de pesquisa do freeCodeCamp
Este é um formulário de pesquisa simples, projetado para o projeto de teste do freeCodeCamp. O objetivo deste formulário é coletar informações dos usuários, como nome, e-mail, idade, carga atual, preferências sobre o uso da plataforma e sugestões para melhorias.

Estrutura do Projeto
Este projeto é composto por três arquivos principais:

HTML : Estrutura do formulário de pesquisa.
CSS : Estilos visuais aplicados ao formulário e à página.
JavaScript : Validação do formulário, incluindo a verificação de campos obrigatórios antes do envio.
Arquivos
index.html : Contém a estrutura do formulário e os elementos HTML.
formtile.css : Define os estilos visuais do formulário, incluindo fontes, núcleos, layout e responsividade.
form.js : Lida com a validação do formulário no momento do envio, garantindo que os campos obrigatórios sejam preenchidos corretamente.
Como usar
1. Clone o Repositório
Clone este repositório para sua máquina local:

bater

Copiar código
git clone https://github.com/seu-usuario/freeCodeCamp-Survey-Form.git
2. Abra o Arquivoindex.html
Abra o arquivo index.htmlem seu navegador preferido para visualizar o formulário em funcionamento.

3. Personalize (Opcional)
Sinta-se à vontade para editar os campos do formulário ou modificar os estilos e a lógica de validação no arquivo JavaScript.

Estrutura de Arquivos
bater

Copiar código
freeCodeCamp-Survey-Form/
│
├── index.html         # Arquivo HTML contendo o formulário
├── formstile.css      # Arquivo CSS para estilização do formulário
└── form.js            # Arquivo JavaScript para validação do formulário
Descrição dos Arquivos
index.html
Este arquivo contém a estrutura básica do formulário, incluindo campos de entrada como nome, e-mail, idade, carga e preferências. Ele também inclui opções de seleção e caixas de seleção, com um botão de envio no final.

formstile.css
Este arquivo contém os estilos para o formulário e a página. Ele usa variáveis ​​CSS para definir núcleos principais e fontes, e aplica estilos responsáveis ​​para garantir que o layout seja ajustado especificamente em diferentes tamanhos de tela. Abaixo as principais regras definidas no CSS estão:

Fontes : Utilize a fonte "Poppins" importada do Google Fonts.
Núcleos : Defina núcleos primários como branco, azul escuro e verde.
Layout : Estilo para a estrutura do formulário com margens e preenchimento adequado.
Formatação : Estiliza entradas, botões, selects e checkboxes, com transições e efeitos de foco.
form.js
Este arquivo JavaScript contém uma lógica de validação para garantir que os campos obrigatórios sejam preenchidos antes do envio do formulário. Ele impede o envio padrão do formulário e verifica se os campos como nome, e-mail, carga e recomendação foram preenchidos corretamente.

Exemplo de uso
Como o formulário funciona:
Campos obrigatórios :
Nome, e-mail e carga são campos obrigatórios. Se algum desses campos não for preenchido, um alerta será solicitado para preencher todos os campos obrigatórios.
Botão de opção de recomendação :
O usuário deve selecionar uma opção para recomendação ("Definitivamente", "Talvez" ou "Não tenho certeza"). Se nenhuma opção for selecionada, um alerta será exibido.
Caixas de seleção de preferência :
O usuário pode selecionar diversas opções para as melhorias desejadas, mas não há validação obrigatória para este campo.
Envio :
Após a validação, o formulário será "enviado" (apenas simulado com uma mensagem de sucesso) e então será limpo.
Licença
Este projeto está licenciado sob uma licença do MIT .
