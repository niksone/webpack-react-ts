import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0)
    const coundAddNumber = 10

    return (
        <>
            <div>React Test</div>
            <div>
                Count: {count}
            </div>
            <button onClick={() => setCount(prev => prev + coundAddNumber)}>+{coundAddNumber}</button>

        </>
    )
}

export default App
