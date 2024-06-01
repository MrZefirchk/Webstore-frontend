// // src/pages/CartPage.jsx
// import React from "react";
// import "./CartPage.css";
// import CartItem from "../components/CartItem";
// import PaymentDetails from "../components/PaymentDetails";

// function CartPage() {
//   const cartItems = [
//     {
//       id: 1,
//       name: "Colorful knitted bracelet",
//       size: "One size fits all",
//       material: "Acrylic",
//       condition: "New",
//       price: 10,
//       imageUrl: "https://example.com/image1.jpg",
//     },
//     {
//       id: 2,
//       name: "Knitted bracelet",
//       size: "Adjustable",
//       material: "Cotton blend",
//       condition: "New",
//       price: 30,
//       imageUrl: "https://example.com/image2.jpg",
//     },
//   ];

//   const shippingCost = 1.99;
//   const voucherDiscount = 2.99;

//   return (
//     <div className="cart-page">
//       <div className="cart-items">
//         <h2>Items overview</h2>
//         {cartItems.map((item) => (
//           <CartItem key={item.id} item={item} />
//         ))}
//         <div className="shipping">
//           <input type="radio" checked readOnly />
//           <label>
//             Standard Shipping (10-15 business days) - ${shippingCost.toFixed(2)}
//           </label>
//         </div>
//         <div className="vouchers">
//           <h3>Vouchers & gift cards</h3>
//           <div className="voucher">
//             <input type="text" placeholder="XXXX-8888-4444-" />
//             <button>Apply</button>
//             <span>- ${voucherDiscount.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
//       <PaymentDetails
//         cartItems={cartItems}
//         shippingCost={shippingCost}
//         voucherDiscount={voucherDiscount}
//       />
//     </div>
//   );
// }

// export default CartPage;
