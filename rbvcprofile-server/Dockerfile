FROM node

RUN mkdir app

WORKDIR ./app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5030

CMD ["yarn", "run", "dev"]