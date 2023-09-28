import Colour from "./Colour"
import { useState, useEffect } from "react"

export default function Colours() {
    const [backgroundColor, setBackgroundColor] = useState('white');


    const bodyColor = (newColor) => {
        setBackgroundColor(newColor);
    };

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor
    }, [backgroundColor, setBackgroundColor])

    return (
        <div className="flex bg-gray-100 p-4 rounded-lg flex-wrap shadow-lg">
            <Colour bodyColor={bodyColor} color="#FF6B6B" textColor="white" /> {/* Lighter red */}
            <Colour bodyColor={bodyColor} color="#67D880" textColor="white" /> {/* Lighter green */}
            <Colour bodyColor={bodyColor} color="#6A7DFF" textColor="white" /> {/* Lighter blue */}
            <Colour bodyColor={bodyColor} color="#D9DBA3" textColor="black" /> {/* Lighter olive */}
            <Colour bodyColor={bodyColor} color="#FFE882" textColor="black" /> {/* Lighter yellow */}
            <Colour bodyColor={bodyColor} color="#FFA0A0" textColor="black" /> {/* Lighter pink */}
            <Colour bodyColor={bodyColor} color="#B280FF" textColor="white" /> {/* Lighter purple */}
            <Colour bodyColor={bodyColor} color="#BFA6E0" textColor="black" /> {/* Lighter lavender */}
            <Colour bodyColor={bodyColor} color="#F4F4F4" textColor="black" /> {/* Lighter white */}
            <Colour bodyColor={bodyColor} color="#333333" textColor="white" /> {/* Darker black */}
        </div>
    )
}


