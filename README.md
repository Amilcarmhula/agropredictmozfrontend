# 🌾 AgroPredictMoz

**AgroPredictMoz** é uma aplicação React que permite ao usuário consultar e visualizar previsões climáticas para diferentes cidades em Moçambique. O sistema se conecta a uma API backend para obter informações atualizadas sobre o clima e salvar os dados consultados em um histórico acessível.

## 🔧 Funcionalidades

- 🔍 Consulta do clima atual de uma cidade (temperatura, humidade, precipitação e luz solar).
- 💡 Visualização de recomendações agrícolas baseadas nas condições climáticas.
- 🕒 Armazenamento e exibição do histórico de previsões para cada cidade pesquisada.

## 🚀 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/Amilcarmhula/agropredictmozfrontend.git
cd agropredictmozfrontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a aplicação

```bash
npm start
```

### 4. Acesse no navegador

```
http://localhost:5173
```

> ⚠️ Certifique-se de que o backend (API) esteja rodando localmente em `http://127.0.0.1:8000` para que a aplicação funcione corretamente.

## 📦 Tecnologias Utilizadas

- [React.js](https://reactjs.org/) – Biblioteca JavaScript para criação de interfaces.
- [Bootstrap](https://getbootstrap.com/) – Framework para estilização responsiva.
- Fetch API – Comunicação com o backend via requisições HTTP.

## 🧠 Lógica Principal

1. O usuário digita o nome da cidade.
2. Ao submeter o formulário:
   - Envia a cidade para o servidor para registro.
   - Consulta os dados atuais do clima da cidade.
   - Recupera o histórico de previsões salvas.
3. Os resultados são exibidos em um painel com:
   - Detalhes climáticos.
   - Recomendações agrícolas.
   - Tabela com histórico de previsões.

## 📸 Captura de Tela 

> Adicione aqui uma imagem ou GIF demonstrando a aplicação, por exemplo:

```
[Demo AgroPredictMoz](./src/assets/print.png)
```

---

👨‍💻 Desenvolvido por Amilcar Mula(https://github.com/Amilcarmhula)