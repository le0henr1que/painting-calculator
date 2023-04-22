# Definir imagem base
FROM node:latest

# Definir diretório de trabalho dentro do container
WORKDIR /src

# Copiar arquivos necessários para o diretório de trabalho
COPY package*.json ./
COPY . .

# Instalar dependências
RUN npm install

# Executar a build
RUN npm run build

# Iniciar o programa
CMD ["npm", "start"]