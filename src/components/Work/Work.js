import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

class Work extends Component {
    state = {
        data: {},
        workData: [
            {
              "id": 1,
              "icon": "icons icon-wallet text-effect",
              "title": "Create NFT Collections",
              "text": "Create your NFT collections with 1st Dip in a few clicks"
            },
            {
              "id": 2,
              "icon": "icons icon-grid text-effect",
              "title": "Create Whitelists for Minting",
              "text": "1st Dip allows you to easily whitelist minters for your collection"
            },
            {
              "id": 3,
              "icon": "icons icon-drawer text-effect",
              "title": "Mint Hub",
              "text": "1st Dip provides you with customized minting pages for your collections"
            },
            {
              "id": 4,
              "icon": "icons icon-bag text-effect",
              "title": "List Your NFT for Sale",
              "text": "List your NFT to be sold on the 1st Dip market place"
            }
          ]
    }
    componentDidMount(){
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             workData: res.data.workData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4">
                                <div className="intro-content">
                                    <span>{"How it Works"}</span>
                                    <h3 className="mt-3 mb-0">Create Whitelists, Mints Apps and More with 1st Dip</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.workData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    {/* Single Work */}
                                    <div className="single-work">
                                        <i className={item.icon} />
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;