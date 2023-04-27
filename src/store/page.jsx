import { atom } from "jotai";
// const addCart = (carts,id) => [
//     ...carts,
//     {
//       id
     
//     },
//   ];
const addCart=(carts,id)=>{
  console.log("cart",carts,id);
}
  
  const updateCart = (carts, id) =>
    carts.map((cart) => ({
      ...cart,
      text: cart.id === id ? cart : cart.text,
    }));
  
  
  const removeCart = (carts, id) =>
    carts.filter((cart) => cart.id !== id);

export const cartAtom = atom([]);
export const cartDetailsAtom=atom([])
export const cartPriceAtom=atom(0);
export const newcartAtom = atom("");
  console.log("cart",cartAtom);
  export const updatecartAtom = atom(
    () => "",
    (get, set, { id, text }) => {
      set(cartAtom, updateCart(get(cartAtom), id, text));
    }
  );
  
  export const removecartAtom = atom(
    () => "",
    (get, set, id) => {
      set(cartAtom, removeCart(get(cartAtom), id));
    }
  );
  export const addCartAtom=atom(
    ()=>"",
    (get,set,action)=>{

    }
  )
  // export const addCartAtom = atom(
  //   () => "",
  //   (get, set) => {
  //     console.log("new",newcartAtom);
  //     set(cartAtom, addCart(get(cartAtom), get(newcartAtom)));
  //     set(newcartAtom, "");
  //   }
  // );