# FluxState: Real-Time Telemetry Dashboard
Dashboard de monitoramento de hardware em tempo real desenvolvido para demonstrar alta performance em interfaces reativas e manipulação de fluxos de dados assíncronos.

---
📌 Sobre o Projeto

O FluxState é uma aplicação front-end que simula o recebimento de telemetria de hardware (CPU, Memória, Temperatura). Diferente de aplicações CRUD convencionais, este projeto foca no processamento contínuo de dados e na atualização eficiente da interface (UI) sem gargalos de performance.

Por que este projeto é relevante?

Processamento de Streams: Lida com dados que chegam em alta frequência.
Performance: Utiliza técnicas para evitar re-renderizações desnecessárias do DOM.
UX de Dados: Transforma números brutos em visualizações acionáveis com alertas em tempo real.

---
✨ Funcionalidades

Simulador de Telemetria: Algoritmo que gera dados flutuantes realistas.
Live Charts: Gráficos de linha temporais (time-series) que se deslocam em tempo real.
Sistema de Alertas: Detecção automática de picos de uso com notificações visuais.
Monitor de Logs: Registro histórico de eventos críticos durante a sessão.
Persistência de Preferências: Salvamento de limites (thresholds) e tema no LocalStorage.

---
🛠️ Tecnologias Utilizadas

React (v18+): Hooks avançados para gestão de ciclo de vida.
Tailwind CSS: Estilização responsiva e suporte a Dark Mode.
Chart.js / ApexCharts: Renderização de gráficos de alta performance.
Lucide React: Iconografia técnica.
Context API / Zustand: Para gerenciar o fluxo global de dados da telemetria.

---
🧠 Desafios Técnicos & Soluções

1. Gestão de Memória e "Data Bloat"
Desafio: Adicionar dados ao estado infinitamente faria a aplicação travar em poucos minutos. Solução: Implementei a lógica de Circular Buffer. O dashboard mantém apenas os últimos 50-100 pontos de dados, descartando os antigos e mantendo o consumo de memória constante.

2. Sincronização de Gráficos
Desafio: Garantir que todos os gráficos atualizem no mesmo frame para evitar uma experiência visual "quebrada". Solução: Centralizei o intervalo de atualização em um único Provider, garantindo que todos os componentes consumidores recebam o novo pacote de dados simultaneamente.

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
