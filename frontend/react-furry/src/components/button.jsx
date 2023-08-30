import React from 'react'

export const Button = ({classN,text,color, type,onClickAdd,itemAmount}) => {
  return (
    <button className={classN} color={color} type={type} onClick={onClickAdd}>
        {text}{itemAmount}
    </button>
  )
}


// include propTypes here