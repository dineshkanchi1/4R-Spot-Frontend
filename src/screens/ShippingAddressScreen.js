import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

/**
* @author
* @function ShippingAddressScreen
**/

const ShippingAddressScreen = (props) => {
  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [landmark,setLandmark] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [postalcode,setPostalCode] = useState("");

  // const paymentMethod = useSelector(state => state.paymentMethod);

  // const dispatch = useDispatch();
  const submitHandler = (e) => {
      // e.preventDefault();
      // dispatch(paymentMethod());
  }

  
  return(
    <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                {/* {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>} */}
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter Name" 
                        required
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter email" 
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone No.</label>
                    <input 
                        type="text" 
                        id="phone" 
                        placeholder="Enter mobile no." 
                        required
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="Enter address" 
                        required
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        id="city" 
                        placeholder="Enter city" 
                        required
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="landmark">Landmark</label>
                    <input 
                        type="text" 
                        id="landmark" 
                        placeholder="Enter Landmark" 
                        required
                        onChange={e => setLandmark(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="postal-code">Postal Code</label>
                    <input 
                        type="text" 
                        id="postal-code" 
                        placeholder="Enter Postal code" 
                        required
                        onChange={e => setPostalCode(e.target.value)}
                    />
                </div>
                <label />
                <button className="primary button block" type="submit">Place Order</button>
            </form>
    </div>
   )

 }

export default ShippingAddressScreen