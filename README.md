# Piano Virtual (Fácil)

**Principais Funcionalidades:**

- **Geração de Som (Web Audio API):**
  - Cria sons dinamicamente usando `Oscillator`
  - Controla o volume com `Gain`
  - Cada tecla possui uma frequência específica associada (objeto `notas`)
  - Função principal: `tocarNota(freq)`

- **Interação do Usuário:**
  - Permite tocar notas clicando nas teclas do piano
  - Permite tocar notas usando o teclado do computador
  - Detecta eventos de clique e `keydown`

- **Estrutura Visual (HTML):**
  - Piano organizado dentro de uma `<div class="caixa">`
  - Teclas brancas representam notas naturais:
    - DO, RE, MI, FA, SOL, LA, SI
  - Teclas pretas representam sustenidos (#)
  - Estrutura pensada para simular um piano real

- **Estilização (CSS):**
  - Define o layout do piano usando **Flexbox**
  - Controla:
    - Tamanho das teclas
    - Posicionamento das teclas pretas sobre as brancas
    - Cores e aparência geral
  - Aplica efeitos visuais ao pressionar teclas

- **Sistema de Feedback Visual:**
  - Destaca teclas quando são pressionadas
  - Melhora a experiência do usuário com resposta visual imediata

**Desafios Enfrentados:**

- **Uso da Web Audio API:**
  - Entender como gerar som programaticamente
  - Configurar corretamente `Oscillator` e `Gain`
  - Controlar início e parada do som sem atrasos

- **Mapeamento de Teclas:**
  - Associar teclas do teclado às notas musicais
  - Garantir que cada tecla dispare a frequência correta

- **Posicionamento com CSS:**
  - Alinhar corretamente as teclas pretas sobre as brancas
  - Manter proporções semelhantes a um piano real

- **Sincronização de Interações:**
  - Garantir que clique e teclado funcionem de forma consistente
  - Evitar conflitos entre eventos

# Projeto Semáforo (Médio)

**Principais Funcionalidades:**

- **Cores:**
    - O semáforo muda de cor em sequência
    - Cada cor tem seu tempo (5s para o vermelho/verde, e 2s para o amarelo)
- **Mensagem**
    - Um container segura uma instrução para cada cor, como VERDE = SIGA, AMARELO = ATENÇÃO, VERMELHO = PARE
    - Também mostra a duração de cada sinal, diminuindo de acordo com o timer
- **Aparência**
    - Fizemos um poste, com a cabeça do semáforo e a base

**Desafios Enfrentados:**

Em geral foi mais fácil, a nossa maior dificuldade foi entender como implementar o timer na mensagem


# Projeto Pedra Papel Tesoura (Díficil)

**Principais Funcionalidades:**

- **Lógica do Jogo:**
    - Permite ao jogador escolher entre pedra, papel ou tesoura (escolherPlayer)
    - Gera uma escolha aleatória para o computador
    - Decide automaticamente o vencedor com base nas regras clássicas (decidirVencedor)
    - Trata empates e vitórias corretamente usando cálculo modular
- **Sistema de pontuação**
    - Mantém o placar do jogador e da IA (pontosPlayer e pontosPc)
    - Atualiza os pontos na tela em tempo real (updPontos)
- **Manipulação de interface (DOM)**
    - Atualiza imagens do jogador e do computador
    - Exibe mensagens dinâmicas com o resultado da rodada
    - Adiciona animação ao texto da mensagem ao jogar
- **Interação do usuário**
    - Botão “Começar” inicia a rodada
    - Impede jogar sem escolher uma opção antes

**Maiores dificuldades:**

As maiores dificuldades do projeto foram, primeiramente entender o cálculo modular utilizado para decidir o vencedor

No caso: ``(player - pc + 3) % 3``

Essa expressão vai transformar o nosso ciclo do jogo em matemática, no caso nosso ciclo seria algo como:

>Pedra → Tesoura → Papel → Pedra

**Cada elemento recebe um número:**

- Pedra = 0
- Papel = 1
- Tesoura = 2

E isso funciona assim porque o jogo é um ciclo realmente. Sempre existe uma “vantagem” que anda 1 passo à frente:

- Papel (1) ganha de Pedra (0) → diferença = 1

- Tesoura (2) ganha de Papel (1) → diferença = 1

- Pedra (0) ganha de Tesoura (2) → diferença = 1 (ajustada com +3)

Ou seja:

Se o resultado for 1, o jogador está “um passo à frente” no ciclo → ele ganha, se for 2, quem está à frente é o computador, se for 0, temos um empate, pois foi uma divisão igual


