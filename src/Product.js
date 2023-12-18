import React from "react";
import ItemDescription from "./ItemDescription";

//Method 1 of using props

// const Product = (props) => {
//   return (
//     <div>
//     <h1>{props.name}</h1>
//     <h2>{props.description}</h2>
//     <h3>${props.price}</h3>
//     </div>
//   )
// }

//Method 2 of using props : de-structuring props

// function Product ({name, description, price}) {
// return (
//     <div>
//         <h1>{name}</h1>
//         <h1>{description}</h1>
//         <h1>${price}</h1>

//     </div>
// )
// }

// Method 3 : Passing from a parent component further to a child component

function Product({ name, description, price }) {
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}
export default Product;
