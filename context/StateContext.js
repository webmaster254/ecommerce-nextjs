import React ,{createContext,useContext,useState,useEffect } from "react";
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children})=>{
    const [showCart,setSHowCart] = useState(false);
    const [cartItems,setCartItems]= useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalQuantities,setTOtalQuantities]=useState(0);
    const [qty,setQty]=useState(1);


    const incQty=()=>{
        setQty((prevQty)=> prevQty+1);

    }
    const decQty=()=>{
        setQty((prevQty)=>{
            if (prevQty-1<1) return 1;
        return prevQty-1
    });
    }
    return (
        <Context.Provider
        value={
            {
                showCart,
                incQty,
                decQty,
                qty
            }
        }>
           {children}

            </Context.Provider>
    )
}

export const useStateContext =()=> useContext(Context);