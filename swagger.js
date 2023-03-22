const swaggerDefinition ={
  "swagger": "2.0",
  "info": {
    "title": "My Brand API",
    "description": "API description in Markdown.",
    "version": "1.0.0"
  },
  "host": "localhost:4000",
  "basePath": "/api",
  "schemes": ["http"],
  
  "paths":{
    "/blogs": {
      "get": {
        "tags": ["Blog"],
        "summary": "Get all blog posts",
        "description": "",
        "produces": ["application/json"],
        "parameters": [],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },

    "/blogs/create": {
      "post": {
        "tags": ["Blog"],
        "summary": "Create a new blog",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "title",
            "in": "formData",
            "description": "Title of the blog",
            "required": true,
            "type": "string"
          },
          {
            "name": "description",
            "in": "formData",
            "description": "Content of the blog ",
            "required": true,
            "type": "string"
          },
          {
            "name": "image",
            "in": "formData",
            "description": "Image of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blogs/{id}": {
      "get": {
        "tags": ["Blog"],
        "summary": "Get a blog post by id",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the blog post",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },
    "/blogs/update/{id}": {
    "put": {
      "tags": ["Blog"],
      "summary": "Update a blog post",
      "description": "",
      "produces": ["application/json"],
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "Id of the blog",
          "required": true,
          "type": "string"
        },
        {
          "name": "title",
          "in": "formData",
          "description": "Title of the blog ",
          "required": true,
          "type": "string"
        },
        {
          "name": "description",
          "in": "formData",
          "description": "Content of the blog ",
          "required": true,
          "type": "string"
        },
        {
          "name": "image",
          "in": "formData",
          "description": "Image of the blog post",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": ""
          }
        },
        "401": {
          "description": "Unauthorized",
          "schema": {
            "$ref": ""
          }
        },
        "500": {
          "description": "Internal Server Error",
          "schema": {
            "$ref": ""
          }
        }
      }
    }
  },
  "/blogs/delete/{id}": {
    "delete": {
      "tags": ["Blog"],
      "summary": "Delete a blog ",
      "description": "",
      "produces": ["application/json"],
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "Id of the blog post",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": ""
          }
        },
        "401": {
          "description": "Unauthorized",
          "schema": {
            "$ref": ""
          }
        },
        "500": {
          "description": "Internal Server Error",
          "schema": {
            "$ref": ""
          }
        }
      }
    }
  },
   
"/comments/create": {
  "post": {
    "tags": ["comment"],
    "summary": "Create a a comment",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "message",
        "in": "formData",
        "description": "comment message here",
        "required": true,
        "type": "string"
      }     
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/comments": {
  "get": {
    "tags": ["comment"],
    "summary": "Get all comments",
    "description": "",
    "produces": ["application/json"],
    "parameters": [],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/comments/{id}": {
  "get": {
    "tags": ["comment"],
    "summary": "Get a comment by id",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "description": "Id of the comment",
        "required": true,
        "type": "string"
      }
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/comments/delete/{id}": {
      "delete": {
        "tags": ["comment"],
        "summary": "Delete a comment ",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the comment",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },

      
"/messages/create": {
  "post": {
    "tags": ["Contact-me"],
    "summary": "Contact me",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "email",
        "in": "formData",
        "description": "your email",
        "required": true,
        "type": "string"
      },
      {
        "name": "subject",
        "in": "formData",
        "description": "subject",
        "required": true,
        "type": "string"
      },
      {
        "name": "message",
        "in": "formData",
        "description": "text message here",
        "required": true,
        "type": "string"
      }     
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/messages": {
  "get": {
    "tags": ["Contact-me"],
    "summary": "Get all messages",
    "description": "",
    "produces": ["application/json"],
    "parameters": [],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/messages/{id}": {
  "get": {
    "tags": ["Contact-me"],
    "summary": "Get a message by id",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "description": "Id of the comment",
        "required": true,
        "type": "string"
      }
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/messages/delete/{id}": {
      "delete": {
        "tags": ["Contact-me"],
        "summary": "Delete a message ",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of the comment",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    },

         
"/users/create": {
  "post": {
    "tags": ["Users"],
    "summary": "Sign up form",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name":"name",
        "in": "formData",
        "description": "your name",
        "required": true,
        "type": "string"
      },
      {
        "name": "email",
        "in": "formData",
        "description": "your email",
        "required": true,
        "type": "string"
      },
      {
        "name": "password",
        "in": "formData",
        "description": "password",
        "required": true,
        "type": "string"
      }
     
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/users": {
  "get": {
    "tags": ["Users"],
    "summary": "Get all users",
    "description": "",
    "produces": ["application/json"],
    "parameters": [],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/users/{id}": {
  "get": {
    "tags": ["Users"],
    "summary": "Get a user by id",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "description": "Id of user",
        "required": true,
        "type": "string"
      }
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/users/update/{id}": {
  "put": {
    "tags": ["Users"],
    "summary": "edit user's credential",
    "description": "",
    "produces": ["application/json"],
    "parameters": [
      {
        "name": "id",
        "in": "path",
        "description": "user id",
        "required": true,
        "type": "string"
      },
      {
        "name": "email",
        "in": "path",
        "description": "new email",
        "required": true,
        "type": "string"
      },
      {
        "name": "password",
        "in": "formData",
        "description": "new password",
        "required": true,
        "type": "string"
      },
    ],
    "responses": {
      "200": {
        "description": "OK",
        "schema": {
          "$ref": ""
        }
      },
      "401": {
        "description": "Unauthorized",
        "schema": {
          "$ref": ""
        }
      },
      "500": {
        "description": "Internal Server Error",
        "schema": {
          "$ref": ""
        }
      }
    }
  }
},
"/users/delete/{id}": {
      "delete": {
        "tags": ["Users"],
        "summary": "Delete a user by id ",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id of a user",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": ""
            }
          },
          "401": {
            "description": "Unauthorized",
            "schema": {
              "$ref": ""
            }
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": ""
            }
          }
        }
      }
    }



  }
};

export default swaggerDefinition;
 



