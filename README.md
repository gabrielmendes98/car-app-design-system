# Carr app design system

Project created with the intention of implementing a design system for a car app.

## Live demo in S3 + CloudFront CDN

https://d66iafpk56f75.cloudfront.net

## For local development

1. `yarn`
2. `yarn start`

## For local development without hot reload

`docker-compose up --build`

## For running the tests

1. `yarn`
2. `yarn test`

## Project structure

- api: all resources related to communication with external apis
- assets: images, svgs, etc
- common: common utilities for the application
- components: dumb components or common visual components for the application
- pages: pages and components associated with them
- routes: all the routing part of the application and resources associated with it
- store: files that make part of the global application store
- test-utils: reexport of utilities for tests
- templates: I usually create them to put common smart components in the application,
  but in this case it was not necessary.

<hr/>

The docker container was created in case it was necessary to deploy on heroku or
ECS, however, since I deployed using S3 + CloudFront, I left these files just as
an example.

<hr/>

I'm using github actions to deploy on aws every time we make a push to the master
branch.

![Deployed on AWS](./assets/solution-architecture.excalidrawpng)