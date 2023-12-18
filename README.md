#React props - learn the fundementals using functional & class components

This is learning props through rendering a product display in an e-commerce page.

Overview
Components are basic building blocks of a react page. 

Screenshot

Links:

Built With:
React.js
Vanilla CSS

My process:
1. installed a react-app framework.
2. Created a component Product.js
3. passed product informmation (name, description, price) from from App.js(parent) to the child Product.js
4. applied a cleaner vesrsion of passing props (destructuring props)
5. created a component(Item Description) inside a component(Product) and passed information from the parent component to child component (Item Description)
6. used class components to pass props in item description component
7. Applied basic styling

What I learned:
1.‘Props’ is a keyword in react . Stands for properties used to pass data from one component to another. 
2.The data passed through props is **‘read only’** ie the data coming from parent to child should not be changed by child components
3.Props can only be passed from **parent to child** not vice-versa
4.Props make components reusable.
5.How to use props in functional components(most comonly used) and class components(in older codes)

Example: a product that has an image ,  price and and rating needs a single component and can have different information passed as prop for each product  to render different product components

Props gets passed as a **parameter** to a functional component


Useful resources:

https://www.youtube.com/watch?v=kHJSNFU7H4U


Author:

Rini Joy
https://rinijoy.com/
https://www.linkedin.com/in/rini-joy-5957a437/

