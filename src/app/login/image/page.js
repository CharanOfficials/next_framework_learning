"use client";
import React from "react";
import Script from "next/script";
import Image from "next/image";
export default function Pap() {
  return (
    <div>
      <Script src="/localtion.js" onLoad={console.log("Loaded")} />
      <Image
        src="https://images.pexels.com/photos/18340828/pexels-photo-18340828/free-photo-of-man-in-traditional-north-american-indigenous-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={500}
        height={500}
        alt=""
      />
    </div>
  );
}

// export const generateMetadata = () => {
//   return {
//     title: "Image",
//   };
// };
