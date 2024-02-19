// types.ts

// Define the structure of your cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnail:string;
  removed:boolean;
  }
  
  // Define the structure of the cart slice
  export interface CartState {
    itemsList: CartItem[];
    totalQuantity: number;
    totalPrice: number;
  }
  
  // Define the root state of your Redux store
  export interface RootState {
    cart: CartState;
    // Add other slices if your store has more slices
  }
  