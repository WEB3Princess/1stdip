import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ",
    heading: "Frequently Asked Questions",
    content: "If your question is not mentioned below, feel free to contact us through one of our social channels."
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "What is FirstDip",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "Firstdip is a web3 company that is focused on providing projects with a unique approach to whitelisting that benefits both the project and its participants. Our entire process is managed through smart contracts, ensuring a secure and transparent allocation process."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "What is a whitelist allocation?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "A whitelist allocation is a process by which a project team pre-approves a group of individuals to participate in a project, typically through an initial coin offering (ICO) or other token sale. This helps to ensure that those who are committed to the project will actually participate."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "How does Firstdip benefit projects?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "Our whitelisting system offers increased visibility and the assurance that those who commit to participate will follow through. By requiring a 20% downpayment from participants, we ensure that those who are whitelisted are serious about their commitment and will actually mint. Additionally, we offer projects the option to create a whitelist and have us handle the entire process from creating the whitelist to the actual mint and minting website."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "How does Firstdip benefit participants?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "Our whitelist allocation system offers the opportunity to mint with confidence, knowing that they are guaranteed a spot in the project. Participants are also free to sell their allocation if they wish to do so, providing even greater flexibility and opportunity."
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "How can I participate in Firstdip whitelisting?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "To participate in Firstdip whitelisting, you can follow our official channels, including our website and Discord server, where we will announce upcoming projects that are utilizing our allocation system."
    },
    {
        id: "6",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseSix",
        quote: "What chains do we support? ?",
        contentId: "collapseSix",
        contentClass: "collapse",
        content: "Etherium, Optimism, Arbitrum, Polygon, Binance Smart Chain, Avalanche, Fantom, Kava, Canto, Celo, Palm, Cronos, Moonbeam."  

    }
]

class Faq extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="faq-area pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* Netstorm Accordion */}
                                <div className="accordion" id="netstorm-accordion">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10">
                                            {/* Single Accordion Item */}
                                            {this.state.data.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="single-accordion-item p-3">
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <h2 className="m-0">
                                                                <button className={item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#netstorm-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;