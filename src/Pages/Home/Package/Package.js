import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Package = ({ package: details }) => {
    const { id, img, name, price,day } = details;
    const navigate = useNavigate();

    const packagesDetails = (id) => {
        navigate(`/packagesDetails/${id}`);
        console.log(id);
    }

    return (
        <div>
            <Card className='p-5 m-5'>
                <Card.Img variant="top" src={img} alt='' />
                <Card.Body>
                    <Card.Title>Country:{name}</Card.Title>
                    <Card.Text>
                        Price:{price}
                    </Card.Text>
                    <Card.Text>
                        Days:{day}
                    </Card.Text>
                </Card.Body>
                
                
                <button onClick={() => packagesDetails(id)} className='btn btn-primary'>Package Details</button>

            </Card>
        </div>
    );
};

export default Package;