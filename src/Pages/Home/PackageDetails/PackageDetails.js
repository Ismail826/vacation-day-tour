import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { packageDetailsContext } from '../../../App';
import { Button, Card } from 'react-bootstrap';

const PackageDetails = () => {
    const [packages, setPackages] = useContext(packageDetailsContext);
    const { packagesDetailsId } = useParams();
    const packageDetail = packages.find((service) => service.id == packagesDetailsId);

    return (
        <div>
            <Link to="/"><Button style={{ marginLeft: "20px", marginTop: "20px" }} > Back </Button> </Link>
            <h1 className='text-center'>Single Products Details</h1>

            <Card className='p-5 m-5 w-50 mx-auto'>
                <Card.Img variant="top" style={{ height: "300px", width: "300px" }} className='mx-auto' src={packageDetail?.img} alt='' />
                <Card.Body className='-5w0 mx-auto'>
                    <Card.Title>Country:{packageDetail?.name}</Card.Title>
                    <Card.Text>
                        Price:{packageDetail?.price}
                    </Card.Text>
                    <Card.Text>
                        Day:{packageDetail?.day}
                    </Card.Text>
                    <Card.Text>
                        Details: {packageDetail?.description}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default PackageDetails;