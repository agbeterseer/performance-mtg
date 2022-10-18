
const PostService = require("../services/post-service");

const postService = new PostService();

// Create post list
exports.create_post = (req, res) => {
    
   const result = postService.post(req,res);
   console.log(`result: ${result}`);
    // connect to service from here ${req.params.id}
    
      res.send("NOT IMPLEMENTED: Meal list");
  };
  