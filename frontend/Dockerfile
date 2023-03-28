FROM node:18.14.1

WORKDIR /frontend

COPY package*.json ./

COPY . ./

RUN npm install

CMD npm run dev -- --host