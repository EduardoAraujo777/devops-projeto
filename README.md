# 🚀 Projeto DevOps com Node.js + Docker + CI/CD

Projeto criado para praticar conceitos de DevOps como automação, containerização e integração contínua.

---

## 📌 Sobre o projeto

API simples em Node.js utilizando Express, containerizada com Docker e automatizada com GitHub Actions (CI/CD).

---

## ⚙️ Arquitetura

GitHub → GitHub Actions → Docker Hub → Container (local)

---

## 🧰 Tecnologias

- Node.js  
- Express  
- Docker  
- GitHub Actions  
- Jest  
- Git & GitHub  

---

## 🚀 Funcionalidades

- API REST simples  
- Endpoint `/` (status da API)  
- Endpoint `/health` (health check)  
- Testes automatizados  
- Pipeline CI/CD  
- Build de imagem Docker  

---

## 🔄 Pipeline CI/CD

A pipeline executa automaticamente:

1. Instala dependências  
2. Executa testes  
3. Faz build da imagem Docker  
4. Publica no Docker Hub  

---

## 🐳 Docker

### Build da imagem:
```bash
docker build -t hello-devops .

rodar container:
docker build -t hello-devops .
```
📍 Endpoints
/ → retorna status da API
/health → verifica se a API está saudável
📚 Aprendizados

Durante esse projeto, pratiquei:

Criação de API com Node.js e Express
Uso de Docker para containerização
Integração com GitHub Actions (CI/CD)
Automação de build e testes
Conceitos básicos de DevOps
🚀 Futuro

Próximas melhorias planejadas:

Deploy em AWS EC2
Infraestrutura como código com Terraform
Monitoramento com Grafana
Melhoria da pipeline CI/CD
