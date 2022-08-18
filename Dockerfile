FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["yarn", "start"]