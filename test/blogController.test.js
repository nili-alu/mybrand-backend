import server from '../server.js'; 
import chaihttp from 'chai-http';
import chai,{expect} from 'chai';


chai.use(chaihttp)
chai.should()

describe("API", () => {
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


  // Test the GET /api/users/:id route
  describe("GET /api/users/:id", () => {
    it("should return a single user", (done) => {
      const userId = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .get(`/api/users/${userId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          res.body["name"];
          res.body["new user"];
          res.body["password"];
        });
      done();
    });
  });

  // Test the DELETE api/users/delete/:id route

  describe("DELETE /api/users/delete/:id", () => {
    it("should delete an user on with that id", (done) => {
      const userIdToDelete = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .delete(`/api/users/delete/${userIdToDelete}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
  });

  // Test the GET /api/comments/:id route
  describe("GET /api/comments/:id", () => {
    it("should return a single comments", (done) => {
      const commentId = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .get(`/api/comments/${commentId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          res.body["name"];
          res.body["description"];
        });
      done();
    });
  });

  // Test the DELETE api/comments/delete/:id route

  describe("DELETE /api/comments/delete/:id", () => {
    it("should delete an existing comment", (done) => {
      const commentId = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .delete(`/api/comments/delete/${commentId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
  });

  // Test the GET /api/message/:id route
  describe("GET /api/messages/:id", () => {
    it("should return a single message", (done) => {
      const messageId = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .get(`/api/messages/${messageId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          res.body["niyo@gmail.com"];
          res.body["test"];
          res.body["test"];
        });
      done();
    });
  });

  // Test the DELETE api/messages/delete/:id route

  describe("DELETE /api/messages/delete/:id", () => {
    it("should delete an existing message", (done) => {
      const messageIdToDelete = "64137aefa26a99b83f7cb79f";
      chai
        .request(server)
        .delete(`/api/messages/delete/${messageIdToDelete}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
  });
});
