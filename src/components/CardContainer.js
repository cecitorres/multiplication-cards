import React from 'react'

const CardContainer = ({ a, b, answers, selectAnswer }) => {
    return (
        <div className="card-container">
            <div className="row">
                <span id="a">{a}</span>
            </div>
            <div className="row">
                <span id="x">x</span>
                <span id="b">{b}</span>
            </div>

            <div className="row">
                <div id="divider"></div>
            </div>
            
            <div className="row">
                <div className="card-container__answers">
                    {answers.map((option, idx) => <div className="square" key={idx} onClick={() => selectAnswer(option)}>{option}</div>)}
                </div>
            </div>
            {/* <div className="row">
                <div className="square">0</div>
                <div className="square">0</div>
                <div className="square">0</div>
            </div> */}
        </div >
    )
}

export default CardContainer
