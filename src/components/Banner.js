import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticket = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticket)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting &&  updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi Portfolio</span>
                        <h1>{`Hola soy `}<span className="wrap">{text}</span></h1>
                        <p>Soy hipoacúsico y me dedico a diseñar páginas web y otros trabajos de diseño en forma independiente. Mi meta personal es crecer en el terreno laboral, incrementar mis conocimientos en el área del diseño y programación de páginas webs, y poder también disfrutar del placer que da trabajar en lo que me gusta.</p>
                        {/* <button onClick={() => console.log('connect')}>Conectémonos <ArrowRightCircle size={25} /></button> */}
                        </ Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img" /> 
                    </Col>
                </ Row>
            </ Container>
        </section>
    )
}