import React from 'react'

function FAQScreen() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='faq' >
                <div className='container' >

                    <div class="wrapper bg-white rounded shadow" >
                        <br></br>

                        <div class="h2 text-center fw-bold">Frequently Asked Questions</div>

                        <div class="d-flex justify-content-center"  >

                        </div>
                        <br></br>
                        <div class="accordion accordion-flush border-top border-start border-end" id="myAccordion">
                            <div class="accordion-item"> <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Example</button> </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse border-0" style={{ background: 'white', fontSize: '15px' }} aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion"> <div class="accordion-body p-0">
                                    <p className='p-3'>Example</p>

                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Example</button>
                                </h2>
                                <div id="flush-collapseTwo" style={{ background: 'white', fontSize: '15px' }} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                    <div class="accordion-body p-3">
                                        <p>Example</p>
                                        <p>Example</p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item"> <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> Example </button> </h2>
                                <div id="flush-collapseThree" style={{ background: 'white', fontSize: '15px' }} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                    <div class="accordion-body p-0">
                                        <p className='p-3'>
                                            Example


                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item"> <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"> Example</button> </h2>
                                <div id="flush-collapseFour" style={{ background: 'white', fontSize: '15px' }} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion"> <div class="accordion-body p-0"> <ul class="list-unstyled m-0">
                                    <p className='p-3'>
                                        Example


                                    </p>
                                </ul>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Example </button>
                                </h2>
                                <div id="flush-collapseFive" style={{ background: 'white', fontSize: '15px' }} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                    <div class="accordion-body p-0">
                                        <p className='p-3'>Example</p>

                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed border-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">Example </button>
                                </h2>
                                <div id="flush-collapseSix" style={{ background: 'white', fontSize: '15px' }} class="accordion-collapse collapse border-0" aria-labelledby="flush-headingOne" data-bs-parent="#myAccordion">
                                    <div class="accordion-body p-0">
                                        <p className='p-3'>

                                            Example
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQScreen