import React from 'react'

export const Button = ({classN,text,color, type,onClickAdd}) => {
  return (
    <button className={classN} color={color} type={type} onClick={onClickAdd}>
        {text}
    </button>
  )
}


// include propTypes here