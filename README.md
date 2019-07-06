## REACT FUNDAMENTALS

**What is react?**

- React is an open source javascript library for building user interfaces.
- React has a rich ecosystem that handles routing, http requests and other functionalities.
- React was created and maintained by facebook.

**Architecture**

- React is made of components which can be combined to make a rich and huge UI.
- Components make it possible to have reusable code in angular and vue.
- React is declarative.

**Prerequisites**

As a beginner one should acquire the below basics.
- HTML, CSS and JavaScript(ES6).
- Javascript - "this" keyword, map, filter and reduce
- ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread      operators, and destructuring assignment.
 
**COMPONENTS**

- Root/app component. This is the entry part of the application.

**Component types**

1. **Functional components**

- These are simply javascript functions which return html which describe the UI.

2. **Stateful class components** 

- These are regular ES6 classes that extend the component class from react library.
- They contain a render method which return HTML.

**Functional vs Class components**

1. **Functional components**

- Absence of "this" keyword
- Focuses on the UI rather than complicated states
- Provide lifecycle hooks 

2. **Class/stateful/smart/container components**

- Mantain private data aslo known as state
- Complex UI logic
- Provide lifecycle hooks 

**Update on Functional components**

Functional is no longer stateless. It can use hooks to implement state.

**JSX**

- JavaScript XML(JSX) is an extension to the javascript language syntax.
- Uses tags, elements, attribute and children.

**JSX vs HTML**

Use of camelCase.

- class => className
- for => htmlFor
- onclick => onClick
- tabindex => tabIndex


**PROPS**

Props short form of properties, are immutable. This means its value cannot be changed.
In a functional component props is passed inside the brackets and to retrieve the content the following syntax is used `{props.name}`

        const Name = (props) => {

In a class component the props is not passed inside the brackets but instead `this` keyword function is used to render the html property i.e `{this.props.name}`

Incase props has children, all content has to be returned in one element i.e `div`

        <div>
            <h1>Hello {props.name} a.k.a {props.nickName}</h1>
            {props.children}
        </div>

