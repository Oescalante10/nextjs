import * as React from "react";

const OrderIcon = ({color='black', size=100}) => {
  return (
    <svg viewBox="0 0 371.1 370.2" width={size*1.0026} height={size} fill={color}>
      <path d="M160.6 236.9h3.1c6 0 10.9 4.9 10.9 10.9v52.8c0 6-4.9 10.9-10.9 10.9h-3.1c-6 0-10.9-4.9-10.9-10.9v-52.8c0-6 4.9-10.9 10.9-10.9zM288.6 236.9v12.4c-.1 20.6-19.8 37.2-44.2 37.3h-46.8c-6.7 0-12.1-5.4-12.1-12.1v-25.4c0-6.7 5.4-12.1 12.1-12.1l91-.1zM359.4 201.1c6.9.4 12.1 6.3 11.7 13.2-.4 6.3-5.4 11.3-11.7 11.7H11.7c-6.9-.4-12.1-6.3-11.7-13.2.4-6.3 5.4-11.3 11.7-11.7h347.7zM210.4 24.9h-49.7c0-13.7 11.1-24.9 24.8-24.9 13.7 0 24.9 11.1 24.9 24.8v.1zM334.5 190.1h-298c1-82.3 68.6-148.2 150.9-147.1 80.9 1 146.1 66.3 147.1 147.1zM26 314.6l94.3-65c5.4-3.7 12.7-2.3 16.4 3 1.3 2 2.1 4.3 2.1 6.7v36.6c0 9.7-4.8 18.8-12.8 24.2l-65.5 44.8c-13.9 9.5-32.9 5.9-42.4-8-3.5-5.2-5.4-11.4-5.3-17.6.2-9.9 5.1-19.1 13.2-24.7z" />
    </svg>
  );
}

export default OrderIcon; 

