FROM node:18-alpine
WORKDIR /usr/src/app
MAINTAINER Label="Rohan Rustagi"
COPY . .
COPY package*.json ./
COPY package-lock*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm","run","dev"]
