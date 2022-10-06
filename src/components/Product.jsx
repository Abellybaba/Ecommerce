import React from 'react'

const Product = ({ item }) => {
    return (
        // <div className="container">
        //     <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-0">
        //         <div className="card" style={{ width: "250px"}}>
        //         <span class="badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
        //             <img className="card-img-top mx-auto w-100 img-fluid" src={item.img} alt="" style={{objectFit: "cover" }} />
        //             <div class="card-img-overlay">
        //                 <h5 class="card-title">Card title</h5>
        //                 <p class="card-text">Last updated 3 mins ago</p>
        //             </div>
        //         </div>

        //     </div>
        // </div>

            <div className="container">
                <div className="mb-24">
                <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-5">
                        <div className="p-6 bg-danger rounded" style={{ width: "250px"}}>
                            <span className=" ms-2 mt-2 badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
                            <a className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none" href="https://google.com/">
                                <img className="mb-5 mx-auto w-100 img-fluid" style={{ height: "224px", objectFit: "contain" }} src={item.img} alt="" />
                                <h5 className="ms-2 mb-2">BRILE water filter</h5>
                                <p className="ms-2 h6 text-info">$29.89</p>
                            </a>
                            <div className="p-2">
                                <a className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="https://google.com/" style={{ width: "48px", height: "48px" }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

        // <div className="py-20 bg-light overflow-hidden">
        //     <div className="container ">
        //         <h2 className="mb-16 mb-md-24 p-5 text-center">Discover our products</h2>
        //         <div className="row mb-24">
        //             <div className="col-12 col-md-6 col-lg-3 mb-6 mb-lg-5">
        //             <div className="p-6 bg-danger rounded">
        //                     <span className=" ms-2 mt-2 badge bg-transparent border border-2 border-info rounded-pill fw-bold text-info">NEW</span>
        //                     <a className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none" href="https://google.com/">
        //                         <img className="mb-5 mx-auto w-100 img-fluid" style={{ height: "224px", objectFit: "contain" }} src="https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" alt="" />
        //                         <h5 className="ms-2 mb-2">BRILE water filter</h5>
        //                         <p className="ms-2 h6 text-info">$29.89</p>
        //                     </a>
        //                     <div className="p-2">
        //                     <a className="ms-auto me-2 d-flex align-items-center justify-content-center border rounded-3" href="https://google.com/" style={{ width: "48px", height: "48px" }}>
        //                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" width="2" height="12" fill="#161616"></rect><rect x="12" y="5" width="2" height="12" transform="rotate(90 12 5)" fill="#161616"></rect></svg>
        //                     </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Product