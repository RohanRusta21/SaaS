FROM node:18-alpine
WORKDIR /usr/src/app
MAINTAINER Label="Rohan Rustagi"
COPY package*.json ./
COPY package-lock*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]