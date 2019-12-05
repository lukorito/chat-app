FROM node:10-alpine

RUN mkdir -p /usr/app/server/node_modules && chown -R node:node /usr/app/server

WORKDIR /usr/app/server

COPY package.json ./

COPY yarn.lock ./

USER node

RUN yarn

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]

# add expo port