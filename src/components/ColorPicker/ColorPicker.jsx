import React, {useEffect, useState} from 'react';
import Select from "../Form/Select.jsx";
import {BiChevronDown} from "react-icons/bi";
import fullName from "../../utils/fullName.js";

export const colors = {
    gray: "#7480a6",
    tomato: "#ff4d4d",
    banana: "#7adc2e",
    orange: "#ffae42",
    blue: "#5aa3ff",
    green: "#55c952",
    pink: "#ff5a94",
    salmon: "#5bd58b",
    //gray: "#959798",
    primary: "#8a6fff",
}


const ColorPicker = ({onChange, createdBy, value, auth, updateEventId}) => {

    const [color, setColor] = useState("gray")

    function handleChangeColor(color){
        setColor(color)
        onChange(color)
    }


    useEffect(()=>{
        if(value){
            setColor(value)
        }
    }, [value])


    return (
        <div className="flex items-center">

            {updateEventId ? (
                <div className="flex  gap-x-1">
                    <h4 className="text-sm text-gray-600 ">
                    Color:
                    </h4>
                </div>
            ) : (
                <div className="flex items-center gap-x-1">
                    <h4 className="mr-2 text-sm text-gray-600 ">
                        Color:
                    </h4>
                </div>
            )}

            <Select
                value={color}
                onChange={handleChangeColor}
                className="mt-0"
                inputBg="py-1 rounded"
                dropdownClass={"color-picker-dropdown"}
                withBg={false}

                render={(onChange) => (
                    <div className="grid justify-between grid-cols-2 gap-2">
                        {Object.keys(colors).map(colorKey=>(
                            <span onClick={()=>onChange(colorKey)}
                                  className="block w-4 h-4 rounded-full"
                                  style={{background: colors[colorKey]}}>
                            </span>
                        ))}
                    </div>
                )}
                renderPlaceholderValue={(val)=>(
                    <div className="flex items-center">
                        <span className="block w-4 h-4 mr-1 rounded-full" style={{background: colors[val]}}>
                        </span>
                        <BiChevronDown />
                    </div>
                )}
            >
            </Select>
        </div>
    );
};


export default ColorPicker;