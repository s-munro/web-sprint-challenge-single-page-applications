import React from 'react';
import { useHistory } from 'react-router-dom'


export default function Home() {
const history = useHistory();
const routeToForm = () => {
  console.log(history);
history.push('/pizza');
}




  return (
    <div className='home-wrapper'>
       <section className='section'>
    <h3>Food Delivery in Gotham City</h3>
    <button id='pizzaBtn' onClick={routeToForm}>Pizza?</button>
    <div className='top-3'>
    <div className='store-container'>

      <h4>McDonalds</h4>
      <h5>$ - American - Fast Food - Burgers</h5>
      <div>20-30 Min</div>
      <div>$5.99 Delivery Fee</div>
    </div>
    <div className='store-container'>
      <h4>Sweetgreen</h4>
      <h5>$ - Healthy - Salads</h5>
      <div>30-45 Min</div>
      <div>$4.99 Delivery Fee</div>
    </div>
    <div className='store-container'>
      <h4>Starbucks</h4>
      <h5>$ - Cafe - Coffee & Tea - Breakfast & Brunch</h5>
      <div>10-20 Min</div>
      <div>$3.99 Delivery Fee</div>
    </div>
    </div>

    <div className='bottom-3'>
    <div className='store-container'>
    </div>
    <div className='store-container'>
    </div>
    <div className='store-container'>
    </div>
    </div>


 </section>
    </div>
  )
}