import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/button'
import {React, useContext} from 'react'
import { ShopContext } from '../../context/shop-context'


export const Admin = () => {
    
  const { userType, token } = useContext(ShopContext);
  return (
    <>
      {token === null && userType !== 1 ? (
        <div className="unAuth">
          <h4> UnAuthorised Access, Please Sign In. </h4>
        </div>
      ) : (
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

    </div> )} </>
  )
}
