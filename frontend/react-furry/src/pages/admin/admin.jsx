import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import React from 'react'

export const Admin = () => {
    const navigate = useNavigate();
  return (
    <div className='admin'>
        <Button text={"Add Product"} onClickAdd={() => navigate('/addProducts')}/>
        <Button text={"Remove Product"} onClickAdd={() => navigate('/removeProducts')}/>
        <Button text={"Update Product"} onClickAdd={() => navigate('/updateProducts')}/>

    </div>
  )
}
