import React, { useEffect, useRef, useState } from 'react'; 
import { User } from './User';

export const Counter = () => {
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Hello, World!')
    const [user, setUser] = useState([])
    const resp = useRef(null)
    const respBody = useRef(null)

    const API_URL = 'https://jsonplaceholder.typicode.com'

    useEffect(() => {
        fetch(`${API_URL}/users`)
            .then((res) => res.json())
            .then((arr) => {
                setUser(arr)
            })
            window.scrollTo(0, 0)
    }, [])

    function PlusCounter() {
        setLikes(likes + 1)
    }
    function MinuseCounter() {
        setLikes(likes - 1)
    }

    const handlerClick = () => {
        resp.current.classList = 'toggle'
        respBody.current.classList = 'respBody'
    }

    return (
        <div ref={respBody}>
            <button onClick={PlusCounter}>+</button>
            <h1>{likes}</h1>
            <button onClick={MinuseCounter}>-</button>

            <div className="text">
                <h1>{value}</h1>
                <input value={value} onChange={(event) => 
                    {setValue(event.target.value)}} type="text" />
            </div>

            <h2 ref={resp}>{value}</h2>
            <button onClick={handlerClick}>Click Me!</button>

            <div className="users">
                {user.map((user) => (
                    <User {...user} key={user.id}/>
                ))}
            </div>
        </div>
    )
}