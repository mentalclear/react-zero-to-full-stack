import request from "supertest";
import { app } from "./server";

describe('/hello endpoint functionality', () => {
    it('Replies with "Hello!" when a GET request is sent', (done) => {
        request(app)
            .get('/hello')
            .expect('Hello!', done);
    });
});