import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { GiEarthAmerica, GiFloatingPlatforms } from 'react-icons/gi';
import  { TbHeartHandshake, TbToiletPaper} from 'react-icons/tb';
import { RiEarthquakeFill } from 'react-icons/ri';
import { IconContext } from "react-icons";
// import { MdOutlineNaturePeople } from 'react-icons/md'

export const About = () => {
  return (
    <Container fluid className='d-block' style={{fontFamily:'Patrick Hand'}}>
      <Container style={{minHeight:'90vh'}}>
      <Row >
        <Col className='d-flex align-items-center justify-content-center'  style={{fontSize:'40px'}}> About Us </Col>
      </Row>
      <Row className='d-flex align-items-center justify-content-center h-100'>
        <Col  className='d-flex align-items-center justify-content-center h-100'>
        <IconContext.Provider  value={{size:'30rem', color:'rgba(105, 192, 222,0.5)'}} >
            <GiFloatingPlatforms />
          </IconContext.Provider></Col>
        <Col style={{fontSize:'20px'}}> 
        Mission Statement Here...
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
          </Col>
        </Row>
      </Container>

        <Container style={{minHeight:'60vh'}} className='d-block '>
        <Row className='d-flex align-items-center justify-content-center h-100' md={8} >
          <Row className='d-flex align-items-center justify-content-center' >
            <IconContext.Provider  value={{ color: "white", className: "about-icons", size:'50px' }} >
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}} >
                 <GiEarthAmerica/>
                 <div className='d-flex align-items-center justify-content-center'>
                   <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                    velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                 </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}> 
              <TbHeartHandshake/>
              <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}>
                <RiEarthquakeFill/>
                <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}>
                <TbToiletPaper/>
                <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                </Col>
            </IconContext.Provider>
          </Row>
          <Row className='d-flex align-items-center justify-content-center'>
            <IconContext.Provider  value={{ color:'white', className: "about-icons", size:'50px' }} >
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}> 
              <GiEarthAmerica/>
              <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}>
                <TbHeartHandshake/>
                <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}>
                <RiEarthquakeFill/>
                <div>
                  <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
              <Col  style={{backgroundColor:'rgba(105, 192, 222,0.5)', margin:'20px', borderRadius:'1rem', minHeight:'20vh'}}>
                <TbToiletPaper/>       
                 <div>
                      <p >Lorem ipsum dolor sit amet. Est illo molestiae sed neque 
                           velit ut animi possimus non voluptatibus soluta!
                        </p>
                      </div>
                      </Col>
            </IconContext.Provider>
          </Row>
          </Row>
        </Container>
{/* 
      <Container style={{height:'100vh'}} >
        <Row> <Col  className='d-flex align-items-center justify-content-center' style={{fontSize:'40px'}}> Title Here </Col></Row>
        <Row>
          <Col  
           className='d-flex align-items-center justify-content-center'
           style={{backgroundColor:'rgba(105, 192, 222,0.5)', marginRight:'20px', borderRadius:'1rem', height:'70vh'}}> 
          <div >
            something here
          </div>
          </Col>
          <Col 
             className='d-flex align-items-center justify-content-center '  
             style={{backgroundColor:'rgba(105, 192, 222,0.5)', marginRight:'20px', borderRadius:'1rem'}}>
             <div>
              <p >somehthing here</p>
             </div>
          </Col>
         </Row>
      </Container> */}
      <Row style={{height:'50vh', width:'100%'}} >
        <Col className='d-flex align-items-center justify-content-center text-align-center'>
          <div  style={{height:'50vh', width:'40vw'}} className='d-flex align-items-center justify-content-center text-align-center'>
           Eco statement here...
                   
        Lorem ipsum dolor sit amet. Et corporis dicta ab porro facilis sed fugiat mollitia. Ut accusantium
         placeat nam eligendi dolorem aut aliquid magni eos maiores quibusdam. Aut quibusdam dolor et 
         itaque recusandae aut nemo explicabo qui accusamus minima et doloribus galisum qui quae explicabo?
          Ex nihil galisum aut possimus totam ut adipisci iure est rerum blanditiis nemo ullam et ratione dolor hic 
          blanditiis dolorem. 
          </div>
           </Col>
      </Row>
    </Container>
  )
}
