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
## 📍 Endpoints
/ → status da API
/health → health check
📚 Aprendizados
CI/CD com GitHub Actions
Docker na prática
Automação de deploy
Integração de ferramentas DevOps

---

## 🚀 Futuro
Deploy em AWS EC2
Terraform
Monitoramento com Grafana

---

## 🐳 Docker

### Build da imagem:
```bash
docker build -t hello-devops .

Rodar container:
docker run -p 3001:3000 hello-devops
