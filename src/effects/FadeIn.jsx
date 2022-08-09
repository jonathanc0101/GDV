import React, { useEffect, useState } from 'react'

function FadeIn({children}) {
    const [className, setClassName] = useState("");

    useEffect(() => {
        setClassName("load");
    }, [className]);

    return (
        <div className={"fade-in-fast " + className}>
            {children}
        </div>
    )
}

export default FadeIn