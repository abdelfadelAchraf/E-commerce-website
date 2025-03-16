//Placing orders using COD Method 
import orderModel from '../models/orderModel.js';

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
       // console.log(userId , items , amount , address)
        
        const orderData = {
            userId,
            items,
            amount,
            paymentMethod: "COD",
            payment: false,
             address ,
            //  status : 'placed'  ,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartDate:{}});

        res.json({success:true ,  message: "Order Placed Successfully" });
    } catch (error) {
         console.log(error);
         res.json({success:false , message:error.message});
    }
}

//Placinf order using Stripe method e
const placeOrderStripe = async (req, res) => {

}

//Placing order using Razorpay method 
const placeOrderRazorpay = async (req, res) => {

}


//Display all the orders to the admin

const allOrders = async (req, res) => {

}

//User order data for frontend
const userOrders = async (req, res) => {

}

//Update order status
const updateStatus = async (req, res) => {

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };