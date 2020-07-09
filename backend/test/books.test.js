import { expect, server, BASE_URL } from './setup';

describe('booklists', () => {
  it('get booklists page', done => {
    server
      .get(`${BASE_URL}/books`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.booklists).to.be.instanceOf(Array);
        res.body.booklists.forEach(m => {
          expect(m).to.have.property('title');
          expect(m).to.have.property('author');
        });
        done();
      });
  });

  it('posts booklists', done => {
    const data = { title: 'some name', author: 'new message', category: 'some category', blurb : 'some blurb', cover : 'some_cover.jpg'  };
    server
      .post(`${BASE_URL}/books`)
      .send(data)
      .expect(201)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.success).to.equal(true);
        expect(res.body.book).to.have.property('title', data.title);
        expect(res.body.book).to.have.property('author', data.author);
        done();
      });
  });
});
