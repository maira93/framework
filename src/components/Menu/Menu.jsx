import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ModalMenu from '../Modal/ModalMenu'
import styles from './menu.module.css';
const Menu = () => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(tamanho) {
        setFullscreen(tamanho);
        setShow(true);
      }

    return(
    <>
        <Navbar className={styles.navbar}>
        <Container>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text onClick={() => handleShow('xxl-down')}>
                <i className={`${styles.icon} fa fa-bars`}></i>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <ModalMenu show={show} fullscreen={fullscreen} setShow={setShow}/>
    </>
    )
}
export default Menu;