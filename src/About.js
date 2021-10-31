import React, { useState } from 'react'

export default function About() {
    const [darkMode, setDarkMode] = useState({
        color: "white",
        backgroundColor: "black"
    })
      let  toggleButton = () => {
            if (darkMode.color === "white") {
                setDarkMode({
                    color: "black",
                    backgroundColor: "white"
                })
            } else {
                setDarkMode({
                    color: "white",
                    backgroundColor: "black"
                })
            }
        }

    return (
        <div className="container" style={darkMode}>
            <h1>footer here</h1>
            <div className="accordion" id="accordionExample" style={darkMode}>
                <div className="accordion-item" style={darkMode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={darkMode} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" style={darkMode} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkMode}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={darkMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={darkMode}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={darkMode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" style={darkMode} className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <button type="button" onClick={toggleButton} className="btn btn-primary my-4 mx-4 " >Enable Dark Mode</button>
            </div>
        </div>

    )
}
