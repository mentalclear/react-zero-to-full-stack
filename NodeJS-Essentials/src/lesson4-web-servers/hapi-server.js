import Hapi from '@hapi/hapi';
import { helloRoute } from './hello-route';

// Creating an array for all routes:
const routes = [
    helloRoute,
]

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

// This will create all routes based on the 
// imported routes from separate object based rout files.
// see hello-route.js for the route definition.
routes.forEach(route => {
    server.route(route);
});

server.start()
    .then(() => console.log("Hapi server is listeing on port 3000"));