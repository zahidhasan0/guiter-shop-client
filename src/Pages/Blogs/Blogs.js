import React from "react";

const Blogs = () => {
  return (
    <div className="my-12">
      <h2 className="text-4xl font-bold   border-b-4 border-primary w-24 pb-2">
        Blogs
      </h2>
      <div>
        <h3 className="text-2xl font-bold  mt-6">
          What are the different ways to manage a state in a React application?
        </h3>
        <p className=" text-xl mt-4">
          There are four main types of state you need to properly manage in your
          React apps:
          <br />
          1. Local State
          <br />
          <br />
          2. Server State
          <br />
          <br />
          1. Global State
          <br />
          <br />
          1. URL State
          <br />
          <br />
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold  mt-6">
          How does prototypical inheritance work?
        </h3>
        <p className=" text-xl mt-4">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold  mt-6">
          What is a unit test? Why should we write unit tests?
        </h3>
        <p className=" text-xl mt-4">
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold  mt-6">React vs. Angular vs. Vue?</h3>
        <div className="mt-4">
          <p className="font-bold text-xl">Angular JS</p>
          <p className="text-2xl">
            A lot of single-page applications are created using this JS
            framework, which is open-source and free. As it is based on the MVW
            architecture, it has become a very popular choice for building
            cross-platform apps. It offers both client-side MVC and MVVM
            architecture, which makes the development of JavaScript applications
            easier for developers. A lot of businesses are using the advantages
            of outsourcing their development to the AngularJs development
            company.
          </p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">React JS</p>
          <p className="text-2xl">
            It is actually a JavaScript library used to build UIs for web and
            mobile applications. The technology is now supported by both
            Facebook and Instagram (Now Meta) and has developed into an
            essential part of the endless feed functionality in these
            applications. In terms of React’s sphere of use, it is a JS library
            with a limited range of applications, however, when combined with
            other libraries, it becomes a powerful solution, making it a
            competitive tool against Angular
          </p>
        </div>
        <div className="mt-4">
          <p className="font-bold text-xl">Vue Js</p>
          <p className="text-2xl">
            Vue.js is generally defined as a web framework for developing user
            interfaces in a progressive manner. Vue was built so that users
            could adopt the framework incrementally, as opposed to Angular. Vue
            3 introduces some exciting new features and updates to Vue.js. Among
            the new features are the accurate production of standalone reactive
            objects, async error handling, the introduction of Slots, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
