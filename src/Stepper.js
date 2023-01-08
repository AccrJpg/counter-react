import React from 'react';
import './Stepper.css';

function Stepper(props) {
    return (
        <div className='stepper'>
            <span>Krok:</span>
            <form action="/action_page.php">
                <label htmlFor='quantity'></label>
                <input type="number" id="quantity" name="quantity" min="0" className='krocznik' onClick={(step) => props.stepMethod(step) }>
                     </input>
            </form>

        </div>

    );
};





export default Stepper;