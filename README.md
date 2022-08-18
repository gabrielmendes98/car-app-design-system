# Desafio Cyber Gênios

## Live demo no S3 + CloudFront

https://d66iafpk56f75.cloudfront.net

## Para desenvolvimento local

1. `yarn`
2. `yarn start`

## Para rodar local sem hot reload

`docker-compose up --build`

## Para rodar os testes

1. `yarn`
2. `yarn test`

<hr/>

O container docker foi criado para caso fosse fazer o deploy no heroku ou no
ECS, contudo, como fiz o deploy usando S3 + CloudFront, deixei esses arquivos só
como exemplo.

<hr/>

Estou usando github actions para fazer o deploy na aws toda vez que fizermos um
push para a master.
