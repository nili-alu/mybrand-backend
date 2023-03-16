import server from '../src/server.js'; 
import chaihttp from 'chai-http';
import chai,{expect} from 'chai';


chai.use(chaihttp)
chai.should()

describe("Blog API", () => {
  describe("POST /blogs/create", () => {
    it("should create a new blog", (done) => {
      const newBlog = {
        title:"new blog",
        description: "test description",
        image:"image test"
      };
      chai
      .request(server)
      .post('/api/blogs/create')
      .send(newBlog)
      .end((err, res) =>{
        expect(res).to.have.status(200)
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property('title').eql('new blog');
        expect(res.body).to.have.property('description').eql('test description');
        expect(res.body).to.have.property('image').eql('image test');
        newBlog._id = res.body._id;
       done(); 
      })
      
    })
    

    
  })

  // Test the GET /api/blogs route
  describe("GET /api/blogs", () => {
    it("should return all blogs", (done) => {
      chai
        .request(server)
        .get("/api/blogs")
        .end((err, res) => {
          expect(res).to.have.status(200);
          //  console.log(res.body); 
           done();
        });
      
    });
  });

  // Test the GET /api/blogs/:id route
  describe("GET /api/blogs/:id", () => {

    it("should return a single blog", (done) => {
      const blogId = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .get(`/api/blogs/${blogId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          res.body['new blog'];
          res.body['test description'];
          res.body['image test'];
        });
      done();
    });
  });


  // Test the PUT /api/blogs/update/:id route
  describe("PUT /api/blogs/update/:id", () => {
    it("should update an existing blog", (done) => {
      const blogId = "64137aefa26a99b83f7cb79f";
      const updatedBlog = {
        title: "Updated test blog",
        description: "Updated test description",
        image: "updated-test-image.png",
        
      };
      chai
        .request(server)
        .put(`/api/blogs/update/${blogId}`)
        .send(updatedBlog)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          expect(res.body).to.have.property('title').eql('Updated test blog');
          expect(res.body).to.have.property('description').eql('Updated test description');
          expect(res.body).to.have.property('image').eql('updated-test-image.png');

        });
      done();
    });
  });
  // Test the DELETE api/blogs/delete/:id route

  describe("DELETE /api/blogs/delete/:id", () => {

    it("should delete an existing blog", (done) => {
      const blogIdToDelete = "64137aefa26a99b83f7cb79f";
      chai.request(server)
        .delete(`/api/blogs/delete/${blogIdToDelete}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
  });

});


