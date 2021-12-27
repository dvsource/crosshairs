FROM node:alpine

RUN yarn global add nodemon

WORKDIR /usr/src/code

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3100

CMD [ "yarn", "start:dev", "-L" ]