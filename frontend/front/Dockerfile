FROM node:14.18.1

WORKDIR /app
ENV PATH /app/node_modules/.bin$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]