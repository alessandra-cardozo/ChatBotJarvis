🤖 JARVIS - Seu Assistente Virtual Pessoal
Bem-vindo ao projeto JARVIS, um assistente virtual simples e interativo construído com tecnologias web front-end! Este projeto permite que você interaja com a JARVIS usando comandos de voz para realizar tarefas como abrir sites, pesquisar na web, obter a hora e a data, e agora, responder a perguntas sobre temas sociais e fatos históricos importantes.


(Certifique-se de que a imagem giphy.gif está na raiz do projeto para que apareça no README)

✨ Funcionalidades
Interação por Voz: Converse com a JARVIS usando o microfone do seu navegador.

Reconhecimento de Fala: A JARVIS entende seus comandos em português.

Síntese de Fala: A JARVIS responde a você com uma voz sintetizada.

Comandos Úteis:

Abrir sites populares (Google, YouTube, Facebook, Twitter, Instagram).

Pesquisar qualquer termo no Google.

Pesquisar na Wikipedia sobre um tópico.

Informar a hora e a data atuais.

Contar piadas (simples).

Abrir a calculadora do Google.

Saudações personalizadas baseadas na hora do dia.

Novidade: Responder a perguntas sobre temas sociais importantes (como mudança climática, sustentabilidade, direitos humanos, educação, fake news).

Novidade: Responder a algumas perguntas sobre fatos históricos específicos (como a descoberta e independência do Brasil, quem foi Tiradentes).

Interface Simples e Responsiva: Design básico que se adapta a diferentes tamanhos de tela.

Integração com Google Custom Search Element (Opcional): Preparado para exibir resultados de busca personalizada do Google diretamente na página (requer configuração do CSE).

🚀 Tecnologias Utilizadas
Este projeto utiliza apenas tecnologias front-end padrão:

HTML5: Estrutura da página web.

CSS3: Estilização e layout (incluindo responsividade básica e alguns efeitos visuais).

JavaScript: Lógica principal, reconhecimento de voz (SpeechRecognition API), síntese de fala (SpeechSynthesis API) e manipulação do DOM.

Font Awesome: Ícone do microfone.

Google Custom Search Element (CSE): Para exibir resultados de busca (configuração externa necessária).

⚙️ Configuração e Execução
Para executar o projeto JARVIS localmente, siga estes passos:

Clone ou baixe o repositório: Obtenha os arquivos do projeto.

Salve os arquivos: Certifique-se de que os arquivos index.html, style.css, app.js (com as últimas atualizações) e a imagem giphy.gif (ou a imagem que você estiver usando) estejam na mesma pasta.

Servidor Web Local (Recomendado): Para garantir que o reconhecimento de voz funcione corretamente (alguns navegadores restringem a API de reconhecimento de voz em arquivos locais file://), é altamente recomendado usar um servidor web local simples.

Com Python: Abra o terminal na pasta do projeto e execute python -m http.server. Em seguida, abra seu navegador e vá para http://localhost:8000 (ou a porta indicada).

Com Live Server (Extensão VS Code): Se você usa o VS Code, instale a extensão "Live Server" e clique com o botão direito no index.html, selecionando "Open with Live Server".

Abra o index.html: Se você não puder usar um servidor web local, tente abrir o arquivo index.html diretamente no seu navegador. Nota: O reconhecimento de voz pode não funcionar neste caso.

Permitir o Microfone: O navegador solicitará permissão para usar o microfone. Conceda a permissão para que a JARVIS possa ouvir seus comandos.

🗣️ Como Usar
Abra a aplicação no seu navegador (preferencialmente via servidor web local).

Clique no botão do microfone.

Quando o texto "Ouvindo..." aparecer, diga um comando para a JARVIS.

Observe o texto reconhecido aparecer na tela e ouça a resposta da JARVIS.

Exemplos de Comandos:

"Olá Jarvis"

"Abra o YouTube"

"Pesquise por inteligência artificial"

"Wikipedia sobre Albert Einstein"

"Que horas são"

"Que dia é hoje"

"Conte uma piada"

"Abra a calculadora"

Novos exemplos:

"O que é mudança climática?"

"Fale sobre sustentabilidade"

"O que são direitos humanos?"

"Por que a educação é importante?"

"Como identificar notícias falsas?"

"Quem descobriu o Brasil?"

"Quando foi a independência do Brasil?"

"Quem foi Tiradentes?"

🔑 Segurança da Chave API
Este projeto, por ser puramente front-end, não lida com chaves API secretas que precisam ser escondidas. A integração com o Google Custom Search Element usa um ID público (cx) que não compromete a segurança.

Importante: Se você planeja integrar APIs que exigem chaves secretas no futuro e processar os resultados diretamente na página, a maneira segura de fazer isso é implementando um backend. A chave API deve residir no servidor e nunca ser exposta no código front-end.

💡 Possíveis Melhorias Futuras
Integrar com APIs de previsão do tempo para fornecer informações meteorológicas.

Adicionar a capacidade de definir lembretes ou alarmes (requer backend ou APIs de navegador mais avançadas).

Expandir o vocabulário e a complexidade dos comandos reconhecidos, possivelmente integrando com modelos de linguagem ou APIs de conhecimento mais avançadas.

Melhorar a interface do usuário e adicionar mais animações.

Permitir a personalização da voz da JARVIS.

Implementar um backend para lidar com funcionalidades que requerem chaves API seguras ou armazenamento de dados.

🤝 Contribuições
Contribuições são bem-vindas! Se você tiver ideias para melhorar este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

📄 Licença
Este projeto está sob a licença [Nome da Licença, por exemplo: MIT]. Veja o arquivo LICENSE para mais detalhes. (Crie um arquivo LICENSE.md se ainda não tiver um)
