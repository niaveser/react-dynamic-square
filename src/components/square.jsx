import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

const Square = () => {

    const style = {
        backgroundColor: 'black', 
        height:'255px', 
        width:'255px'
    }

    const [newStyle, setColor] = useState(style);

    function randomColor () {
        let green = Math.floor(Math.random() * 256)
        let blue  = Math.floor(Math.random() * 256)
        let red = Math.floor(Math.random() * 256)

        return `rgb(${red},${green},${blue})`
    }
    let intervalID = useRef()
    function changeColor() {
        const tempStyle = {...style}
        tempStyle.backgroundColor = randomColor()
        setColor(tempStyle)
        
    }
    
     function getColors(){
         intervalID.current = setInterval(changeColor, 1000)
        
     }

    function stopColors(){
        clearInterval(intervalID.current)
    }

    function square() {
        return (<div style={newStyle} 
               onMouseOver={getColors}
               onMouseLeave={stopColors}
               onDoubleClick={stopColors}
                
         ></div>)
    }
    
    return (
        <div>
        {square()}
        </div>
    );
};


Square.propTypes = {

};


export default Square;
