import React , { Component } from "react";

// props using function based components
// const ItemDescription = ({name, description}) => {
//   return (
//     <div>
//     <p>{name}</p>
//     <p>
//     <i>{description}</i>
//     </p>
//     </div>
//   )
// }

// export default ItemDescription

// props using class based components although this is outdated

// export default class ItemDescription extends Component {
//   render() {
//     return (
//     <div>
//       <p>{this.props.name}</p>
//       <p>
//         <i>{this.props.description}</i>
//       </p>
//     </div>
//     );
//   }
// }

//Another way of cleaning up your code

export default class ItemDescription extends Component {
    render() {
        // going inside of this.props and pulling up name and description
        const {name, description} = this.props;
      return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
      );
    }
  }