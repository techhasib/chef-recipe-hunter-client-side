import React from "react";

function Blog() {
  return (
    <div>
      Q: Tell us the differences between uncontrolled and controlled components.{" "}
      <br /> <br />
      Ans: Uncontrolled components are HTML elements that are managed by the
      browser, while controlled components are custom components managed by
      application code. Uncontrolled components are simpler to use, but can be
      more difficult to manipulate and access. Controlled components provide
      greater flexibility and control over behavior, but require more code to
      set up and manage. The choice between uncontrolled and controlled
      components depends on factors such as application complexity, control over
      user interactions, and developer experience. Both are important tools for
      building effective user interfaces, and developers should choose the
      approach that best meets their needs and goals. <br /> <br />
      Q: How to validate React props using PropTypes? <br /> <br />
      Ans: To validate React props using PropTypes, import the PropTypes library
      and define the expected prop types for each component. PropTypes can be
      set to require certain data types, default values, and whether a prop is
      required or not. The defined propTypes will then be checked against the
      passed-in props during runtime. <br /> <br />
      Q: Tell us the difference between nodejs and express js.
      <br /> <br />
      Ans: Node.js provides the runtime environment for running JavaScript on
      the server, while Express.js provides the framework for building web
      applications and APIs on top of Node.js. Together, they provide a powerful
      and flexible platform for building scalable and efficient web applications
      using JavaScript. <br /> <br />
      Q: What is a custom hook, and why will you create a custom hook? <br />{" "}
      <br />
      Ans: A custom hook is a reusable function in React that uses built-in or
      other custom hooks to provide commonly used logic across components. It
      can simplify code, improve organization, and reduce duplication. I will
      use for managing state, complex forms, animations, and API requests.
    </div>
  );
}

export default Blog;
