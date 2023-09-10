import React from 'react'

export const Button = ({classN,text, type,onClickAdd,itemAmount}) => {
  return (
    <button className={classN}  type={type} onClick={onClickAdd}>
        {text}{itemAmount}
    </button>
  )
}


// include propTypes here