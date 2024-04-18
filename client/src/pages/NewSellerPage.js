import React from 'react';
import "../assets/NewSellerPage.css";

function NewSellerPage({}){

    return(
        <div className="SellerPage">
            <div>
               <button>Dashboard</button>
               <button>Profile Customization</button>
               <button>Quotes Requests</button>
               <button>Messages</button>
               <button>Pans</button>
               <button>Analytics</button>
               <button>Partnership</button>
            </div>
            <div>
                <h1>Profile Customization</h1>
                <div>
                    <button>Overview</button>
                    <button>Projects</button>
                    <button>Articles</button>
                    <button>Partners</button>   
                </div>
                <div>
                    <div>
                        <img src={""} alt="UserPicture"/>
                    </div>
                    <div>
                        <strong>Company Name</strong>
                        <p>
                            This is just filler text. But perhaps we should limit bios to
                            a 250 word length or something.
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <hr/>
                <div>
                    {/*Grab customers items from the backend and display them here. Customize styling as needed*/}
                    <SellerInfoCard imgSrc={""} ProductTitle={"Concrete Walls"} designer={"ABC Commercial"} starRating={2} totalReviews={100}/>
                    <SellerInfoCard imgSrc={""} ProductTitle={"Grid Iron field"} designer={"Bradley University"} starRating={1} totalReviews={10000}/>
                    <SellerInfoCard imgSrc={""} ProductTitle={"Kentucky Blue Grass"} designer={"Lance Fields"} starRating={5} totalReviews={5}/>
                    <SellerInfoCard imgSrc={""} ProductTitle={"Dominos Building"} designer={"Chicago Co."} starRating={0} totalReviews={1}/>

                </div>
                <div>
                    <h1><span style={{color:"gold"}}>{"Customers"}</span> <span color={{color:"black"}}>{" Say:"}</span></h1>
                    <div>
                        <CustomerReview rating={4.5} header={"On time with good delivery"} review={"lorem ipson dolor da"}/>
                        <CustomerReview rating={5} header={"On time with good delivery"} review={"lorem ipson dolor da"}/>
                        <CustomerReview rating={3.3} header={"On time with good delivery"} review={"lorem ipson dolor da"}/>
                        <CustomerReview rating={1} header={"On time with good delivery"} review={"lorem ipson dolor da"}/>
                    </div>
                    
                </div>

            </div>



        </div>
    )
}


/*
    Created according to the website
    imgSrc: image source location
    ProductTitle: name of product
    designer: Who made the item
    starRating: total star review -> should be between 1 and 5
    totalReviews: how many total review
*/
function SellerInfoCard({imgSrc, ProductTitle, designer, starRating, totalReviews}){

    return(
        <div className="SellerItemCard">
            <div>
                <img src={imgSrc}/>
            </div>
            <strong>{ProductTitle}</strong>
            <p>{`Designed By: ${designer}`} </p>

            <div>
                <p>
                    {
                        [...Array(Math.max(starRating,0))].map((elem,id)=>{
                            return <span style={{color:"orange"}} key={"star"+id}>{`${String.fromCharCode(9733)}`}</span>
                        })
                    }
                    {
                        [...Array(5-starRating)].map((elem,id)=>{
                            return `${String.fromCharCode(9734)}`
                        })
                    }
                </p>
                <p>{`(${totalReviews})`}</p>
            </div>
            

        </div>
    );

}

function CustomerReview({rating, header, review, ImgSRC}){

    return(
        <div className="CustomerReview">
            <div>
                <img src={ImgSRC}/>
                <div>{rating}</div>
            </div>
            <strong>{header}</strong>
            <p>{review}</p>

        </div>
    )
}

export default NewSellerPage; 