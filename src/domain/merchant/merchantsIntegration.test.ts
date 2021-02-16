// import {Request} from "express";
//
// const request = require('supertest')
// const mongoose = require('mongoose')
//
// const app = require('../../app')
//
// const Merchant = mongoose.model('Merchant');
// const agent = request.agent(app);

// describe('Merchant CRUD tests', () => {
//   afterEach((done) => {
//     Merchant.deleteMany({}).exec();
//     done();
//   })
//
//   it('should ', (done) => {
//     const merchantToSave = {id: 1, name: 'Test SuperTest', address: 'rue du test SuperTest'};
//
//     agent.post('/merchants')
//       .send(merchantToSave)
//       .expect(200)
//       .end((err: Error, results: Request) => {
//         expect(results.body._id).toBeDefined();
//         expect(results.body).toMatchObject(merchantToSave);
//         done();
//       })
//   });
//
//   afterAll((done) => {
//     mongoose.connection.close();
//     app.server.close(done());
//   })
// })
