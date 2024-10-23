// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <Link to={`/home/1`}>
//       <div>
//         <h1>Home</h1>
//       </div>
//     </Link>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Razorpay from "react-razorpay";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 30 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 50 },
  ]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  const sortProducts = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    setSortOrder(selectedOrder);
    sortProducts(selectedOrder);
  };

  const handlePayment = async () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
      amount: 50000, // Amount in paise (50000 paise = ₹500)
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png",
      order_id: "ORDER_ID_FROM_SERVER", // Replace with the order ID generated from your server
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
  };
  return (
    <div className="App">
      <h1>Product List</h1>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Sort by Price: Low to High</option>
        <option value="desc">Sort by Price: High to Low</option>
      </select>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <Link to={`/home/1`}>
        <div>
          <h1>Home</h1>
        </div>
      </Link>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default App;
