import React from 'react'

const CardContainer = ({ a, b, answers, selectAnswer }) => {
    return (
        <div className="w-full px-3">
            {/* <div className="row">
                <span id="a">{a}</span>
            </div>
            <div className="row">
                <span id="x">x</span>
                <span id="b">{b}</span>
            </div>

            <div className="row">
                <div id="divider"></div>
            </div> */}
            <div>
                <p class="text-6xl text-center">{a} X {b} = ?</p>
            </div>
            
            <div class="relative">
                <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">
                    {answers.map((option, idx) =>
                        <div className="hover border-solid border-4 border-gray-600 bg-orange-300 justify-center content-center cursor-pointer" key={idx} onClick={() => selectAnswer(option)}>
                            <h1 className="text-5xl">
                                {option}
                            </h1>
                        </div>)}
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
