import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './computerscience.css'

const ComputerScience = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  return (
    <>
    <br/><br/>
      <div className="row">
        
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/CUy9KajTTwR7cQsq6_NTzmeH1_vYsudwMalp4n0X0hQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hY3Jv/cG9saXVtLmNvbS9p/bWcvYXJ0aWNsZXMv/bW9zdC1wb3B1bGFy/LWJhY2tlbmQtZnJh/bWV3b3Jrcy9pbWcw/MS5qcGc" height={210}
            />
            <Card.Body>
              <Card.Title className="heading">Back End Development</Card.Title>
              <Card.Text>
                Backend courses cover server logic, APIs, security, scalability,
                frameworks, optimization.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal2(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal3(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal2}
                onHide={() => setShowModal2(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Back end Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZghPaAX2syEWr9lwQ2rRl00HKwlfBSN6k-g53cydTFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hY3Jv/cG9saXVtLmNvbS9p/bWcvYXJ0aWNsZXMv/YmFja2VuZC1hcy1h/LXNlcnZpY2UvaW1n/MDMuanBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal2(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal3}
                onHide={() => setShowModal3(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Backend Development:</strong> Entry-level salaries
                    range from $60,000 to $90,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2)Database Management:</strong> Proficiency in SQL
                    or NoSQL technologies leads to salaries starting at $70,000
                    to $100,000, with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Server-side Scripting:</strong> Salaries mirror
                    backend development, with entry-level positions at $60,000
                    to $90,000 and senior roles reaching $100,000+ annually.{" "}
                    <br />
                    <strong>4)API Development:</strong> Salaries range from
                    $70,000 to $110,000+ for backend developers with expertise
                    in building robust and efficient APIs. <br />
                    <strong>5)Cloud Computing:</strong> Comparable to backend
                    development salaries, with potential for higher earnings
                    based on expertise in cloud platforms and services. <br />
                    <strong>6)Microservices Architecture:</strong> Opportunities
                    align with backend development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7)Security and Authentication:</strong> Similar to
                    backend development salaries, with potential for increased
                    earnings based on skills and experience in ensuring system
                    security.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal3(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=600" height={210}
            />
            <Card.Body>
              <Card.Title className="heading">Front End Development</Card.Title>
              <Card.Text>
                Frontend development focuses on creating interactive web
                interfaces using HTML, CSS, and JavaScript.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3" href="/frontend">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal1(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Front Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/cDtq-7JGxkep-b7T4PKfivhqvr-iUizIj3nL885zNiQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ub2N1YmVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9CZW5lZml0/cy1vZi1Gcm9udC1l/bmQtRGV2ZWxvcG1l/bnQuanBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal1}
                onHide={() => setShowModal1(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Web Development</strong>:Entry-level salaries
                    range from $50,000 to $80,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2)JavaScript Frameworks:</strong>Proficiency in
                    React, Angular, or Vue.js leads to salaries starting at
                    $60,000 to $90,000, with senior roles exceeding $120,000 per
                    year.
                    <br />
                    <strong>3)Mobile Development:</strong>Salaries mirror web
                    development, with entry-level positions at $50,000 to
                    $80,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4)UI/UX Design:</strong>Salaries range from $60,000
                    to $100,000+ for frontend developers with design skills
                    focused on enhancing user experiences. <br />
                    <strong>5)E-commerce Development:</strong> Comparable to web
                    development salaries, with potential for higher earnings
                    based on expertise and project complexity. <br />
                    <strong>6)Progressive Web Apps (PWAs):</strong>{" "}
                    Opportunities align with web development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7)Cross-platform Development:</strong> Similar to
                    web and mobile development salaries, with potential for
                    increased earnings based on skills and experience.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal1(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/OZdArT4jMA7DnrCz46pk6iBDRstD1Nio4QX788U6aKc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG9uZS1tb2Jp/bGUtYXBwbGljYXRp/b24tZGV2ZWxvcG1l/bnQtY29uY2VwdC1t/b2JpbGUtaW50ZXJu/ZXQtM2QtaWxsdXN0/cmF0aW9uXzc2OTY0/LTUxNjQuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
              height={210}
            />
            <Card.Body>
              <Card.Title className="heading">
                Mobile App Development:
              </Card.Title>
              <Card.Text>
                OS, Android, React Native, Flutter, UI/UX, APIs, testing,
                deployment, optimization, cross-platform.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal4(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal5(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal4}
                onHide={() => setShowModal4(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Front Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/-sJEOgfvT4gX-vbiV3AyzP20Cp_jXQ47tvm2kVovO7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzY0YTZmNjdi/NzlhODBmZDlmZjMx/Y2E3YS82NGMyNGNk/NWM4MmIyMjA0YjIy/ZTJlNGZfaGFoYS5w/bmc"
                    className="benimg"
                    height={440}
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal4(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal5}
                onHide={() => setShowModal5(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Native Mobile Development:</strong> Entry-level
                    salaries range from $60,000 to $90,000, while senior
                    developers can earn $100,000+ annually.
                    <br />
                    <strong>2)Cross-platform Development:</strong> Proficiency
                    in React Native, Flutter, or Xamarin leads to salaries
                    starting at $70,000 to $100,000, with senior roles exceeding
                    $120,000 per year.
                    <br />
                    <strong>3)Mobile UI/UX Design:</strong> Salaries mirror
                    mobile development, with entry-level positions at $60,000 to
                    $90,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4)Mobile Backend Development:</strong> Salaries
                    range from $70,000 to $110,000+ for backend developers
                    specializing in mobile apps. <br />
                    <strong>5)Mobile Game Development:</strong> Comparable to
                    mobile development salaries, with potential for higher
                    earnings based on expertise and project complexity. <br />
                    <strong>
                      6)Progressive Web Apps (PWAs) for Mobile:
                    </strong>{" "}
                    Opportunities align with mobile development, with potential
                    for specialized roles and higher compensation. <br />
                    <strong>7)AR/VR Mobile Development:</strong> Similar to
                    mobile development salaries, with potential for increased
                    earnings based on skills and experience in augmented reality
                    and virtual reality technologies.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal5(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/cOm5mn1AJXRWe11QaYTXoRO0M4VqQGBmCZ9MVWAlUtg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NS8wOC8wOC81MC9h/cnRpZmljaWFsLWlu/dGVsbGlnZW5jZS0z/MzgyNTIxXzY0MC5q/cGc"
            />
            <Card.Body>
              <Card.Title className="heading">
                Data Science & Machine Learning Development
              </Card.Title>
              <Card.Text >
                Explore Data Science & Machine Learning: Fundamentals to
                Advanced Techniques.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal6(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal7(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal6}
                onHide={() => setShowModal6(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Data Science & ML:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZMytW8ROr6VQyNWcohVOl9WfQaEOlr4JyheNXyZwcOY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mbGV4/aXNvdXJjZWl0LmNv/bS5hdS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wOS9iZW5l/Zml0cy1vZi1kYXRh/LXNjaWVuY2UtZm9y/LWJ1c2luZXNzLXNj/YWxlZC0xLmpwZw"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal6(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal7}
                onHide={() => setShowModal7(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Data Science & Machine Learning:</strong> Entry
                    roles range from $60,000 to $90,000 annually, while senior
                    positions command $100,000 or more. Proficiency in DS & ML
                    can lead to salaries between $70,000 and $110,000 per year.
                    <br />
                    <strong>2)DS & ML Frameworks:</strong> Proficiency in
                    frameworks such as TensorFlow, PyTorch, or scikit-learn can
                    lead to salaries ranging from $70,000 to $110,000 annually,
                    with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Data-driven Development:</strong> DS & ML roles
                    align with mobile development salaries, with entry-level
                    positions starting at $50,000 to $80,000 and senior roles
                    reaching $100,000 or more annually.
                    <br />
                    <strong>4)UI/UX Design in DS & ML:</strong> Salaries range
                    from $60,000 to $100,000 or more, depending on skill level
                    and experience in enhancing user experiences.
                    <br />
                    <strong>5)E-commerce DS & ML:</strong> Salaries vary based
                    on project complexity and expertise, offering potential for
                    higher earnings.
                    <br />
                    <strong>6)Progressive DS & ML Apps (PDMA):</strong>{" "}
                    Opportunities offer specialized roles and higher
                    compensation in DS & ML development.
                    <br />
                    <strong>7)Cross-platform DS & ML Development:</strong>{" "}
                    Offers increased earnings potential with growing skills and
                    experience.
                    <br />
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal7(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
      
      
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/k1mDdMRRrRiMN7bGaYykh80Xu2pJJXMATq2POhM5_-U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MC8xNC8xMS8zMC9i/bG9ja2NoYWluLTI4/NTAyNzZfNjQwLmpw/Zw" height={210}
            />
            <Card.Body>
              <Card.Title className="heading">Blockchain Development</Card.Title>
              <Card.Text>
               
Decentralized, immutable, distributed ledger, smart contracts, cryptography, consensus mechanism, transparency, security, tokenization, decentralized finance.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal1(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Front Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/cDtq-7JGxkep-b7T4PKfivhqvr-iUizIj3nL885zNiQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ub2N1YmVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNC9CZW5lZml0/cy1vZi1Gcm9udC1l/bmQtRGV2ZWxvcG1l/bnQuanBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal1}
                onHide={() => setShowModal1(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Web Development</strong>:Entry-level salaries
                    range from $50,000 to $80,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2)JavaScript Frameworks:</strong>Proficiency in
                    React, Angular, or Vue.js leads to salaries starting at
                    $60,000 to $90,000, with senior roles exceeding $120,000 per
                    year.
                    <br />
                    <strong>3)Mobile Development:</strong>Salaries mirror web
                    development, with entry-level positions at $50,000 to
                    $80,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4)UI/UX Design:</strong>Salaries range from $60,000
                    to $100,000+ for frontend developers with design skills
                    focused on enhancing user experiences. <br />
                    <strong>5)E-commerce Development:</strong> Comparable to web
                    development salaries, with potential for higher earnings
                    based on expertise and project complexity. <br />
                    <strong>6)Progressive Web Apps (PWAs):</strong>{" "}
                    Opportunities align with web development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7)Cross-platform Development:</strong> Similar to
                    web and mobile development salaries, with potential for
                    increased earnings based on skills and experience.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal1(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/j4Bm1fGiePmeoFHwU7ii4cx5pcY7hNbsKwRbVrlGq0M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MDY1NzYyL3Bob3Rv/L2F1Z21lbnRlZC1y/ZWFsaXR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10UVpf/REYxVUJBTS13b0FG/bkR4SHNqUXdFM0px/bUZoMkw0enlmc3R4/dUNVPQ" height={190}
            />
            <Card.Body>
              <Card.Title className="heading">Augmented Reality (AR) and Virtual Reality (VR) Development</Card.Title>
              <Card.Text>
              Creating applications and experiences that utilize AR or VR technologies for gaming, education, training, and more.

              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal2(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal3(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal2}
                onHide={() => setShowModal2(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Back end Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZghPaAX2syEWr9lwQ2rRl00HKwlfBSN6k-g53cydTFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hY3Jv/cG9saXVtLmNvbS9p/bWcvYXJ0aWNsZXMv/YmFja2VuZC1hcy1h/LXNlcnZpY2UvaW1n/MDMuanBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal2(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal3}
                onHide={() => setShowModal3(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Backend Development:</strong> Entry-level salaries
                    range from $60,000 to $90,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2)Database Management:</strong> Proficiency in SQL
                    or NoSQL technologies leads to salaries starting at $70,000
                    to $100,000, with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Server-side Scripting:</strong> Salaries mirror
                    backend development, with entry-level positions at $60,000
                    to $90,000 and senior roles reaching $100,000+ annually.{" "}
                    <br />
                    <strong>4)API Development:</strong> Salaries range from
                    $70,000 to $110,000+ for backend developers with expertise
                    in building robust and efficient APIs. <br />
                    <strong>5)Cloud Computing:</strong> Comparable to backend
                    development salaries, with potential for higher earnings
                    based on expertise in cloud platforms and services. <br />
                    <strong>6)Microservices Architecture:</strong> Opportunities
                    align with backend development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7)Security and Authentication:</strong> Similar to
                    backend development salaries, with potential for increased
                    earnings based on skills and experience in ensuring system
                    security.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal3(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/w6azIUBSzqYOzWctq__hOzbeQRlZrTkm30wpTudZoTU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzc3/MTU2OC5qcGc"
              height={210}
            />
            <Card.Body>
              <Card.Title className="heading">
                Embedded Systems Development:
              </Card.Title>
              <Card.Text>
               Designing software for embedded systems, which are computing devices embedded into larger systems or products.

              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal4(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal5(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal4}
                onHide={() => setShowModal4(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Front Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/-sJEOgfvT4gX-vbiV3AyzP20Cp_jXQ47tvm2kVovO7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzY0YTZmNjdi/NzlhODBmZDlmZjMx/Y2E3YS82NGMyNGNk/NWM4MmIyMjA0YjIy/ZTJlNGZfaGFoYS5w/bmc"
                    className="benimg"
                    height={440}
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal4(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal5}
                onHide={() => setShowModal5(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Native Mobile Development:</strong> Entry-level
                    salaries range from $60,000 to $90,000, while senior
                    developers can earn $100,000+ annually.
                    <br />
                    <strong>2)Cross-platform Development:</strong> Proficiency
                    in React Native, Flutter, or Xamarin leads to salaries
                    starting at $70,000 to $100,000, with senior roles exceeding
                    $120,000 per year.
                    <br />
                    <strong>3)Mobile UI/UX Design:</strong> Salaries mirror
                    mobile development, with entry-level positions at $60,000 to
                    $90,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4)Mobile Backend Development:</strong> Salaries
                    range from $70,000 to $110,000+ for backend developers
                    specializing in mobile apps. <br />
                    <strong>5)Mobile Game Development:</strong> Comparable to
                    mobile development salaries, with potential for higher
                    earnings based on expertise and project complexity. <br />
                    <strong>
                      6)Progressive Web Apps (PWAs) for Mobile:
                    </strong>{" "}
                    Opportunities align with mobile development, with potential
                    for specialized roles and higher compensation. <br />
                    <strong>7)AR/VR Mobile Development:</strong> Similar to
                    mobile development salaries, with potential for increased
                    earnings based on skills and experience in augmented reality
                    and virtual reality technologies.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal5(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://th.bing.com/th?id=OIP.vN86lZCAdr3RDSXc0cuHcAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" height={210}
            />
            <Card.Body>
              <Card.Title className="heading">
              Cloud Computing Development
              </Card.Title>
              <Card.Text >
             Building applications and services that leverage cloud infrastructure, using platforms like AWS, Azure, or Google Cloud.

              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal6(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal7(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal6}
                onHide={() => setShowModal6(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Data Science & ML:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZMytW8ROr6VQyNWcohVOl9WfQaEOlr4JyheNXyZwcOY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mbGV4/aXNvdXJjZWl0LmNv/bS5hdS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wOS9iZW5l/Zml0cy1vZi1kYXRh/LXNjaWVuY2UtZm9y/LWJ1c2luZXNzLXNj/YWxlZC0xLmpwZw"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal6(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal7}
                onHide={() => setShowModal7(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Data Science & Machine Learning:</strong> Entry
                    roles range from $60,000 to $90,000 annually, while senior
                    positions command $100,000 or more. Proficiency in DS & ML
                    can lead to salaries between $70,000 and $110,000 per year.
                    <br />
                    <strong>2)DS & ML Frameworks:</strong> Proficiency in
                    frameworks such as TensorFlow, PyTorch, or scikit-learn can
                    lead to salaries ranging from $70,000 to $110,000 annually,
                    with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Data-driven Development:</strong> DS & ML roles
                    align with mobile development salaries, with entry-level
                    positions starting at $50,000 to $80,000 and senior roles
                    reaching $100,000 or more annually.
                    <br />
                    <strong>4)UI/UX Design in DS & ML:</strong> Salaries range
                    from $60,000 to $100,000 or more, depending on skill level
                    and experience in enhancing user experiences.
                    <br />
                    <strong>5)E-commerce DS & ML:</strong> Salaries vary based
                    on project complexity and expertise, offering potential for
                    higher earnings.
                    <br />
                    <strong>6)Progressive DS & ML Apps (PDMA):</strong>{" "}
                    Opportunities offer specialized roles and higher
                    compensation in DS & ML development.
                    <br />
                    <strong>7)Cross-platform DS & ML Development:</strong>{" "}
                    Offers increased earnings potential with growing skills and
                    experience.
                    <br />
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal7(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
      
      
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/RVhTUGc0oi5ZA8qQ8QvlNgtrLait7Z96m5DCamwIZPY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vOTIzMzc2/Ni8yMjY1MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzIyNjUwNTEx/Ni1zdG9jay1waG90/by1kZXZvcHMtZGV2/ZWxvcG1lbnQtY3lj/bGVzLW9mLWF1dG9t/YXRpb24uanBn"height={210}
            />
            <Card.Body>
              <Card.Title className="heading">DevOps (Development and Operations):</Card.Title>
              <Card.Text>
              Learn DevOps: Automate, collaborate, streamline software development & deployment processes.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal8(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal9(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal8}
                onHide={() => setShowModal8(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the DevOps (Development and Operations):
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/hxoycZ4EuzyEVt4HND8cLclW7aC2c0fk3Q0OzcMMe1I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92aWxt/YXRlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMi9U/b3AtNy1idXNpbmVz/cy1iZW5lZml0cy1v/Zi1EZXZPcHMtSW5m/b2dyYXBoaWNzLTEu/anBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal8(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal9}
                onHide={() => setShowModal9(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
<strong>1)DevOps:</strong> Entry-level salaries range from $60,000 to $90,000, while senior professionals can earn $100,000+ annually. 
<br />
<strong>2)Automation and Collaboration:</strong> Proficiency in DevOps tools and practices leads to salaries starting at $70,000 to $100,000, with senior roles exceeding $120,000 per year.
<br />
<strong>3)Streamlining Development and Operations:</strong> Salaries in DevOps reflect those of web development, with entry-level positions at $50,000 to $80,000 and senior roles reaching $100,000+ annually.
<br />
<strong>4)Efficient Software Delivery:</strong> Salaries for DevOps engineers range from $60,000 to $100,000+, emphasizing efficiency in software delivery processes.
<br />
<strong>5)Elevated Project Complexity:</strong> Comparable to web development salaries, DevOps earnings increase with expertise and project complexity.
<br />
<strong>6)Advanced DevOps Practices:</strong> Opportunities in DevOps align with web development, offering specialized roles and higher compensation.
<br />
<strong>7)Experience and Skill Growth:</strong> Similar to web and mobile development salaries, DevOps professionals can increase earnings based on skills and experience.
</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal9(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/mhErIKKb4NWehf4l5_181lxyHSxt_zUpEm-gNQHzLlc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMjIxNjIz/ODgvMjM5NTQvaS80/NTAvZGVwb3NpdHBo/b3Rvc18yMzk1NDkw/ODgtc3RvY2stcGhv/dG8tY3liZXItc2Vj/dXJpdHktZGF0YS1w/cm90ZWN0aW9uLWlu/Zm9ybWF0aW9uLmpw/Zw" height={252}
            />
            <Card.Body>
              <Card.Title className="heading">Cybersecurity Development</Card.Title>
              <Card.Text>
              Developing software to secure computer systems, networks, and data from cyber threats.

              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal2(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal3(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal2}
                onHide={() => setShowModal2(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Back end Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZghPaAX2syEWr9lwQ2rRl00HKwlfBSN6k-g53cydTFM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hY3Jv/cG9saXVtLmNvbS9p/bWcvYXJ0aWNsZXMv/YmFja2VuZC1hcy1h/LXNlcnZpY2UvaW1n/MDMuanBn"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal2(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal3}
                onHide={() => setShowModal3(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Backend Development:</strong> Entry-level salaries
                    range from $60,000 to $90,000, while senior developers can
                    earn $100,000+ annually.
                    <br />
                    <strong>2)Database Management:</strong> Proficiency in SQL
                    or NoSQL technologies leads to salaries starting at $70,000
                    to $100,000, with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Server-side Scripting:</strong> Salaries mirror
                    backend development, with entry-level positions at $60,000
                    to $90,000 and senior roles reaching $100,000+ annually.{" "}
                    <br />
                    <strong>4)API Development:</strong> Salaries range from
                    $70,000 to $110,000+ for backend developers with expertise
                    in building robust and efficient APIs. <br />
                    <strong>5)Cloud Computing:</strong> Comparable to backend
                    development salaries, with potential for higher earnings
                    based on expertise in cloud platforms and services. <br />
                    <strong>6)Microservices Architecture:</strong> Opportunities
                    align with backend development, with potential for
                    specialized roles and higher compensation. <br />
                    <strong>7)Security and Authentication:</strong> Similar to
                    backend development salaries, with potential for increased
                    earnings based on skills and experience in ensuring system
                    security.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal3(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/OZdArT4jMA7DnrCz46pk6iBDRstD1Nio4QX788U6aKc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG9uZS1tb2Jp/bGUtYXBwbGljYXRp/b24tZGV2ZWxvcG1l/bnQtY29uY2VwdC1t/b2JpbGUtaW50ZXJu/ZXQtM2QtaWxsdXN0/cmF0aW9uXzc2OTY0/LTUxNjQuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
              height={210}
            />
            <Card.Body>
              <Card.Title className="heading">
              Artificial Intelligence (AI) Development:
              </Card.Title>
              <Card.Text>
              AI Development: Innovate, Learn, Implement, Algorithms, Neural Networks, Intelligent Systems, Applications.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal4(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal5(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal4}
                onHide={() => setShowModal4(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Front Development:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/-sJEOgfvT4gX-vbiV3AyzP20Cp_jXQ47tvm2kVovO7s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzY0YTZmNjdi/NzlhODBmZDlmZjMx/Y2E3YS82NGMyNGNk/NWM4MmIyMjA0YjIy/ZTJlNGZfaGFoYS5w/bmc"
                    className="benimg"
                    height={440}
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal4(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal5}
                onHide={() => setShowModal5(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Native Mobile Development:</strong> Entry-level
                    salaries range from $60,000 to $90,000, while senior
                    developers can earn $100,000+ annually.
                    <br />
                    <strong>2)Cross-platform Development:</strong> Proficiency
                    in React Native, Flutter, or Xamarin leads to salaries
                    starting at $70,000 to $100,000, with senior roles exceeding
                    $120,000 per year.
                    <br />
                    <strong>3)Mobile UI/UX Design:</strong> Salaries mirror
                    mobile development, with entry-level positions at $60,000 to
                    $90,000 and senior roles reaching $100,000+ annually. <br />
                    <strong>4)Mobile Backend Development:</strong> Salaries
                    range from $70,000 to $110,000+ for backend developers
                    specializing in mobile apps. <br />
                    <strong>5)Mobile Game Development:</strong> Comparable to
                    mobile development salaries, with potential for higher
                    earnings based on expertise and project complexity. <br />
                    <strong>
                      6)Progressive Web Apps (PWAs) for Mobile:
                    </strong>{" "}
                    Opportunities align with mobile development, with potential
                    for specialized roles and higher compensation. <br />
                    <strong>7)AR/VR Mobile Development:</strong> Similar to
                    mobile development salaries, with potential for increased
                    earnings based on skills and experience in augmented reality
                    and virtual reality technologies.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal5(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
        <div className="col cs-course">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/JzRXp6UfvuX7pmTB-bBC_bX4wEHfsxGKoUCJntb2VkY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pbWFnZS1icmFp/bi13aXRoLWdsb3dp/bmctc2lnbi10aGF0/LXNheXMtYWlfODkx/MTk3LTIzLmpwZz9z/aXplPTYyNiZleHQ9/anBn"
              height={225}
            />
            <Card.Body>
              <Card.Title className="heading">
                Data Science & Machine Learning Development
              </Card.Title>
              <Card.Text >
                Explore Data Science & Machine Learning: Fundamentals to
                Advanced Techniques.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Button variant="primary" size="lg" className="btn3">
                  Visit Our Course
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal6(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Benefits
                </Button>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => setShowModal7(true)}>
                <Button variant="primary" size="lg" className="btn3">
                  Opportunities
                </Button>
              </ListGroup.Item>
              <Modal
                show={showModal6}
                onHide={() => setShowModal6(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Benefits of the Data Science & ML:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img
                    src="https://imgs.search.brave.com/ZMytW8ROr6VQyNWcohVOl9WfQaEOlr4JyheNXyZwcOY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mbGV4/aXNvdXJjZWl0LmNv/bS5hdS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wOS9iZW5l/Zml0cy1vZi1kYXRh/LXNjaWVuY2UtZm9y/LWJ1c2luZXNzLXNj/YWxlZC0xLmpwZw"
                    className="benimg"
                    alt=""
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal6(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
              <Modal
                show={showModal7}
                onHide={() => setShowModal7(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Opportunities:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <strong>1)Data Science & Machine Learning:</strong> Entry
                    roles range from $60,000 to $90,000 annually, while senior
                    positions command $100,000 or more. Proficiency in DS & ML
                    can lead to salaries between $70,000 and $110,000 per year.
                    <br />
                    <strong>2)DS & ML Frameworks:</strong> Proficiency in
                    frameworks such as TensorFlow, PyTorch, or scikit-learn can
                    lead to salaries ranging from $70,000 to $110,000 annually,
                    with senior roles exceeding $120,000 per year.
                    <br />
                    <strong>3)Data-driven Development:</strong> DS & ML roles
                    align with mobile development salaries, with entry-level
                    positions starting at $50,000 to $80,000 and senior roles
                    reaching $100,000 or more annually.
                    <br />
                    <strong>4)UI/UX Design in DS & ML:</strong> Salaries range
                    from $60,000 to $100,000 or more, depending on skill level
                    and experience in enhancing user experiences.
                    <br />
                    <strong>5)E-commerce DS & ML:</strong> Salaries vary based
                    on project complexity and expertise, offering potential for
                    higher earnings.
                    <br />
                    <strong>6)Progressive DS & ML Apps (PDMA):</strong>{" "}
                    Opportunities offer specialized roles and higher
                    compensation in DS & ML development.
                    <br />
                    <strong>7)Cross-platform DS & ML Development:</strong>{" "}
                    Offers increased earnings potential with growing skills and
                    experience.
                    <br />
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowModal7(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </ListGroup>
          </Card>
        </div>
      </div>
      
    </>
  );
};

export default ComputerScience;