import {checkToken} from '../../utilities/users-service';

const OrderHistoryPage = () => {

    const handleCheckToken = async ()=>{
       const expDate = await checkToken();
       console.log(expDate);
    }


  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when my content expires</button>
    </div>
  );
}

export default OrderHistoryPage;