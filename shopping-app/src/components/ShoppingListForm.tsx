import React, {useRef} from 'react';

interface ShoppingListFormProps {
    onAddItem: (item: string, qty: number) => void;
}

function ShoppingListForm ({onAddItem}: ShoppingListFormProps) {
    const productInputRef = useRef<HTMLInputElement>(null);
    const qtyInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        console.log("Submitted!!!");
        const newProduct = productInputRef.current!.value;
        const qty = parseInt(qtyInputRef.current!.value);

        productInputRef.current!.value = "";
        qtyInputRef.current!.value = "1";

        onAddItem(newProduct, qty);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product Name" ref={productInputRef}/>
            <input type="number" min={0} ref={qtyInputRef}/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ShoppingListForm