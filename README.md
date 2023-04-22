
# Calculadora de pintura
[![GitHub issues](https://img.shields.io/github/issues/le0henr1que/painting-calculator.svg)](https://github.com/le0henr1que/painting-calculator/issues)
[![GitHub forks](https://img.shields.io/github/forks/sle0henr1que/painting-calculator.svg)](https://github.com/le0henr1que/painting-calculator/network)

Este é um projeto que visa fornecer uma API RESTful para o calculo de consumo de tinta dependendo da área de um determinado local. Com ele, é possível retornar o uso adequado para cada medida de tinta.

A API foi construída usando Node.js com Express, e teve como pricipal objetivo auxiliar os pintores a calcular a quantidade de tinta necessária para um determinado ambiente.
## 🚀 Começando

Para obter uma copia do projeto para execução basta seguir as etapas:

Clonar repositorio:

Github:
```
git clone https://github.com/le0henr1que/painting-calculator.git
```
ou Gitlab:
```
git clone https://gitlab.com/le0henr1que/painting-calculator.git
```

## 📋 Documentação

A documentação da API está disponível em /api/docs , Ela fornece informações detalhadas sobre as rotas disponíveis e os parâmetros de entrada e saída.
Acesso para teste da área ADM:

* Documentação: https://painting-calculator-production.up.railway.app/api/docs/
* Documentação local: http://localhost:`PORTA`/api/docs/

## 📋 Teste

Os teste da estão disponíveis em:
```
npm run test
```

Ela fornece informações detalhadas sobre os testes unitarios.

### 📋 Pré-requisitos

Para execução do projeto é preciso:

- Gerenciador de pacotes;
- Node JS
- Docker (Opcional)

### 🔧 Execução

Para executar o projeto basta seguir as etapas:

Projeto por padrão rodando na porta:

`5000`

### Instalação das Dependências run:

```
npm i
```

### Para rodar o projeto fora de um container dokcer, basta executar:

```
npm run dev:server
```

### 🐋 Para rodar o projeto em um container docker, basta executar respectivamente:


```
docker build -t `nome-da-imagem`
```

```
docker run -p `PORTA`:80 `nome-da-imagem`
```




