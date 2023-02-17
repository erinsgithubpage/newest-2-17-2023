import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/directory'>Directory</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='4'  className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='https://www.facebook.com/profile.php?id=100081191235958'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='https://twitter.com/erinswebdesign'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-linkedin'
                            href='https://www.linkedin.com/company/web-design-services-online/about/?viewAsMember=true/'
                        >
                            <i className='fa fa-linkedin' />
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+18603000996'
                        >
                            <i className='fa fa-phone' /> 1-860-300-0996
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:erinhazelwood@outlook.com'
                        >
                            <i className='fa fa-envelope-o' /> erinhazelwood@outlook.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;