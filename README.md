🚀 Projeto DevOps com Node.js + Docker + CI/CD

Este projeto foi desenvolvido com foco em aprendizado prático de DevOps, aplicando conceitos de automação, containerização e integração contínua.

📌 Sobre o projeto

Trata-se de uma API simples desenvolvida em Node.js utilizando Express, containerizada com Docker e integrada a uma pipeline CI/CD usando GitHub Actions.

O objetivo é simular um fluxo real de entrega de software, desde o desenvolvimento até a automação do build e testes.

⚙️ Arquitetura

Fluxo do projeto:

GitHub → GitHub Actions → Docker Hub → Container (execução local)
🧰 Tecnologias utilizadas
Node.js
Express
Docker
GitHub Actions
Jest (testes)
GitHub
🚀 Funcionalidades
API REST simples
Endpoint de status /
Endpoint de health check /health
Testes automatizados
Pipeline CI/CD
Build e deploy de imagem Docker
🔄 Pipeline CI/CD

A pipeline executa automaticamente:

Instalação de dependências
Execução de testes automatizados
Build da imagem Docker
Push da imagem para Docker Hub
📦 Como executar localmente
# clonar repositório
git clone <repo>

# instalar dependências
npm install

# rodar aplicação
node app.js
🐳 Rodando com Docker
docker build -t hello-devops .
docker run -p 3001:3000 hello-devops
📍 Endpoints
/ → status da API
/health → health check
📚 Aprendizados

Este projeto me ajudou a entender na prática:

Como funciona CI/CD
Uso de Docker em ambiente real
Automatização de processos
Integração entre GitHub e pipeline
🚀 Futuro
Deploy em nuvem (AWS EC2)
Terraform para infraestrutura
Monitoramento com Grafana
