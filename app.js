// Seleciona os elementos do DOM
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Função para a JARVIS falar
function speak(text) {
    // Verifica se a API de síntese de fala está disponível
    if ('speechSynthesis' in window) {
        const text_speak = new SpeechSynthesisUtterance(text);

        // Configurações da fala (ajuste conforme preferir)
        text_speak.rate = 1; // Velocidade
        text_speak.volume = 1; // Volume
        text_speak.pitch = 1; // Tom

        // Seleciona uma voz (opcional, pode variar entre navegadores)
        // Para listar as vozes disponíveis, use window.speechSynthesis.getVoices()
        // e atribua uma voz específica a text_speak.voice
        // Exemplo:
        // const voices = window.speechSynthesis.getVoices();
        // text_speak.voice = voices.find(voice => voice.name === 'Google português do Brasil'); // Exemplo de voz

        window.speechSynthesis.speak(text_speak);
    } else {
        // Fallback para navegadores sem suporte à síntese de fala
        console.warn("Speech Synthesis API not supported in this browser.");
        // Você pode exibir o texto em um elemento na tela como alternativa
        // content.textContent = text;
    }
}

// Função para cumprimentar o usuário com base na hora do dia
function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia chefe...");
    } else if (hour >= 12 && hour < 17) {
        speak("Boa tarde mestre...");
    } else {
        speak("Boa noite senhor...");
    }
}

// Evento disparado quando a página termina de carregar
window.addEventListener('load', () => {
    speak("Inicializando JARVIS...");
    wishMe();
});

// Configuração da API de Reconhecimento de Fala
// Usa o prefixo webkit para compatibilidade com alguns navegadores
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Verifica se a API está disponível
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    // Configurações do reconhecimento (opcional)
    recognition.continuous = false; // Para parar após uma única frase
    recognition.lang = 'pt-BR'; // Define o idioma para português do Brasil

    // Evento disparado quando o reconhecimento obtém um resultado
    recognition.onresult = (event) => {
        const currentIndex = event.resultIndex;
        const transcript = event.results[currentIndex][0].transcript;
        content.textContent = transcript; // Exibe o texto reconhecido na tela
        takeCommand(transcript.toLowerCase()); // Processa o comando em minúsculas
    };

    // Evento disparado em caso de erro no reconhecimento
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        content.textContent = "Ocorreu um erro no reconhecimento de fala.";
        speak("Desculpe, tive um problema ao ouvir.");
    };

    // Evento disparado quando o serviço de reconhecimento começa a ouvir
    recognition.onstart = () => {
        content.textContent = "Ouvindo...";
    };

    // Evento disparado quando o serviço de reconhecimento termina
    recognition.onend = () => {
        // content.textContent = "Clique para falar"; // Pode redefinir o texto
    };


    // Adiciona um listener de evento de clique ao botão do microfone
    btn.addEventListener('click', () => {
        // Tenta iniciar o reconhecimento
        try {
            recognition.start();
        } catch (e) {
            console.error("Error starting speech recognition:", e);
            content.textContent = "Não foi possível iniciar o reconhecimento de fala.";
            speak("Desculpe, não consigo iniciar o microfone agora.");
        }
    });

} else {
    // Mensagem para navegadores sem suporte ao reconhecimento de fala
    console.warn("Speech Recognition API not supported in this browser.");
    content.textContent = "Reconhecimento de fala não suportado neste navegador.";
    btn.disabled = true; // Desabilita o botão se a API não estiver disponível
    speak("Desculpe, seu navegador não suporta reconhecimento de fala.");
}


// Função para processar o comando de voz
function takeCommand(message) {
    console.log("Comando recebido:", message); // Log para depuração

    // Comandos de saudação
    if (message.includes('olá') || message.includes('oi') || message.includes('e aí jarvis')) {
        speak("Olá senhor, como posso ajudá-lo?");
    }
    // Comandos para abrir sites
    else if (message.includes("abra o google")) {
        window.open("https://google.com", "_blank");
        speak("Abrindo Google...");
    } else if (message.includes("abra o youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Abrindo Youtube...");
    } else if (message.includes("abra o facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Abrindo Facebook...");
    } else if (message.includes("abra o twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Abrindo Twitter...");
    } else if (message.includes("abra o instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Abrindo Instagram...");
    }
    // Comando para pesquisa no Google
    else if (message.includes('pesquise por') || message.includes('procure por') || message.includes('encontre sobre')) {
        // Extrai o termo de pesquisa da frase
        const query = message
            .replace("pesquise por", "")
            .replace("procure por", "")
            .replace("encontre sobre", "")
            .trim();

        if (query) {
             // Codifica a query para URL e abre no Google
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            speak(`Pesquisando por ${query} no Google.`);
        } else {
            speak("Por favor, diga o que você quer pesquisar.");
        }
    }
     // Comando para pesquisa na Wikipedia
    else if (message.includes('wikipedia sobre') || message.includes('me fale sobre') && message.includes('wikipedia')) {
         // Extrai o termo de pesquisa da frase
        const query = message
            .replace("wikipedia sobre", "")
            .replace("me fale sobre", "")
             .replace("wikipedia", "")
            .trim();

        if (query) {
             // Codifica a query para URL e abre na Wikipedia
            window.open(`https://pt.wikipedia.org/wiki/${encodeURIComponent(query)}`, "_blank");
            speak(`Procurando sobre ${query} na Wikipedia.`);
        } else {
             speak("Por favor, diga o que você quer procurar na Wikipedia.");
        }
    }
    // Comandos de informação geral (usando busca no Google como fallback)
    else if (message.includes('o que é') || message.includes('quem é') || message.includes('o que são')) {
        // Extrai o termo da pergunta
        const query = message
            .replace("o que é", "")
            .replace("quem é", "")
            .replace("o que são", "")
            .trim();

        if (query) {
             // Codifica a query para URL e abre no Google
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            const finalText = "Isto é o que encontrei na internet sobre " + query;
            speak(finalText);
        } else {
             speak("Por favor, diga o que você quer saber.");
        }
    }
    // Comando para a hora
    else if (message.includes('que horas são') || message.includes('me diga a hora')) {
        const time = new Date().toLocaleString('pt-BR', { hour: "numeric", minute: "numeric" });
        const finalText = "São " + time;
        speak(finalText);
    }
    // Comando para a data
    else if (message.includes('que dia é hoje') || message.includes('me diga a data')) {
        const date = new Date().toLocaleString('pt-BR', { month: "long", day: "numeric", year: "numeric" });
        const finalText = "Hoje é " + date;
        speak(finalText);
    }
    // Comando para abrir a calculadora (depende do sistema operacional)
    else if (message.includes('abra a calculadora')) {
        // Este comando pode não funcionar em todos os navegadores/sistemas operacionais
        // window.open('Calculator:///'); // Exemplo para Windows
        // Uma alternativa mais compatível seria abrir uma calculadora online
         window.open('https://www.google.com/search?q=calculadora', "_blank"); // Abre a calculadora do Google
        const finalText = "Abrindo a calculadora";
        speak(finalText);
    }
    // Comando de piada (exemplo simples)
    else if (message.includes('conte uma piada') || message.includes('me diga uma piada')) {
        const jokes = [
            "Por que o pomar de maçãs foi ao psicólogo? Porque tinha problemas de identidade! Umas eram fuji, outras gala...",
            "O que o pato disse para a pata? Estamos empatados!",
            "Qual é o esporte mais barulhento? O tênis, porque a gente sempre ouve o saque!",
            "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano!"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    }
    // COMANDOS SOBRE TEMAS SOCIAIS
    else if (message.includes('o que é mudança climática') || message.includes('fale sobre aquecimento global')) {
        speak("A mudança climática refere-se a alterações de longo prazo nas temperaturas e padrões climáticos. Principalmente causada pela atividade humana, como a queima de combustíveis fósseis. É um desafio global que exige ação de todos. Posso pesquisar mais sobre isso para você?");
    }
     else if (message.includes('o que é sustentabilidade') || message.includes('fale sobre desenvolvimento sustentável')) {
        speak("Sustentabilidade é a capacidade de suprir as necessidades do presente sem comprometer a capacidade das futuras gerações de suprir suas próprias necessidades. Envolve equilibrar aspectos ambientais, sociais e econômicos. Quer que eu pesquise exemplos de práticas sustentáveis?");
    }
     else if (message.includes('o que são direitos humanos') || message.includes('fale sobre direitos humanos')) {
        speak("Direitos humanos são direitos fundamentais inerentes a todos os seres humanos, independentemente de raça, sexo, nacionalidade, etnia, idioma, religião ou qualquer outra condição. Incluem o direito à vida, à liberdade e à igualdade. Posso buscar a Declaração Universal dos Direitos Humanos para você?");
    }
     else if (message.includes('por que a educação é importante') || message.includes('qual a importância da educação')) {
        speak("A educação é fundamental para o desenvolvimento pessoal e social. Ela capacita indivíduos, promove o pensamento crítico, reduz desigualdades e impulsiona o progresso de uma sociedade. Investir em educação é investir no futuro. Quer saber mais sobre o acesso à educação no Brasil?");
    }
     else if (message.includes('o que é fake news') || message.includes('como identificar notícias falsas')) {
        speak("Fake news, ou notícias falsas, são informações deliberadamente enganosas ou fabricadas que se espalham rapidamente, especialmente online. Elas podem causar danos significativos. Para identificá-las, verifique a fonte, compare com outras notícias e desconfie de títulos sensacionalistas. Posso pesquisar dicas sobre como verificar notícias?");
    }
    // NOVOS COMANDOS SOBRE FATOS HISTÓRICOS (Exemplos)
    else if (message.includes('quem descobriu o brasil')) {
        speak("O Brasil foi descoberto, ou melhor, encontrado pelos europeus em mil e quinhentos, por uma expedição liderada por Pedro Álvares Cabral.");
    }
    else if (message.includes('quando foi a independência do brasil')) {
        speak("A independência do Brasil foi proclamada em sete de setembro de mil oitocentos e vinte e dois, por Dom Pedro Primeiro.");
    }
     else if (message.includes('quem foi tiradentes')) {
        speak("Tiradentes foi um dentista, alferes e ativista político brasileiro, considerado um dos líderes da Inconfidência Mineira no final do século dezoito.");
    }
    // Comando de fallback para pesquisa no Google se nenhum outro comando for reconhecido
    else {
        // Assume que a frase é um termo de pesquisa
        const query = message.trim();
         if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            const finalText = "Encontrei algumas informações para " + query + " no Google";
            speak(finalText);
         } else {
             speak("Desculpe, não entendi o comando. Por favor, tente novamente.");
         }
    }
}
