import React, { useState } from 'react';
import Card from 'Card';

const Sample = () => {
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults);
    const [ items, setItems ] = useState([]);

    function handleClick() {
        setItems([...items, <Sample/>]);
        setShowResults(true);
    }

    return (
        
            <>
                <div>
                <div className='" d-flex justify-content-center' ><Card onClick={onClick} handleClick={handleClick} /></div>
                </div>
                {showResults ?
                <>
                <ul>
                {items.map((child,index) => (
                <li>{child}</li>))}
                </ul></> : null}
               
                
                

            </>


    )
}
export default Sample
