try {
    const stripe = require('stripe')('sk_test_51HqnloEHDBTTzNBJbjx7cTDnEIkZH9IGd2UTpEAfvccVElLIADGrLIbErnlqHRx66NybledznxpxGRG7I8yJ5gZa0012D7ccfO');
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1477, // $14.77, an easily identifiable amount
      currency: 'usd',
    });
    console.log('Worked! ', paymentIntent.id);
  } catch(err) {
    console.log('Error! ', err.message);
  }