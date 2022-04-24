import React, { useState } from 'react';
import values from 'values.js';
import SingleColor from './SingleColor';

const EventList = () => {

    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new values("#292929").all(10));

    const SubmitHandler = (e) => {
        e.preventDefault()
        try {
            let colors = new values(color).all(10)
            setList(colors)
        }
        catch (error) {
            setError(error)
            console.log(error)
        }
    }

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={SubmitHandler}>
                    <input
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        className={`${error ? 'error' : null}`}
                        placeholder="Enter colorname or hex value"
                        type="text"
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section className="colors_section">
                {
                    list.map((color, index) => < SingleColor
                        key={index}
                        index={index}
                        {...color}
                        hexcolor={color.hex}
                    />)
                }
            </section>
        </>
    )
}

export default EventList;
