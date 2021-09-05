import React from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from './modalMenu.module.css'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const ModalMenu = ({show, fullscreen, setShow}) => {
    return(
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className={`${styles.modalbg} ${styles.modalHeader}`} closeButton style={{ borderBottom: 'none'}} />
        <Modal.Body className={`${styles.modalbg} ${styles.modalBody}`}>
            <CardGroup className={styles.cardGroup}>
                <a href={'/todos'} className={styles.a}>
                    <Card className={styles.card} onClick={() => setShow(false)}>
                        <Card.Body className={styles.cardBody}>
                        <Card.Title>Todos</Card.Title>
                        
                        </Card.Body>
                    </Card>
                </a>
                <a href={'/albuns'} className={styles.a}>
                    <Card className={styles.card} onClick={() => setShow(false)}>
                        <Card.Body className={styles.cardBody}>
                        <Card.Title>Albuns</Card.Title>
                        </Card.Body>
                    </Card>
                </a>
                <a href={'/'} className={styles.a}>
                    <Card className={styles.card} onClick={() => setShow(false)}>
                        <Card.Body className={styles.cardBody}>
                        <Card.Title>Postagens</Card.Title>
                        </Card.Body>
                    </Card>
                </a>
            </CardGroup>
        </Modal.Body>
      </Modal>
    </>
    )
}
export default ModalMenu;