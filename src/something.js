import React from 'react';
import { Fragment, useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

// By destructuring the arguments, it is easier to understand what this component actually gets as props
const MealItem = (props) => {
  // Destructuring the props:
  // const MealItem = ({ price, name, image, id }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; // Nitpick but you could use a helper function fot this like: formatPrice(props.price)

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
