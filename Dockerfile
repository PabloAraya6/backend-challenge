FROM node:15.14.0

WORKDIR /var/www/

COPY package.json .

RUN npm i

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]