import React from 'react'

function ContactCard(props){
  return(
    <div className="contact-card">
      <img src={props.contact.imgSrc}/>
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>email: {props.contact.email}</p>
    </div>
    )
}
export default ContactCard;
