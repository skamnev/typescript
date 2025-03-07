import React, {useState} from 'react';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "./models/item";
import { v4 as getId } from "uuid";

function App() {
  //const items = [
  //    {id: 1, product: "Lemon", quantity: 3},
  //    {id: 1, product: "Chicken Breast", quantity: 2}
  //];

  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <div>
      <ShoppingList items={items}/>
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  );
}

export default App;
