import React from "react";

function Contact() {
  return (
    <div className="contact">

      <div class="container-fluid">
      <div>
        <br/>
            <h1 id="contacttitle">
            Contact Me
            </h1>
            <hr/>
            <br/>
          </div>

        <div class="row">
        <div class="col-md-6">

          <div class="card" id="contact">
          <img class="card-img-top" src="https://www.freepnglogos.com/uploads/email-logo-png-27.png" alt="" id="contactpics"/>
            <div class="card-body" >
              
            <h4 class="animate"><a href="mailto:judithchristinemills@rogers.com"   target="_blank">judithchristinemills@rogers.com</a></h4>
            </div>
          </div>


        </div>
        <div class="col-md-6">
          
        <div class="card" id="contact">
          <img class="card-img-top" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" alt="" id="contactpics"/>
            <div class="card-body" >
              
            <h4 class="animate"><a href="tel:+1 416-704-0408"   target="_blank">+1 416-704-0408</a></h4>
            </div>
          </div>

        </div>
        <div class="col-md-4">
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
