# freeCodeCamp Survey Form

Este é um formulário de pesquisa simples, projetado para o projeto de teste do freeCodeCamp. O objetivo deste formulário é coletar informações dos usuários, como nome, e-mail, idade, cargo atual, preferências sobre o uso da plataforma e sugestões para melhorias.

## Estrutura do Projeto

Este projeto é composto por três arquivos principais:

1. **HTML**: Estrutura do formulário de pesquisa.
2. **CSS**: Estilos visuais aplicados ao formulário e à página.
3. **JavaScript**: Validação do formulário, incluindo a verificação de campos obrigatórios antes do envio.

### Arquivos

- **index.html**: Contém a estrutura do formulário e os elementos HTML.
- **formstile.css**: Define os estilos visuais do formulário, incluindo fontes, cores, layout e responsividade.
- **form.js**: Lida com a validação do formulário no momento do envio, garantindo que os campos obrigatórios sejam preenchidos corretamente.

---

## Como Usar

### 1. Clone o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/freeCodeCamp-Survey-Form.git
```

2. Abra o Arquivoindex.html
Abra o arquivo index.htmlem seu navegador preferido para visualizar o formulário em funcionamento.

3. Personalize (Opcional)
Sinta-se à vontade para editar os campos do formulário ou modificar os estilos e a lógica de validação no arquivo JavaScript.

Estrutura de Arquivos
```bash
freeCodeCamp-Survey-Form/
│
├── index.html         # Arquivo HTML contendo o formulário
├── formstile.css      # Arquivo CSS para estilização do formulário
└── form.js            # Arquivo JavaScript para validação do formulário
```
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

Como o Formulário Funciona
Campos Obrigatórios
Nome : O campo de nome é obrigatório. O usuário precisa inserir seu nome completo.
E-mail : O campo de e-mail também é obrigatório e valida se o formato do e-mail é válido.
Carga : O campo de carga é obrigatório. O usuário deve selecionar uma opção no menu suspenso.
Opções de Recomendação
O formulário pergunta se o usuário recomendaria o freeCodeCamp para um amigo, e uma resposta precisa ser definida entre "Definitivamente", "Talvez" e "Não tenho certeza". Se não for selecionado, o formulário não será enviado.
Comentários e Sugestões
O formulário inclui um campo de comentários onde o usuário pode inserir comentários adicionais.
Validação de Formulário
O arquivo form.jsvalida os campos obrigatórios antes de permitir o envio do formulário. Se algum campo obrigatório não for preenchido, o usuário verá um alerta solicitando para preencher os campos faltantes.
Estilos CSS
O arquivo formstile.cssdefine os seguintes estilos principais:

Núcleos
Branco :#f3f3f3
Azul Escuro :#1b1b32
Verde :#37af65
Disposição
O formulário é centralizado e responsivo.
As margens e os preenchimentos são ajustados para garantir que o formulário seja ajustado bem em diferentes tamanhos de tela.
