import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css';
import { useStateValue } from "./StateProvider";
import Order from './Order';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersCollection = collection(db, 'users', user?.uid, 'orders');
      const ordersQuery = query(ordersCollection, orderBy('created', 'desc'));

      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        setOrders(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        })));
      });

      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>
      <div className='orders__order'>
        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
