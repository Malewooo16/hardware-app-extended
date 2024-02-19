import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnail:string;
  removed:boolean;
}

interface CartState {
  itemsList: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

interface RootState {
  cart: CartState;
  // Add other slices if your store has more slices
}

const initialState: CartState = {
  itemsList: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find((i) => i.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          thumbnail:newItem.thumbnail,
          removed:false
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;

      

    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;

      const existingItem = state.itemsList.find((i) => i.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemsList = state.itemsList.filter((i) => i.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }

        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },

    toggleRemove(state, action: PayloadAction<number>) {
      const id = action.payload;
    
      // Find the index of the item to be removed
      const itemIndex = state.itemsList.findIndex((i) => i.id === id);
    
      if (itemIndex !== -1) {
        // Get a reference to the item
        const item = state.itemsList[itemIndex];
    
        // Check if the item is not already marked as removed
        if (!item.removed) { 
          // Subtract the quantity of the removed item from the total quantity
          state.totalQuantity -= item.quantity;
    
          // Subtract the total price of the removed item from the total price
          state.totalPrice -= item.totalPrice;
    
        }
        item.removed = !item.removed;
      }
    },

    resetCart(state) {
      // Reset the cart to its initial state
      state.itemsList = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    
  }
});

export const { addToCart, removeFromCart, toggleRemove, resetCart } = cart.actions;
export default cart.reducer;
