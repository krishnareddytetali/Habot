import React from "react";
import logo from "./Images/habot-logo.jpg";
import background from "./Images/background.png";
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BsApple, BsAwardFill } from "react-icons/bs";


const Menu = () => {
  const videoId = "IZLp-TZyDkQ";
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-between px-5 "
        style={{ padding: "10px", height: "80px" }}
      >
        <img src={logo} alt="Logo" style={{ height: "120px" }} />

        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
          <p className="text-secondary">Find Suppliers</p>
          <p className="text-secondary">Find Service Tags</p>
          <p className="btn btn-outline-success">Login/Sign Up</p>
        </div>
      </div>
      <div className="position-relative ">
        <img
          src={background}
          className="img-fluid w-100 "
          style={{ height: "400px", objectFit: "cover" }}
          alt="Background"
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white w-100 h-100"
          style={{
            background: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%),
                 linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45))`,
          }}
        >
          <h1 style={{ marginTop: "100px" }}>Are you a Supplier?</h1>
          <h2>Explore Matching Opportunities.</h2>
          <div className="d-flex justify-content-center ">
            <input
              type="search"
              placeholder="Search your required service here"
              className="form-control my-3"
              style={{ maxWidth: "300px", marginRight: "10px" }} // Center the input field
            />
            <input
              type="search"
              placeholder="Search your desired location here"
              className="form-control my-3 "
              style={{ maxWidth: "300px" }} // Center the input field
            />
            <button
              className="btn  btn-success mx-3 mt-3 px-4"
              style={{ height: "40px" }}
            >
              Search
            </button>
          </div>
          <p>
            Are you a Buyer?{" "}
            <span className="text-warning">
              Click here if you are looking to post a requirement
            </span>
          </p>
        </div>
      </div>
      <div className=" px-5 d-flex w=100">
        <div className="w-50 px-3">
          <h3 className=" py-4 fw-bold"> Ready to drive into HABOT?</h3>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="btn btn-success px-5"> Sign up Today !</button>
        </div>
        <div className="w-50 px-5">
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  m-4 text-black"
          >
            Abu Dubai
          </button>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  mx-4 text-black"
          >
            Dubai
          </button>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  mx-4 text-black"
          >
            Sharjan & Ajman
          </button>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  mx-4 text-black"
          >
            Fujairah
          </button>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  m-4 text-black"
          >
            Ras AI Khaimah
          </button>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-danger  mx-4 text-black"
          >
            Umm AI Quwain
          </button>
        </div>
      </div>

      <div className="d-flex m-5 p-5  " style={{backgroundColor:"#123557"}}>
        <div style={{ textAlign: "center", margin: "20px" }}>
          
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`} // Use the correct embed URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
         
        </div>

        <div className="text-white d-flex mx-5 px-5 mt-3"> 
            <div className=" px-5 ">
            <p className="fw-bold">
                Buyer
            </p>
            </div>
            <div className="px-5">
            <p className="fw-bold">
                Supplier
            </p>
            </div>
            
            
        </div>
      </div>
      <div style={{backgroundColor:"#E8FBFF", height:"150px"  
      }} className="my-5 d-flex justify-content-around">
        <div>
<h2 className="py-5  fw-bold"> Let Suppliers Find You</h2></div>
<div className="pt-5">
    <button className="btn btn-danger px-5 p-2">Get Verified</button>
</div>
      </div>
      <div className="text-center container w-50">
        <h2> <b>How it Works?</b></h2>
        <p>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
      </div>
      <div className="container my-5">
      <div className="row">
       
        <div className="col-md-4 " style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border "  style={{backgroundColor:"#E8FBFF"}}>
          <CgProfile size={80} />
            <h5 className="px-5">Select your role and Sign Up</h5>
          </div>
        </div>
       
        <div className="col-md-4 "  style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border bg-light">
          <ImProfile  size={80} />
          <h5 className="px-5">Buyers post your Requirments</h5>
            
          </div>
        </div>
        <div className="col-md-4 " style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border "  style={{backgroundColor:"#E8FBFF"}}>
          <MdRateReview size={80} />
            <h5 className="px-4">Review, select, and Contact the Best Suppliers</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4  " style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border bg-light">
          <AiOutlineProfile  size={80} />
          <h5 className="px-4"> Suppliers Complete your profile and get notified for opportunities</h5>
          </div>
        </div>
        <div className="col-md-4 " style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border "  style={{backgroundColor:"#E8FBFF"}}>
          <BsAwardFill size={80} />
            <h5 className="px-4">Contact to Buyers and Share your Quote for the service</h5>
          </div>
        </div>
      
        <div className="col-md-4 " style={{paddingLeft:'0', paddingRight:'0'}}>
          <div className="box p-4 text-center border bg-light">
          <BsApple size={80} />
          <h5 className="px-4">Both the Parties can Connect and Make Business Leave a Feedback</h5>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Menu;
