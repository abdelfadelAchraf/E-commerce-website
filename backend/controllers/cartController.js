import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const addToCart = async (req, res) => {
    try {
        // Extract the token from the request headers
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        // Decode the token to get the userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded._id;  // Assuming _id is stored in the token

        // Extract itemId and size from the request body
        const { itemId, size } = req.body;

        // Fetch the user data from the database
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};  // Ensure cartData is defined

        // Add the item to the cart
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        // Update the user's cartData in the database
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};



const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await userModel.findById(userId);

        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Item updated in cart successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}



const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);

        let cartData = await userData.cartData;

        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


export { addToCart, updateCart, getUserCart };