import React, { useEffect, useState } from 'react';
import rgbToHex from './Utils';

const SingleColor = ({ index, rgb, weight, hexcolor }) => {
    const [copy, setCopy] = useState(false)
    const bgc = rgb.join(",")
    const hexValue = `#${hexcolor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopy(false)
        }, 2000);
        return () => clearTimeout(timeout)
    }, [copy])

    return (
        <article
            className={`color ${index > 8 ? "color-light" : null}`}
            style={{ background: `rgb(${bgc})` }
            }
            onClick={() => {
                setCopy(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="hexValue">{hexValue}</p>
            {copy && <p className="copyState">copied to clipboard</p>}
        </article >
    )
}

export default SingleColor;