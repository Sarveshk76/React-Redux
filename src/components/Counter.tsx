import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../feature/counterSlice';
import { addItem, removeItem } from '../feature/foodItems';

// Define the types for your state
interface CounterState {
  value: number;
}

interface FoodItem {
  name: string;
  qty: number;
}

interface RootState {
  counter: CounterState;
  foodItems: FoodItem[];
}

export function Counter() {
  // Use useSelector to access the counter and food items from the state
  const count = useSelector((state: RootState) => state.counter.value);
  const items = useSelector((state: RootState) => state.foodItems); // Ensure this matches your state shape

  console.log(items)

  const dispatch = useDispatch();

  // Handle adding an item
  const handleAddItem = (name: string) => {
    dispatch(addItem({ name }));
  };

  // Handle removing an item
  const handleRemoveItem = (name: string) => {
    dispatch(removeItem({ name }));
  };

  return (
    <div>
      <fieldset className='border m-5'>
        <legend className='text-center'>Basic Counter</legend>
        <div  className='d-flex justify-content-center align-items-center'>
        <button
          aria-label="Increment value"
          className='btn btn-outline-success'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='p-5 fs-5 fw-semibold text-secondary'>{count}</span>
        <button
          aria-label="Decrement value"
          className='btn btn-outline-danger'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      </fieldset>

      <fieldset className='border m-5'>
        <legend className='text-center'>Multi-State Counter</legend>
        <div className='d-flex justify-content-center'>
        <div className="row">
          
          <div className="col">
              {items && items.length > 0 ? (
                items.map((item) => (
                      <div className='card p-3 my-2 text-center' style={{"width":"350px"}} key={item.name}>
                        <div className="row">
                          <div className="col-3">
                          <span className=''>{item.name}: </span>
                          </div>
                        
                        <div className="col">
                        <button className='btn btn-sm btn-outline-success mx-2' onClick={() => handleAddItem(item.name)}>Add</button>
                        <span className='mx-2'>{item.qty}</span>
                        <button className='btn btn-sm btn-outline-danger mx-2' onClick={() => handleRemoveItem(item.name)}>Remove</button>
                        </div>
                        
                        </div>
                      </div>
                        
                  
                ))
              ) : (
                <p>No items available</p>
              )}
              </div>
        </div>
      </div>
      </fieldset>
      
      
    </div>
  );
}
