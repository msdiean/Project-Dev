const express = require('express');
const request = require('supertest');

const app = express();

app.get('/healthz', (req, res) => {
    res.status(200).send('Healthy');
});

app.get('/started', (req, res) => {
    res.status(200).send('Started');
});

describe('Health Endpoints', () => {

    test('GET /healthz', async () => {
        const res = await request(app).get('/healthz');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Healthy');
    });

    test('GET /started', async () => {
        const res = await request(app).get('/started');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Started');
    });

});
