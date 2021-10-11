import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContextProvider({ children }) {
    // const [gifs, setGifs] = useState([])
    const [user, setUser] = useState(undefined)
    const [userApi, setUserApi] = useState(undefined)



    return <Context.Provider value={{ user, setUser, userApi, setUserApi }}>
        {children}
    </Context.Provider>
}

export default Context