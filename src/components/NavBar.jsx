import { Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        &nbsp; | &nbsp;
        <Link to={"/orders"}>OrderHistory</Link>
        &nbsp; | &nbsp;
        <Link to={"/orders/new"}>New Order</Link>
      </nav>
    </div>
  );
}

export default NavBar