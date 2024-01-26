import React, { useState, useId } from 'react';
import iconPlus from "./assets/images/icon-plus.svg"
import iconMinus from "./assets/images/icon-minus.svg"

function FaqItem({ question, answer }) {

    const id = useId()
    const [isAnswerVisible, setAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className="faq-item" >
            <div className='question-container'>
                <span className='faq-question'>{question}</span>
                <div className='show-icon'>
                    {isAnswerVisible ? <img id={id} src={iconMinus} alt='minus icon' onClick={toggleAnswerVisibility} ></img> : <img id={id} src={iconPlus} alt='plus icon' onClick={toggleAnswerVisibility}></img>}
                </div>
            </div>
            {isAnswerVisible ? <p className='faq-answer'>{answer}</p> : null}
        </div>
    );
}

export default FaqItem;