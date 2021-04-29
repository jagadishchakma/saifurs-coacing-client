import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../Shared/Spinner/Loading';

const Checkout = (props) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const {price, name} = props.course;
  const loggedInUser = JSON.parse(sessionStorage.getItem('user'));
  const history = useHistory();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);
    setLoading(true);
    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setLoading(false);
      setPaymentError(error.message);
    } else {
      const newAdmission = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        course: name,
        price,
        status: 'Pending',
      };
      fetch('https://young-forest-78562.herokuapp.com/dashboard/admission', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newAdmission),
      })
      .then(res => res.json())
      .then(data => {
        setPaymentError(null);
        setPaymentSuccess(paymentMethod.id);
        setTimeout(() => {
          setLoading(false);
          history.push('/');
        }, 3000)
      })
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pay-p">
        <div className="form-group">
            <p>{loggedInUser.name}</p>
        </div>
        <div className="form-group">
            <p>{loggedInUser.email}</p>
        </div>
        <div className="form-group">
            <p>{name} Course</p>
        </div>
        <div className="form-group">
            <p>Tk. {price}</p>
        </div>
        <div className="form-group">
            <span>Pay With</span>
            <p>
                <input type="radio" name="pay" value="credit" checked/> <FontAwesomeIcon icon={faCreditCard}/> Credit Card
                <input type="radio" name="pay" value="paypal"/> <FontAwesomeIcon icon={faCcPaypal}/> Paypal Card
            </p>
        </div>
        <div className="form-gorup">
            <div className="card-pay"><CardElement /></div>
        </div>
        <div className="form-group">
            {paymentError && <p className="alert alert-warning">{paymentError}</p> }
            {paymentSuccess && <p className="alert alert-success">Payment Successfull</p> }
            <button className="btn btn-danger pl-5 pr-5 mt-5" type="submit" disabled={!stripe}>
                {loading ? <Loading/> : 'Pay'}
            </button>
        </div>
      
    </form>
  );
};

export default Checkout;