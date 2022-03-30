import React, {useState} from "react"
import DStyles from "../../styles/dashboard.module.css"
import Link from 'next/link'

export default function Dashboard(props) {
    const [change, useChange]=useState(false);
    const [show, useShow]=useState(false);
    const [caves, useCaves]=useState(false);
    const [page, usePage]=useState(0);
    const data = props.main;
    return(
        <>
            {data=="HOME"?<div>
            <div className={`${DStyles.text_drop} w3-animate-top`}>
                <button className={DStyles.warning}>
                    <svg className="text-red-500 fill-current" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="rgba(239,68,68,1)" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                </button>
                <span className={DStyles.warning_letter}>
                <b>Please Use MetaMask Or Any Other Web3 Wallet To Use CryptoWOLF</b><br/> <p style={{paddingLeft:"68px"}}>CryptoWOLF is a decentralized play to earn game and therefore we need you to use any Web3 Wallet (MetaMask, OKEx Wallet, etc) to connect your browser to the Blockchain.</p>
                </span>
            </div>
            <div className="row game_div">
                <div className="col-lg-4 col-md-12 position">
                    <img src="/images/4.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" className="w-8 h-8 fill-current text-gray-500"><path data-name="layer2" d="M18 50.8V28h-.1a2.9 2.9 0 0 0-2.9 2.9v12.2a2.9 2.9 0 0 1-2.5 2.9H9.9A2.9 2.9 0 0 0 7 48.9V60h5a10 10 0 0 1 6-9.2zM54.1 46h-2.6a2.9 2.9 0 0 1-2.5-2.9V30.9a2.9 2.9 0 0 0-2.9-2.9H46v22.8a10 10 0 0 1 6 9.2h5V48.9a2.9 2.9 0 0 0-2.9-2.9z"></path><path data-name="layer1" d="M22 50a10 10 0 0 1 10 10 10 10 0 0 1 10-10V21.8C42 10.9 32 4 32 4s-10 6.9-10 17.8V50zm10-30a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"></path></svg>
                    </button>
                </div>
                <div className="col-lg-4 col-md-12 position MG_top">
                    <img src="/images/2.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" className="w-8 h-8 fill-current text-gray-500"><path data-name="layer2" d="M32 53.2l-24-10V51l24 10 24-10v-7.8l-24 10z"></path><path data-name="layer2" d="M56 38.8v-5.6l-24 10-24-10v5.6l24 10 24-10z"></path><path data-name="layer2" d="M8 23.2v5.6l24 10 24-10v-5.6l-24 10-24-10z"></path><path data-name="layer1" d="M32 28.8l24-10V3H8v15.8l24 10z"></path></svg>
                    </button>
                </div>
                <div className="col-lg-4 col-md-12 position MG_top">
                    <img src="/images/3.jpg" alt="img2" style={{width:"100%"}} />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(107,114,128,1)" viewBox="0 0 458.758 458.758" className="w-8 h-8 fill-current text-gray-500"><path d="M448.189 10.579c-11.9-11.9-30.2-13.8-54.3-5.5-10.6 3.6-22.6 9.2-36.1 16.8-8.1 4.6-16.8 9.8-25.8 15.8-2.4 1.6-4.8 3.2-7.3 4.9 13.8 7 26.7 15.5 38.6 25.5 2.8-1.7 5.4-3.4 8-4.9 22.8-13.6 37.1-18.8 44.6-20.3-2 10.1-10.7 32.8-37.9 72-2.2 3.1-4.4 6.3-6.7 9.5-5.1-6.9-10.8-13.6-17.1-19.8-68.9-68.9-180.7-68.9-249.6 0s-68.9 180.7 0 249.6c6.3 6.3 12.9 12 19.8 17.1-3.2 2.3-6.4 4.5-9.5 6.7-39.2 27.1-61.9 35.9-72 37.9 1.2-6.1 4.9-17 13.8-33.4 3.1-5.7 6.8-12.1 11.3-19.2-9.9-11.9-18.4-24.8-25.5-38.6-1.7 2.4-3.3 4.9-4.9 7.3-8.3 12.6-15.2 24.3-20.7 35-5.1 9.8-9 18.8-11.8 26.9-8.2 24.1-6.4 42.4 5.5 54.3s30.2 13.8 54.3 5.5c17-5.8 37.8-16.8 61.9-32.6 47.6-31.3 104.4-79 159.8-134.4s103.2-112.2 134.4-159.8c15.8-24.1 26.8-44.9 32.6-61.9 8.3-24.2 6.5-42.4-5.4-54.4zm-344.3 235.6c-9.3 0-16.8-7.5-16.8-16.8 0-38.2 14.9-74.2 41.9-101.2 6.6-6.6 17.2-6.6 23.8 0 6.6 6.6 6.6 17.2 0 23.8-20.7 20.7-32.1 48.2-32.1 77.4.1 9.3-7.5 16.8-16.8 16.8zM310.189 310.179c-35 35-70.6 67-104.3 94.1 52.6 7 107.9-9.7 148.3-50.1 40.5-40.5 57.2-95.7 50.1-148.3-27.1 33.7-59.1 69.3-94.1 104.3z"></path></svg>
                    </button>
                </div>
            </div>></div>
            :data=="CAVE"?
            <div className="wolf_main">
                <div className="row w3-animate-top">
                    <div className="col-lg-6 col-md-12">
                        <button className="first">
                            <p>Mint Cave</p>
                            <div className={DStyles.mint}>
                                <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="second">
                            <p>Current Cave</p>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="third">
                            <p>Mining WOlf</p>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </button>
                    </div>
                </div>
            </div>
            :data=="WOLF"?
            <div className={DStyles.cave}>
                <div className="row w3-animate-top">
                    <div className="col-lg-6 col-md-12">
                        <button className="first">
                            <p>Mint Wolf</p>
                            <div className={DStyles.mint}>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="second">
                            <p>Current Wolf</p>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="third">
                            <p>Mining Power</p>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </button>
                    </div>
                </div>
                <p className={DStyles.filter_text}>Filter by Wolf Raity:</p>
                <div className={DStyles.pageset}>
                    <button className={DStyles.all_btn}>All</button>
                    <button className={DStyles.order} disabled>1</button>
                    <button className={DStyles.order} disabled>2</button>
                    <button className={DStyles.order} disabled>3</button>
                    <button className={DStyles.order} disabled>4</button>
                    <button className={DStyles.order} disabled>5</button>
                </div>
            </div>
            :data=="BOX"?
            <div className="wolf_main">
                <div className="row w3-animate-top">
                    <div className="col-lg-6 col-md-12">
                        <button className="first">
                            <div className={`${DStyles.mint} ${DStyles.box_btn}`} disabled>
                                <svg className="text-green-700 fill-current mx-2 fleet_mark" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="black" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,24H10V20h4v4Zm2-13.98247H13v7.99631H11V10.01753H8L9,9.0166l1-1.00092,1-1.00092,1-1.00092,1,1.00092,1,1.00092L15,9.0166ZM1,15.99935V3.00065a1.9829,1.9829,0,0,1,.15781-.77682,2.01986,2.01986,0,0,1,1.06563-1.066A1.98115,1.98115,0,0,1,3,1H21a1.98115,1.98115,0,0,1,.77656.15786,2.01986,2.01986,0,0,1,1.06563,1.066A1.9829,1.9829,0,0,1,23,3.00065v12.9987a1.98294,1.98294,0,0,1-.15781.77682,2.01986,2.01986,0,0,1-1.06563,1.066A1.98115,1.98115,0,0,1,21,18H15V16.00935h6V3.0096H3V16.00935H9V18H3a1.98115,1.98115,0,0,1-.77656-.15786,2.01986,2.01986,0,0,1-1.06563-1.066A1.98294,1.98294,0,0,1,1,15.99935Z"></path></svg>
                                Create Fleet<br />
                            </div>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="second add">
                            <p>Current Fleets</p>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </button>
                    </div>
                    <div className="col-lg-1 col-md-12"></div>
                    <div className="col-lg-2 col-md-12">
                        <button className="third add">
                            <p>Expeditions</p>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </button>
                    </div>
                </div>
            </div>
            :data=="RAIDS"?
            <Link href="/createFleet">
                <button className={DStyles.create_fleet}>
                    <svg className="w-[20px] h-[20px]" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="black" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"></path></svg>
                    Create Cave
                </button>
            </Link>
            :data=="createFleet"?
            <div>
                <div className={`${DStyles.text_drop} w3-animate-top`}>
                    <button className={`${DStyles.warning} ${DStyles.fleetC}`}>
                        <svg className="text-red-500 fill-current" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="rgba(59,130,246,1)" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>
                    </button>
                    <span className={DStyles.warning_letter}>
                        <b>Creating Fleet</b><br/> <p style={{paddingLeft:"68px"}}>To start creating a fleet you need to have at least 100MP and fleet name<br />You can click or drag workers & spaceships from the left panel</p>
                    </span>
                </div>
                <Link href="/box">
                    <button className={DStyles.backFleet}>
                        <svg class="mr-2" data-testid="eos-svg-component" transform="rotate(0) translate(0, 0) scale(1, 1)" fill="black" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                        Back to my fleets
                    </button>
                </Link>
                <div className="row" style={{marginTop:"15px"}}>
                    <div className="col-lg-9 col-md-12">
                        <div className={DStyles.fleetLeft}>
                            <svg className="w-10 h-8 fill-current text-gray-50" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className={`${DStyles.drag} topDrag`}>
                            <div className={`${DStyles.dragDiv} text-center`}>
                                Drag/Click Spaceships to start creating your fleet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :data=="CAVES"?
            <div>
                <div className={DStyles.filterTop}>
                    <p className={DStyles.filter_text}>Filter by Wolf Raity:</p>
                    <div className={DStyles.pageset}>
                        <button className={page==0?`${DStyles.all_btn} ${DStyles.page_select}`:`${DStyles.all_btn}`}>ALL</button>
                        <button className={page==1?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(1)}>1</button>
                        <button className={page==2?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(2)}>2</button>
                        <button className={page==3?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(3)}>3</button>
                        <button className={page==4?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(4)}>4</button>
                        <button className={page==5?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(5)}>5</button>
                    </div>
                </div>
                <div className={DStyles.myList}>
                    <p>My listings</p>
                    <button onClick={()=>useCaves(!caves)}>{caves?"YES":"NO"}</button>
                </div>
                <div className={DStyles.pageNum}>
                {caves?
                    <svg className="w-10 h-8 fill-current text-gray-50 wolves_svg" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                    :
                    <div>
                        <button>Previous</button>
                        <button className="active_num">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>...</button>
                        <button>892</button>
                        <button>893</button>
                        <button>Next</button>
                    </div>
                }
                </div>
                <div className={DStyles.underNum}>
                    <div className={DStyles.moveR}>
                        {caves?
                        <svg className="w-10 h-8 fill-current text-gray-50 wolves_svg" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        :
                        <div>
                            <button>Previous</button>
                            <button className="active_num">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>...</button>
                            <button>892</button>
                            <button>893</button>
                            <button>Next</button>
                        </div>
                        }
                    </div>
                </div>
            </div>
            :data=="WOLVES"?
            <div>
                <div>
                    <div className={DStyles.filterTop}>
                        <p className={DStyles.filter_text}>Filter by Wolf Raity:</p>
                        <div className={DStyles.pageset}>
                            <button className={page==0?`${DStyles.all_btn} ${DStyles.page_select}`:`${DStyles.all_btn}`}>ALL</button>
                            <button className={page==1?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(1)}>1</button>
                            <button className={page==2?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(2)}>2</button>
                            <button className={page==3?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(3)}>3</button>
                            <button className={page==4?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(4)}>4</button>
                            <button className={page==5?`${DStyles.order} ${DStyles.WOrder} ${DStyles.page_select}`:`${DStyles.order} ${DStyles.WOrder}`} onClick={()=>usePage(5)}>5</button>
                        </div>
                    </div>
                    {page==0?"":
                        <div>
                            <div className={DStyles.filterHide}>
                                <p>Filter by MP From - To</p>
                                <input type="number" value={page==1?"5":page==2?"50":page==3?"100":page==4?"150":page==5?"200":""} className={DStyles.fromValue} />
                                <input type="number" value={page==1?"50":page==2?"100":page==3?"150":page==4?"200":page==5?"250":""} className={DStyles.toValue} />
                            </div>
                            <div className={DStyles.sortHide}>
                                <p>Sort by</p>
                                <label>
                                    <input type="radio" name="sortBy" value="mp" checked />
                                    <span className="ml_2">MP</span>
                                </label>
                                <label className="MGleft20">
                                    <input type="radio" name="sortBy" value="eternal" checked />
                                    <span className="ml_2">$ETERNAL</span>
                                </label>
                            </div>
                        </div>
                    }
                    <div className={DStyles.myList}>
                        <p>My listings</p>
                        <button onClick={()=>useChange(!change)}>{change?"Yes":"No"}</button>
                    </div>
                    <div className={DStyles.pageNum}>
                        {change?
                        <svg className="w-10 h-8 fill-current text-gray-50 wolves_svg" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        :
                        <div>
                            <button>Previous</button>
                            <button className="active_num">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>...</button>
                            <button>2777</button>
                            <button>2778</button>
                            <button>Next</button>
                        </div>
                        }
                    </div>
                </div>
                <div className={DStyles.underNum}>
                    <div className={DStyles.moveR}>
                    {change?
                        <svg className="w-10 h-8 fill-current text-gray-50 wolves_svg" fill="#f9fafb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.67" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="12" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0.33" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle><circle cx="6" cy="12" r="0"><animate attributeName="r" values="0;2;0;0" dur="1.5s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animate></circle></svg>
                        :
                        <div>
                            <button>Previous</button>
                            <button className="active_num">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>...</button>
                            <button>2777</button>
                            <button>2778</button>
                            <button>Next</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
            :data=="BOXES"?
            <div style={{marginTop:"40px"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <p className="text_indigo">Filter by Rank:</p>
                        <button className="rankD rankBtn rank_active">Rank <p style={{color:"rgba(107,114,128,1)"}}>D</p></button>
                        <button className="rankC rankBtn">Rank <p style={{color:"rgba(16,185,129,1)"}}>C</p></button>
                        <button className="rankB rankBtn">Rank <p style={{color:"rgba(59,130,246,1)"}}>B</p></button>
                        <button className="rankA rankBtn">Rank <p style={{color:"rgba(245,158,11,1)"}}>A</p></button>
                        <button className="rankS rankBtn">Rank <p style={{color:"rgba(139,92,246,1)"}}>S</p></button>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p className="text_indigo">Sort by:</p>
                        <label>
                            <input type="radio" name="sortBy" value="mp" checked />
                            <span className="ml_2">MP</span>
                        </label>
                        <label className="MGleft20">
                            <input type="radio" name="sortBy" value="eternal" checked />
                            <span className="ml_2">$ETERNAL</span>
                        </label>
                        <label className="MGleft20">
                            <input type="radio" name="sortBy" value="level" checked />
                            <span className="ml_2">Level</span>
                        </label>
                        <button className="market MGleft20" onClick={()=>useShow(!show)}>{show?"Show My Listing":"Show Market"}</button>
                    </div>
                </div>
                <div className="filter_by">
                    <div className="ID_div">
                        <p className="text_indigo">Filter by ID</p>
                        <input className="ID_val" type="text" placeholder="Filter by id" />
                    </div>
                    <div className="MP_div">
                        <p className="text_indigo two">Filter by MP</p>
                        <input className="MP_val two" type="number" value="1001" />
                        <input className="MP_val" type="number" value="12750" />
                    </div>
                    <div className="ETERNAL_div">
                        <p className="text_indigo two">Filter by $ETERNAL</p>
                        <input className="eternal two" type="number" value="11" />
                        <input className="eternal" type="number" value="11" />
                    </div>
                </div>
                <p className="under_rank">{show?"There are not fleets of this rank":"You do not have fleets on this rank"}</p>
            </div>
            :""
        }
        </>
    )
}