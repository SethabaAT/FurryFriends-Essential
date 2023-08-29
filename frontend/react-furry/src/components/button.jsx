import React from 'react'

export const Button = ({classN,text,color, type,onClickE}) => {
  return (
    <button className={classN} color={color} type={type} onClick={onClickE}>
        {text}
    </button>
  )
}


// include propTypes here