"use client";
import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function MyCart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart.length);
    console.log(cartItems)
  }, []);

  const handleCart = (e: any) => {
    e.preventDefault();
    router.push('/myCart');
  }

  return (
    <Button onClick={handleCart} className="border-none"> 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
      </svg>
      {cartItems > 0 && <span>{cartItems}</span>}
    </Button>
  );
}