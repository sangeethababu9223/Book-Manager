import { expect, server, BASE_URL } from './setup';

describe('userlists', () => {
  it('posts userlists', done => {
    const data = { fname: 'some fname', lname: 'new lname', user: 'some user', password: 'some password' };
    server
      .post(`${BASE_URL}/users`)
      .send(data)
      .expect(201)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.user).to.have.property('fname', data.fname);
        expect(res.body.user).to.have.property('lname', data.lname);
        expect(res.body.user).to.have.property('user', data.user);
        expect(res.body.user).to.have.property('password', data.password);
        done();
      });
  });
});
