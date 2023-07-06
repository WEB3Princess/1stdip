import React, { Component } from 'react';
import AuthorProfile from "../AuthorProfile/AuthorProfile";

class Create extends Component {
    render() {
        return (
            <section className="author-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-4">
                            <AuthorProfile />
                        </div>
                        <div className="col-12 col-md-7">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>Create Whitelist</span>
                                    <h3 className="mt-3 mb-0">Application Form</h3>
                                </div>
                            </div>
                            {/* Item Form */}
                            <form className="item-form card no-hover">
                                <div className="row">
                                    {/* <div className="col-12">
                                        <div className="input-group form-group">
                                            <div className="custom-file">
                                                <input type="text" className="custom-file-input" id="inputGroupFile01" />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Project Name</label>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Project Name" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Symbol" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="textarea" placeholder="Supply" type="number" min={0} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Type of Token (ERC721, ERC1155 or ERC721A)" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Link To Asset" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Link To Json" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Use Pseudorandom Start? (Yes/No)" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="Number" min={0} className="form-control" name="name" placeholder="Require API? (Yes/No)" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" placeholder="Start Time if Any" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="Number" className="form-control" name="name" placeholder="Presale Price" min={0} required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="Number" className="form-control" name="name" placeholder="Number Of Team Mint if any" min={0} required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="number" min={0} className="form-control" name="name" placeholder="Whitelist Spots Filled" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="number" min={0} className="form-control" name="name" placeholder="How Are Payments Split?(Leave Blank For None)" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="number" min={0} className="form-control" name="name" placeholder="No. of Whitelist Spots through 1st Dip" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="number" min={0} className="form-control" name="name" placeholder="Royalties? (No/URI/ERC2981)" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="number" min={0} className="form-control" name="name" placeholder="Omnichain? if Yes, Enter Number of Chains"  />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn w-100 mt-3 mt-sm-4" type="submit">Submit Application</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Create;