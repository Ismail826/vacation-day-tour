import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Container>
            <Card className='p-5 m-5 mx-auto'>
              
                <div className='p-10 m-10  mx-auto text-center w-25 h-25' > <img style={{ background: "#f9461d", height: "50px", width: "50px" }} className=' bg-img ' src={img} alt='' /> </div>
                <Card.Body>
                    <Card.Title className='text-center services-title '>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        Details:{description.slice(0,200)}
                    </Card.Text>
                </Card.Body>

            </Card>

        </Container>
    );
};

export default Service;