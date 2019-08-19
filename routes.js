const routes = require("next-routes");

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add({
    name: "plan",
    pattern: "/exercise/plan/:id",
    page: "/exercise/plan"
  });
