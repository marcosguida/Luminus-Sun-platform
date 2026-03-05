# ☀️ Luminus Sun - Sistema Inteligente de Gestão e Otimização Energética

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?logo=mongodb)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-orange?logo=google)
![Hackathon](https://img.shields.io/badge/Hackathon-InovaUni%202025-purple)

> *Plataforma integrada de análise e otimização de consumo energético residencial que utiliza inteligência artificial para auxiliar na tomada de decisões estratégicas relacionadas ao uso eficiente de energia.*

---


## 🌟 Sobre o Projeto

O *Luminus Sun* é uma solução desenvolvida para o *4º Hackathon InovaUni – Hackágua e FAPTgulhas 2025, com foco no tema **Energia Limpa e Sustentável*. A plataforma web combina análise climática, dados meteorológicos do INMET e inteligência artificial para otimizar o uso de energia residencial.

### 🎯 Objetivo

Prover aos usuários residenciais uma ferramenta de apoio à decisão que maximize a eficiência energética através da correlação entre condições climáticas previstas e padrões de consumo elétrico, possibilitando economia financeira e redução do impacto ambiental.

### 🔑 Palavras-chave

Energia Renovável • Inteligência Artificial • Análise Preditiva • Eficiência Energética • Previsão Climática • Automação • Sustentabilidade • Monitoramento Energético • Matriz Energética Sustentável

---

## ✨ Características Principais

- ⚡ *Análise Preditiva Inteligente* - Processamento de dados climáticos horários com IA
- 🤖 *Agente de IA Personalizado* - Google Gemini Flash 2.5 para análise e recomendações
- 📊 *Cálculo de Irradiação Solar* - Baseado em dados meteorológicos precisos do INMET
- 🌍 *Geocodificação Automática* - Identificação da estação meteorológica mais próxima
- 📧 *Relatórios por E-mail* - Envio automatizado de análises diárias personalizadas
- 🔄 *Automação n8n* - Workflows inteligentes sem código
- 💾 *Memória Conversacional* - Aprendizado contínuo do perfil do usuário
- 📱 *Interface Responsiva* - Design moderno e acessível

---

## 🛠️ Tecnologias

### Frontend & Backend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Styled-components](https://img.shields.io/badge/Styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React-Toastify](https://img.shields.io/badge/React--Toastify-4BC0C0?style=for-the-badge&logo=react&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6F61?style=for-the-badge&logo=Recharts&logoColor=white)

### Banco de Dados & ORM

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-2B7A78?style=for-the-badge&logo=drupal&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4F46E5?style=for-the-badge&logo=typescript&logoColor=white)

### Integrações & APIs

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-3994FF?style=for-the-badge&logo=sendgrid&logoColor=white)

### Fontes de Dados

- *INMET* - Instituto Nacional de Meteorologia
- *ONS* - Operador Nacional do Sistema Elétrico
- *OpenWeather API* - Dados climáticos e geocodificação

---

### Modelos de Dados

- *User* - Dados de usuários (ID, nome, localização, e-mail, senha criptografada)
- *AutomationIntegration* - Registros de dispositivos (RELAY, SENSOR, BATTERY)
- *ChatMemory* - Histórico de interações com o agente de IA

---

## 🚀 Instalação

### Pré-requisitos
- Bun 1.3.1+
- Node.js 18+
- MongoDB 7.0+
- Conta n8n (para automações)
- Chaves de API (OpenWeather, Google Gemini, SendGrid)

### Passo a Passo

1. *Clone o repositório*
bash
git clone https://github.com/arthurpestana/hackathon-2025-frontend.git
cd hackathon-2025-frontend


2. *Instale as dependências*
bash
npm install
# ou
yarn install


3. *Configure as variáveis de ambiente*
bash
cp .env.example .env.local


4. *Execute o servidor de desenvolvimento*
bash
npm run dev
# ou
yarn dev


5. *Acesse a aplicação*

http://localhost:3000


---

## 🔐 Variáveis de Ambiente

Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

env
# Database
MONGODB_URI="mongodb+srv://hackathon-2025-db-user:V68E8AcVvcD5KLOk@hackathon-cluster.9vxvypm.mongodb.net/?retryWrites=true&w=majority&appName=hackathon-cluster"

# APIs Externas
OPENWEATHER_API_KEY=your_openweather_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
GEMINI_API_KEY=your_google_gemini_api_key

# n8n Webhook
N8N_WEBHOOK_URL=your_n8n_webhook_url

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000


### Obtenção das Chaves

| Serviço | Link | Descrição |
|---------|------|-----------|
| OpenWeather | [openweathermap.org/api](https://openweathermap.org/api) | API de dados climáticos |
| Google Gemini | [ai.google.dev](https://ai.google.dev) | API de IA generativa |
| SendGrid | [sendgrid.com](https://sendgrid.com) | Serviço de e-mail |
| MongoDB | [mongodb.com](https://www.mongodb.com) | Banco de dados NoSQL |

---

## 📦 Funcionalidades

### 1. Cadastro e Autenticação
- ✅ Registro de usuários com dados geográficos
- ✅ Autenticação segura com hash de senha
- ✅ Rastreabilidade de interações

### 2. Análise Climática
- ✅ Integração com OpenWeather API
- ✅ Previsão horária para localização do usuário
- ✅ Identificação de estação meteorológica mais próxima (INMET)
- ✅ Processamento de variáveis:
  - Irradiação solar
  - Temperatura (min/max)
  - Cobertura de nuvens
  - Volume de chuva
  - Velocidade do vento
  - Pressão atmosférica
  - Humidade
  - Visibilidade

### 3. Cálculo de Irradiação Solar
- ✅ Análise da posição solar (latitude/longitude)
- ✅ Cálculo de limpeza do céu
- ✅ Previsão energética baseada em 10m² de placas solares

### 4. Agente de IA (Luminus Sun)
- ✅ Análise preditiva com Google Gemini Flash 2.5
- ✅ Recomendações personalizadas de consumo
- ✅ Identificação dos 3 melhores horários para consumo
- ✅ Dicas diárias de economia energética
- ✅ Memória conversacional para aprendizado contínuo

### 5. Relatórios Automatizados
- ✅ Geração de relatórios HTML responsivos
- ✅ Envio automático via e-mail (SendGrid)
- ✅ Visualização de dados climáticos e energéticos
- ✅ Templates personalizados com identidade visual

### 6. Automação n8n
- ✅ Workflows automatizados
- ✅ Orquestração de processos
- ✅ Integração com múltiplas APIs
- ✅ Sistema de webhooks

---

## 🔄 Fluxo Operacional

### Pipeline Detalhado

1. *Inicialização* → Usuário fornece dados pessoais e localização
2. *Trigger* → Webhook n8n recebe payload e inicia workflow
3. *Geocodificação* → Sistema identifica coordenadas e estação meteorológica
4. *Coleta* → Requisição à OpenWeather API para previsão horária
5. *Processamento* → Agente de IA analisa dados considerando contexto temporal
6. *Cálculo* → Determinação de irradiação solar e potencial energético
7. *Geração* → Criação de relatório HTML personalizado
8. *Distribuição* → Envio via e-mail ao usuário
9. *Persistência* → Armazenamento no MongoDB para histórico

---

## 📋 Requisitos

### Requisitos Funcionais (RF)

| ID | Descrição |
|----|-----------|
| *RF01* | Iniciar fluxo de automação após cadastro |
| *RF02* | Persistir análise da IA por usuário |
| *RF03* | Obter previsão climática horária via OpenWeather API |
| *RF04* | Alimentar AI Agent com data atual e dados meteorológicos |
| *RF05* | Gerar relatório HTML com 3 melhores horários e dicas diárias |
| *RF06* | Realizar geocodificação para encontrar estação INMET mais próxima |
| *RF07* | Enviar relatório HTML para e-mail do usuário |
| *RF08* | Incluir logo do projeto no e-mail via URL pública |
| *RF09* | Armazenar registros de integração de dispositivos (RELAY, SENSOR, BATTERY) |

### Requisitos Não Funcionais (RNF)

| ID | Categoria | Descrição |
|----|-----------|-----------|
| *RNF01* | Desempenho | Tempo de resposta < 10 segundos |
| *RNF02* | Confiabilidade | Tratamento de falhas de APIs externas |
| *RNF03* | Segurança | Senhas armazenadas com criptografia hash |
| *RNF04* | Usabilidade | Relatórios HTML responsivos (Gmail, Outlook) |
| *RNF05* | Manutenibilidade | Código modular com responsabilidades únicas |
| *RNF06* | Rastreabilidade | ID de usuário rastreável em todo workflow |

### Requisitos de Restrição (RR)

| ID | Categoria | Descrição |
|----|-----------|-----------|
| *RR01* | Ferramenta | Workflow deve utilizar n8n |
| *RR02* | Tecnologia | Persistência em MongoDB |
| *RR03* | Framework | Next.js + TypeScript + SCSS |
| *RR04* | Serviço | E-mail via SendGrid |
| *RR05* | Tecnologia | IA com Google Gemini (Luminus Sun) |

---

## 👥 Equipe

### Equipe Luminus Sun

*Sistemas de Informação*
- 👨‍💻 Arthur Henrique Pestana - [@arthurpestana](https://github.com/arthurpestana)
- 👨‍💻 Bruno Sales Noleto
- 👩‍💻 Juliana Chaves
- 👨‍💻 Marcos Ribeiro

*Engenharia Agronômica*
- 🌱 Graciliano Henrique

---

## 🌍 ODS e Impacto Social

### Alinhamento com ODS 7 - Energia Limpa e Acessível

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sustainable_Development_Goal_7.png/200px-Sustainable_Development_Goal_7.png" alt="ODS 7" width="100"/>

O Luminus Sun contribui para:

- ✅ *Aumento da eficiência energética* - Otimização do consumo através de análise preditiva
- ✅ *Ampliação de energias renováveis* - Incentivo ao uso inteligente de energia solar
- ✅ *Promoção de tecnologias limpas* - Plataforma digital sustentável
- ✅ *Conscientização sobre consumo responsável* - Educação através de relatórios diários

### Três Pilares da Sustentabilidade


┌─────────────────────┐
│  Socialmente Justo  │ ─► Democratização do acesso à energia limpa
└─────────────────────┘

┌─────────────────────┐
│Economicamente Viável│ ─► Redução de custos com otimização inteligente
└─────────────────────┘

┌─────────────────────┐
│Ambientalmente Correto│─► Diminuição da dependência de fontes fósseis
└─────────────────────┘


### Impacto Social

> *Problema*: A geração excessiva e desorganizada desestimula a utilização da energia solar como solução sustentável.

> *Solução*: O monitoramento energético inovador com análise preditiva proporciona economia financeira e promove o uso consciente de energia renovável, combatendo o desperdício e incentivando a microgeração sustentável.

### Originalidade

- 🇧🇷 Utilização de dados brasileiros (INMET, ONS)
- 🤖 IA para tomada de decisão preditiva em energia solar
- 📊 Cálculo de irradiação solar baseado em meteorologia local
- 🔄 Automação inteligente com aprendizado contínuo

---

## 🏆 Diferenciais Competitivos

- 🎯 *Integração nativa com n8n* - Automações complexas sem código
- 🧠 *IA Generativa* - Google Gemini Flash 2.5 para análise preditiva
- 📍 *Personalização geográfica* - Dados precisos por geocodificação
- 📱 *Relatórios acionáveis* - HTML responsivo com recomendações claras
- 🏗️ *Arquitetura escalável* - Modular e de fácil manutenção
- 💭 *Memória conversacional* - Aprendizado contínuo do perfil do usuário
- 🇧🇷 *Dados brasileiros* - INMET e ONS para máxima precisão local

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

*Projeto Luminus Sun*  
Hackathon InovaUni 2025 - 4ª Edição  
Tema: Energia Limpa e Sustentável

📧 E-mail: [marcosguida@unitins.br]  
🌐 GitHub: [@marcosguida](https://github.com/marcosguida)

---

<div align="center">

*Desenvolvido com ☀️ pela Equipe Luminus Sun*

[![Hackathon InovaUni](https://img.shields.io/badge/Hackathon-InovaUni%202025-purple?style=for-the-badge)](https://github.com/arthurpestana/hackathon-2025-frontend)
[![ODS 7](https://img.shields.io/badge/ODS-7%20Energia%20Limpa-yellow?style=for-the-badge)](https://sdgs.un.org/goals/goal7)

</div>
