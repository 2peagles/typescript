import { createContext, useContext, useState, ReactNode } from "react";
import { ShoppingCart } from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
    children: ReactNode
} 

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void   
    openCart:() => void 
    closeCart: ()=> void 
    cartQuantity: number
    cartItems:CartItem[ ]
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children } : ShoppingCartProviderProps){
const [ cartItems, setCartItems ] = useLocalStorage<CartItem[ ]>('shopping-cart',[ ]);
const [isOpen, setIsOpen]=useState(false);

const openCart =( )=> setIsOpen(true)
const closeCart =()=>setIsOpen(false)
function getItemQuantity (id:number){
    return(
        cartItems.find(product => product.id === id)?.quantity || 0 
    )
}
function increaseCartQuantity (id:number){
    setCartItems(currItems =>{
        if(currItems.find(product => product.id === id) == null){
            return [...currItems,{id, quantity: 1}]
        } else {
            return currItems.map(product => {
                if (product.id === id){
                    return { ...product, quantity:product.quantity + 1}
                } else {
                    return product
                }
            })
        }
    })
}
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(product => product.id === id)?.quantity === 1) {
                return currItems.filter(product => product.id !== id)
            } else {
                return currItems.map(product => {
                    if (product.id === id) {
                        return { ...product, quantity: product.quantity - 1 }
                    } else {
                        return product
                    }
                })
            }
        })
    }
    function removeFromCart(id:number){
        setCartItems(currItems => {
            return currItems.filter(product => product.id !==id)
        })
    }
const cartQuantity = cartItems.reduce((quantity, product) => product.quantity + quantity, 0)
    return (
    <ShoppingCartContext.Provider 
        value={ { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
        { children }
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
    )
}