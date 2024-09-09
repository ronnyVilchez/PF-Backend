import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'Api - Incidencias',
    description: 'Esta es una api que contiene CRUD de usuarios e incidencias, con autenticacion de usuario y roles'
  },
  host: 'pf-frontend-nine.vercel.app'
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.js'];

swaggerAutogen(outputFile, routes, doc);