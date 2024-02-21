import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./frontend.css";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Chatgpt from "./Chatgpt";
import Frontend2 from "./Frontend2";
import axios from "axios";

const Frontend = () => {
    function resetAll() {
        seti1(false); seti2(false); seti3(false); seti4(false); seti5(false); seti6(false);
        seth2(false); seth5(false); seth6(false);
        setc1(false); setc2(false); setc3(false);
        setf1(false); setf2(false); setj1(false); setj2(false); setj3(false);
        setv1(false); setp1(false);
        setf3(false); setw1(false); setws1(false); setws2(false); setf5(false);
    }
    const [i1, seti1] = useState(false)
    function internet1() {
        resetAll();
        seti1(true);
    }
    const [i2, seti2] = useState(false)
    function internet2() {
        resetAll()
        seti2(true);
    }

    const [i3, seti3] = useState(false)
    function internet3() {
        resetAll();
        seti3(true);
    }

    const [i4, seti4] = useState(false)
    function internet4() {
        resetAll();
        seti4(true);
    }

    const [i5, seti5] = useState(false)
    function internet5() {
        resetAll();
        seti5(true);
    }

    const [i6, seti6] = useState(false)
    function internet6() {
        resetAll();
        seti6(true);
    }

    //HTML


    const [h2, seth2] = useState(false)
    function html2() {
        resetAll();
        seth2(true);
    }


    const [h5, seth5] = useState(false)
    function html5() {
        resetAll();
        seth5(true);
    }

    const [h6, seth6] = useState(false)
    function html6() {
        resetAll();
        seth6(true);
    }


    //css
    const [c1, setc1] = useState(false)
    function css1() {
        resetAll();
        setc1(true);
    }

    const [c2, setc2] = useState(false)
    function css2() {
        resetAll();
        setc2(true);
    }

    const [c3, setc3] = useState(false)
    function css3() {
        resetAll();
        setc3(true);
    }

    //framewoks

    const [f1, setf1] = useState(false)
    function framework() {
        resetAll();
        setf1(true);
    }

    const [f2, setf2] = useState(false)
    function framework2() {
        resetAll();
        setf2(true);
    }
    const [f3, setf3] = useState(false)
    function framework3() {
        resetAll();
        setf3(true);
    }


    const [f5, setf5] = useState(false)
    function framework5() {
        resetAll();
        setf5(true);
    }

    const [j1, setj1] = useState(false)
    function javascript1() {
        resetAll();
        setj1(true);
    }


    const [j2, setj2] = useState(false)
    function javascript2() {
        resetAll();
        setj2(true);
    }


    const [j3, setj3] = useState(false)
    function javascript3() {
        resetAll();
        setj3(true);
    }

    const [v1, setv1] = useState(false)
    function vcs1() {
        resetAll();
        setv1(true);
    }


    const [p1, setp1] = useState(false)
    function pkg1() {
        resetAll();
        setp1(true);
    }



    const [w1, setw1] = useState(false)
    function wcss1() {
        resetAll();
        setw1(true);
    }

    const [ws1, setws1] = useState(false)
    function wsb1() {
        resetAll();
        setws1(true);
    }
    const [ws2, setws2] = useState(false)
    function wsb2() {
        resetAll();
        setws2(true);
    }
    //access session storage
    const [data, setdata] = useState([]);
    useEffect(() => {
        // Check if user data exists in sessionStorage
        const userData = sessionStorage.getItem('userData');
        if (userData) {
            setdata(JSON.parse(userData));

        }
    }, []);
  
    return (
        <>
            <section>
                <div className="row page3">
                    <div className="col-3 box3">

                        <Accordion
                            defaultActiveKey="0"
                            style={{ backgroundColor: "black", color: "white" }}
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="accheader">Internet</Accordion.Header>
                                <Accordion.Body
                                    style={{ backgroundColor: "black", color: "white" }}
                                >
                                    <a href="#" onClick={internet1}>
                                        How internet works?
                                        
                                    </a>
                                    <br />
                                    <a href="#" onClick={internet2}>
                                        What is HTTPS?
                                    </a>
                                    <br />
                                    <a href="#" onClick={internet3}>
                                        What is Domain Name?
                                    </a>
                                    <br />
                                    <a href="#" onClick={internet4}>
                                        What is Hosting?
                                    </a>
                                    <br />
                                    <a href="#" onClick={internet5}>
                                        DNS and how it works?
                                    </a>
                                    <br />
                                    <a href="#" onClick={internet6}>
                                        Browser and how it works?
                                    </a><br />
                                    <a href="/quiz">QUIZ</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>HTML</Accordion.Header>
                                <Accordion.Body
                                    style={{ backgroundColor: "black", color: "white" }}
                                >


                                    <a href="#" onClick={html2}>
                                        Learn HTML
                                    </a>
                                    <br />


                                    <a href="#" onClick={html5}>
                                        Accessibility
                                    </a>
                                    <br />
                                    <a href="#" onClick={html6}>
                                        Search Engine Optimization
                                    </a>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>CSS</Accordion.Header>
                                <Accordion.Body
                                    style={{ backgroundColor: "black", color: "white" }}
                                >
                                    <a href="#" onClick={css1}>
                                        Learn CSS
                                    </a>
                                    <br />
                                    <a href="#" onClick={css2}>
                                        Responsive Web Design
                                    </a>
                                    <br />
                                    <a href="#" onClick={css3}>
                                        Grid System
                                    </a>
                                    <br />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Javascript</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={javascript1}>Learn the Basics </a><br />
                                    <a href='#' onClick={javascript2}>Learn DOM Manipulation</a><br />
                                    <a href='#' onClick={javascript3} >Fetch API</a><br />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Frameworks</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={framework}>Learn Angular</a><br /><br />
                                    <a href='#' onClick={framework2}> Learn React Part 1</a><br />
                                    <a href='#' onClick={framework3}> Learn React Part 2</a><br />

                                    <a href='#' onClick={framework5}> Bootstrap</a><br />

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Version Control System</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={vcs1}>GitHub </a><br />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Package manager</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={pkg1}>npm</a><br />

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Writing css</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={wcss1}>Tailwind</a><br />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Web security Basics</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='#' onClick={wsb1}>CORS</a><br />
                                    <a href='#' onClick={wsb2}>HTTPS</a><br />

                                </Accordion.Body>
                            </Accordion.Item>

                            {/* exam */}
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>Exam</Accordion.Header>
                                <Accordion.Body style={{ backgroundColor: "black", color: "white" }}>
                                    <a href='/exam'>Exam</a><br />
                                   

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </div>

                    {/* main Screen */}

                    <div className="col box4">
                        {/* internet */}
                        <Accordion defaultActiveKey={["0"]}>
                            <Accordion.Item eventKey="0" alwaysOpen>
                                <Accordion.Header>
                                    <Button variant="outline-dark" className="buttons"> Watch Lectures</Button>{" "}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        {i1 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/YE-dA5ZXCs0?si=XvqqedJg-MYtjV4h"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {i2 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/CfQ2INQHkHU?si=ME6R8cWiU180w-kf"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {i3 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/miSSi0lEcr8?si=AlRnO_t9Zx-O78AZ"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {i4 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/d_pEqS9Ynxc?si=NegMKglZq9aV7Vqo"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {i5 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/UeeyUePyiJg?si=qnrAodcA8lrDWn0L"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {i6 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/5rLFYtXHo9s?si=0HmRU7tvkxguEfnd"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}

                                        {/* HTML */}


                                        {h2 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/videoseries?si=YammqN7bfPpMHA_I&amp;list=PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}


                                        {h5 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/videoseries?si=21dlW5rLfy6RHRX_&amp;list=PLEtjGa9VEukPldahhPLrzZnGorL7Ct1t5"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {h6 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/videoseries?si=MhAn6tN12yXVyHfc&amp;list=PLjVLYmrlmjGdNxIBIdaDEHtI4gAxaYoq1"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}

                                        {/* css */}

                                        {c1 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/Edsxf_NBFrw?si=tcibqrailys2u5f9"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {c2 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/8KVrdL0VcAk?si=0-rHFU60r2FN5AFS"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}
                                        {c3 && (
                                            <iframe
                                                className="iframe-yt"
                                                src="https://www.youtube.com/embed/BNmxUzPRYdw?si=vXiZuk08UwD3ETAi"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowfullscreen
                                            ></iframe>
                                        )}

                                        {/* Frameworks*/}

                                        {f1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/v--ptg06oGw?si=H5LiUe8qtRX_IQvG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {f2 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/FxgM9k1rg0Q?si=YSQUA2ZItyNWp6dF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {f3 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/IdlF1zsUN3M?si=8Qm6BUeJlymR-Uu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

                                        {f5 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/vpAJ0s5S2t0?si=00gr0L4j2pOuJHFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

                                        {/* Javascipt */}

                                        {j1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/videoseries?si=o3LTlj6YG5cXiGKy&amp;list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {j2 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/videoseries?si=2TWQaZsqvPQsaw12&amp;list=PL_euSNU_eLbdWjw8Gc3XbXaZRTpTzAXtO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {j3 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/CyGodpqcid4?si=vlcB54CfwpLBY6lj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

                                        {/* Version Control system */}
                                        {v1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/gwWKnnCMQ5c?si=Mqub86Sb6kzQHl1i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}


                                        {/* Package Managers */}
                                        {p1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/nSFe1-kpfbQ?si=Mr3JldUwU3WiI0a_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

                                        {/* Writting css */}
                                        {w1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/videoseries?si=1aZocMVB6NdTNSrl&amp;list=PLu0W_9lII9ahwFDuExCpPFHAK829Wto2O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {/* Web security Basics */}
                                        {ws1 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/GPI-wOTmn8k?si=WT1p8ozo-F1rwFXF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                                        {ws2 && <iframe className='iframe-yt' src="https://www.youtube.com/embed/CfQ2INQHkHU?si=JAE8Sf0t16cyi3fw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><Button variant="outline-dark" className="buttons">Notes Section</Button>{' '}</Accordion.Header>
                                <Accordion.Body>
                                    <Card className="text-center">
                                        <Card.Header>Notes From W3Schools</Card.Header>
                                        <Card.Body>
                                            <div className="row"></div>
                                            <Card.Title>Internet Working</Card.Title>

                                            <iframe src="https://www.w3schools.in/html" className="notes"></iframe>
                                        </Card.Body>
                                        <Card.Footer className="text-muted"></Card.Footer>
                                    </Card>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><Button variant="outline-dark" className="buttons">Visit Our Bot!</Button>{' '}</Accordion.Header>
                                <Accordion.Body>
                                    <Chatgpt />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><Button variant="outline-dark" className="btns"><Frontend2 /></Button>{' '}</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>






                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Frontend;