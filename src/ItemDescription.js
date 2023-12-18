import React from 'react'

const ItemDescription = ({name, description}) => {
  return (
    <div>
    <p>{name}</p>
    <p>
    <i>{description}</i>
    </p>
    </div>
  )
}

export default ItemDescription