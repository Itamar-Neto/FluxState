# FluxState: Real-Time Telemetry Dashboard
Dashboard de monitoramento de hardware em tempo real desenvolvido para demonstrar alta performance em interfaces reativas e manipulação de fluxos de dados assíncronos.

--- 

❗Projeto ainda em desenvolvimento❗
---
📌 Sobre o Projeto

O FluxState é uma aplicação front-end que simula o recebimento de telemetria de hardware (CPU, Memória, Temperatura). Diferente de aplicações CRUD convencionais, este projeto foca no processamento contínuo de dados e na atualização eficiente da interface (UI) sem gargalos de performance.

Por que este projeto é relevante?

Processamento de Streams: Lida com dados que chegam em alta frequência.
Performance: Utiliza técnicas para evitar re-renderizações desnecessárias do DOM.
UX de Dados: Transforma números brutos em visualizações acionáveis com alertas em tempo real.

---
⚙️ Especificações Técnicas e Funcionalidades

| Funcionalidade | Requisito Funcional (RF) | Descrição Técnica |
| -------------- | ------------------------ | ----------------- |
|Simulador de Telemetria |	RF01 - Gerador de Dados |	Implementação de lógica no arquivo mockGenerator.js utilizando o Movimento Browniano. Em vez de valores aleatórios brutos, o sistema calcula o próximo dado com base no anterior, garantindo flutuações realistas de CPU, RAM e Temperatura.|
|Data Pipeline Ativo	| RF02 - Hook de Telemetria |	Desenvolvimento do custom hook useTelemetry.js para gerenciar o fluxo de dados. Utiliza um Circular Buffer que limita o estado aos últimos 50 pontos, otimizando a memória e garantindo a performance da aplicação a longo prazo. |
| Live Charts (Tempo Real) |	RF03 - Integração Visual |	Configuração de bibliotecas de alta performance (ApexCharts/Chart.js) para renderizar gráficos de linha temporais. Os gráficos são atualizados dinamicamente conforme o pipeline injeta novos dados, criando o efeito de deslocamento contínuo. |
| Sistema de Alertas |	RF04 - Heurística de Monitoramento |	Lógica de verificação em tempo real que compara os dados recebidos com limites (thresholds) pré-definidos. Ao detectar uma anomalia, o sistema dispara gatilhos para mudanças visuais reativas na interface (ex: alteração de cores para vermelho/laranja). |
| Monitor de Logs	| RF05 - Registro de Eventos |	Implementação de um painel lateral de histórico que captura e lista cronologicamente cada alerta disparado. Permite que o usuário audite picos de instabilidade ocorridos durante a sessão de monitoramento. |
| Persistência de Preferências |	RF06 - Gestão de Estado Local	| Utilização da API LocalStorage do navegador para salvar configurações de limites de alerta e preferências de tema (Dark/Light), garantindo que os dados não sejam perdidos após o refresh da página.

---
🛠️ Tecnologias Utilizadas

React (v18+): Hooks avançados para gestão de ciclo de vida. </br>
Tailwind CSS: Estilização responsiva e suporte a Dark Mode.</br>
Chart.js / ApexCharts: Renderização de gráficos de alta performance.</br>
Lucide React: Iconografia técnica.</br>
Context API / Zustand: Para gerenciar o fluxo global de dados da telemetria.</br>

---
🚀 Como Executar o Projeto

Clone o repositório: <br>
<code>Bash</code> <br>
<code>git clone https://github.com/Itamar-Neto/FluxState</code>

Instale as dependências: <br>
<code>Bash</code> <br>
<code>npm install</code>

Inicie o servidor de desenvolvimento: <br>
<code>Bash</code> <br>
<code>npm run dev</code>

---
📈 Roadmap / Futuras Implementações

[ ] Integração real com Web Serial API para leitura de Arduino/ESP32. <br>
[ ] Implementação de Web Workers para processar cálculos estatísticos fora da thread principal. <br>
[ ] Exportação de relatórios em PDF/CSV. <br>

---
📝 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.
