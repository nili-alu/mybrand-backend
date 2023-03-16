
import request from 'supertest';
import server from '../server'; // this is the main app file

describe('Blog API', () => {
  test('should return all blog posts', async () => {
    const response = await request(server).get('/api/blogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});





// import request from 'supertest';
// import server from '../server'; // assuming this is the main app file that uses the above module

// describe('Blog API', () => {
//   let savedBlog;

//   test('should create a new blog', async () => {
//     const newBlog = {
//       title: 'Test Blog',
//       description: 'blog description message',
//       image: 'https://fastly.picsum.photos/id/9/5000/3269.jpg'
//     };

//     const res = await request(server).post('/api/blogs/create').send(newBlog);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.title).toEqual(newBlog.title);
//     expect(res.body.description).toEqual(newBlog.description);
//     expect(res.body.image).toEqual(newBlog.image);

//     savedBlog = res.body; // save the created blog for later tests
//   });
// });