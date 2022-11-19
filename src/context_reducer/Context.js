import React, { createContext,useContext, useState } from 'react';

const mycontext = createContext()

const Context = ({children}) =>{

    const [data, setData] = useState({})

    return(
        <mycontext.Provider value={{data, setData}}>
            {children}
        </mycontext.Provider>
    );
};

export default Context;

export const useData = () => useContext(mycontext)