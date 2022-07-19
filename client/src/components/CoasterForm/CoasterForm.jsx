import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from "react"
import coasterServices from './../../services/coaster.services'

const CoasterForm = ({ fireFinalActions }) => {

    const [coasterData, setCoasterData] = useState({
        title: '',
        inversions: '',
        length: '',
        imageUrl: '',
        description: ''
    })

    const handleChange = e => {
        const { value, name } = e.target
        setCoasterData({ ...coasterData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        coasterServices
            .saveCoaster(coasterData)
            .then(() => {
                fireFinalActions()
            })
            .catch(ERR => console.error(ERR))
    }


    const { title, description, imageUrl, length, inversions } = coasterData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={title} onChange={handleChange} name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="inversions">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="number" value={inversions} onChange={handleChange} name="inversions" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="length">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="number" value={length} onChange={handleChange} name="length" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (URL)</Form.Label>
                <Form.Control type="text" value={imageUrl} onChange={handleChange} name="imageUrl" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </div>

        </Form>
    )
}

export default CoasterForm