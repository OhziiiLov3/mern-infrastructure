import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to={"/orders"}>Order History</Link>
        &nbsp; | &nbsp;
        <Link to={"/orders/new"}>New Order</Link>
      </nav>
    </div>
  );
}

export default NavBar