import React, { Component } from 'react';
import "./about.css";

const AboutInfo = ()=>{
    return (
        <section className="explore-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Intro */}
                        <div className="intro d-flex justify-content-between align-items-end m-0">
                            <div className="intro-content">
                                <span>What is 1st Dip?</span>
                                <h3 className="mt-3 mb-0">About Us</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='internal-text'>
                   <p>Welcome to 1st Dip, a web3 company that is dedicated to empowering both projects and participants through our innovative whitelist allocation system, all done through smart contract technology.</p>
                   <p>At 1st Dip, we believe that the success of a project is directly tied to its community. That's why we've developed a unique approach to whitelisting that benefits both the project and its participants. Our entire process is managed through smart contracts, ensuring a secure and transparent allocation process.</p>
                   <p>For projects, our whitelisting system offers increased visibility and the assurance that those who commit to participate will follow through. By requiring a 20% downpayment from participants, we ensure that those who are whitelisted are serious about their commitment and will actually mint. Additionally, we offer projects the option to create a whitelist and have us handle the entire process from creating the whitelist to the actual mint and minting website. This allows project teams to focus on their core objectives while we handle the technical details.</p>
                   <p>For participants, our whitelist allocation system offers the opportunity to mint with confidence, knowing that they are guaranteed a spot in the project. This eliminates the uncertainty and frustration that often accompanies traditional allocation methods. Participants are also free to sell their allocation if they wish to do so, providing even greater flexibility and opportunity.</p>
                   <p>Our team is made up of experienced professionals who are passionate about the potential of web3 technology. We are committed to creating a fair and transparent allocation system that benefits everyone involved.</p>
                   <p>Thank you for visiting 1st Dip. We look forward to working with you to build a stronger, more equitable web3 ecosystem.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutInfo;