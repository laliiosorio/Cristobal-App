import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    // const [gifs, setGifs] = useState([])
    const [user, setUser] = useState(undefined)


    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export default Context