import React , { createContext , useState }  from 'react';

export const context= createContext({
    showLoading:false,
    setShowLoading:()=>{},
})


const ContextProvider = ({children}) => {
  const [showLoading, setShowLoading] = useState(false);

    return ( 
        <context.Provider value={{showLoading,setShowLoading}}>
            {children}
        </context.Provider>
     );
}
 
export default ContextProvider;