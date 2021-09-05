import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
const Todos = () => {
    // Iniciando estado com array vazio.
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
    // Sempre que o componente carregar, executar a função dentro do useEffect.
    useEffect(() => {
        async function getTodos() {
            // Montando requisição
            const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
            // Setando o estado data com os valores retornados pela requisição
            setData(response)
        }
        // Chamando função.
        getTodos();
    }, [])
    
    return(
        <>
        {show &&  
        <Alert key={1} variant={'warning'} onClose={() => setShow(false)} dismissible>
            Você não pode alterar isso ainda.
        </Alert>
        }
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Completo</th>
                </tr>
            </thead>
            <tbody>
               {data.map((item, key) => (
                    <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        {item.completed === false ? (
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                checked={false}
                                onChange={() => setShow(true)}
                            />
                        ):(
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                checked={true}
                                onChange={() => setShow(true)}
                            />
                        )}
                   </td>
                  
                    </tr>
               ))}
            </tbody>
        </Table>
        </>
    )
}
export default Todos;