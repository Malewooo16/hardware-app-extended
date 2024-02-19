import { Search, ShoppingCartCheckout } from "@mui/icons-material";
import { useRef } from "react";

export default function SearchInput() {
    
  return (
    <div className="searchMain">
        <div className="search-input">
    <input
      type="text"
      aria-hidden="true"
    />
    <button><Search /></button>
  </div>
    </div>
  )
}
