import { createContext, useContext, useReducer } from "react"

const AppContext = createContext({})
// Costumer Context Olşturuldu.
export const useAppContext = () => useContext(AppContext)
const initialState = {
    style: {
        background:"",
        color:"",
        headerbg:""
    },
    title: ""
  }
const reducer=(state=initialState,action)=>{
const { type} = action
switch (type) {
    case "dark":
        return {title:"Dark Mode", style: {background:"bg-dark" ,color:"text-light",headerbg:"bg-primary"}}
    case "light":
        return {title:"Light Mode", style: {background:"bg-light" ,color:"text-dark",headerbg:"bg-warning"}}

    default:
        break;
}
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
  
    return (
      <AppContext.Provider value={{
        state,
        dispatch
      }}>
        {props.children}
      </AppContext.Provider>
    )}