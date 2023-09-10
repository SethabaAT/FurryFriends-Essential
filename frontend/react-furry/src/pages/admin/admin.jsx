import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import React from 'react'

export const Admin = () => {
    const navigate = useNavigate();
  return (
    <div className='admin'>
        {/* <Button text={"Add Product"} onClickAdd={() => navigate('/addProducts')}/>
        <Button text={"Remove Product"} onClickAdd={() => navigate('/removeProducts')}/>
        <Button text={"Update Product"} onClickAdd={() => navigate('/updateProducts')}/> */}
      <h4>Admin tasks</h4>
        <ul className='admin-tasks'>
          <li><Link to={'/addProducts'}>Add Product(s)</Link></li>
          <li><Link to={'/removeProducts'}>Remove Product(s)</Link></li>
          <li><Link to={'/updateProducts'}>Update Product(s)</Link></li>
        </ul>

    </div>
  )
}
