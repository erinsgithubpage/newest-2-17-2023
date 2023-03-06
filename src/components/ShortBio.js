import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Row,
} from "reactstrap";
import React from "react";

const ShortBio = () => {
  //const [ShortBio] = useState(false);

  return (
    <Container>
      <Row>
        <h5>
          <p class="bio">
            I'm <b>Erin</b>, a practicing Front-End and WordPress Developer that
            has experience in various programming languages, such as HTML5,
            CSS3, JavaScript, Python, C++, C, Java, and PHP, along with the
            widely popular CMS commonly referred to as WordPress. I use
            libraries such as React.js to create responsive web applications. In
            addition, I have dabbled in Penetration Testing, thus marking a
            great stride in securing web pages for my clients.{" "}
          </p>
          <br />
          <p class="bio">
            I am currently a student at NuCamp Coding Boot Camp studying Full
            Stack Web and Mobile Development. The course curriculum includes:
            Bootstrap, JavaScript, React, React Native, Git, and Google Cloud
            Computing.
          </p>
        </h5>
      </Row>
      <Row>
        {/*<div class="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100081191235958" target="blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/erinswebdesign" target="blank"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/web-design-services-online/about/?viewAsMember=true" target="blank"><i class="fa fa-linkedin"></i></a>
                </div>
                <div class="cv">
                    <span class="about-button">
                        <a class="main-btn" href="https://erinh30.sg-host.com/WordPress-2.pdf" target="blank" download>Download CV</a>
                    </span>
    </div>*/}
        <br></br>
      </Row>
      <Row>
        {/*<div class="slideshow-container">

   
                <div class="mySlides">
                <p><br></br></p>
                    <q>Erin has been amazing during her time here at VCRC and I could not recommend anyone more highly. Based on her success and impact here at VCRC, she is deserving of any position that she is applying for. From day one her level of engagement and communication was at a level that we did not experience with our previous volunteer. Our website has since become an amazing hub of information and resources. During this pandemic, Erin has helped us make it possible for community members to be able to connect to available resources. At the same time Erin has offered recommendations for improvements and connected us with new connection point.</q>
                     <p class="author">- Jose Rizo-Program Director</p>
                </div>
  
                 <div class="mySlides">
                 <p><br></br></p>
                     <q>Erin volunteered for a project I managed with our organization's website. Her professionalism was a key asset in refining our approach to the work our website needed done, and has been a major factor in our efforts to update and upgrade our presentation of our work to the world. Her knowledge and skill with plugins proved crucial in managing our update process. She assisted me in navigating the depths of security for our site in the time of a global pandemic when security needs and opportunities were changing faster than the rest of us could keep up with. Erin was the tip of the spear keeping our site and information safe and working properly. I highly recommend Erin for any Wordpress needs you or your organization may be facing.</q>
                    <p class="author">- Kathy Engle-Dulac-Manager, Administration, and Tech Team Strategist</p>
                </div>
  
  
  
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
  
  
                <div class="dot-container">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
</div>*/}
      </Row>
    </Container>
  );
};

export default ShortBio;
