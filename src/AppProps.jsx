import React from 'react';
import ContactCard from './ContactCard'
function App(){
  return (
    <div className="contacts">
      <ContactCard
        contact = {{name: 'Mr. Whiskrson', imgSrc: 'http://placekitten.com/300/200', phone: '9266995423', email: 'jraman05@gmail.com'}} />
      <ContactCard
       contact = {{name: 'Mr. Manu Solanki', imgSrc: 'http://placekitten.com/400/200', phone: '9266995423', email: 'jraman05@gmail.com'}}
      />
      <ContactCard
      contact = {{name: 'Mr. Kenwilimson', imgSrc: 'http://placekitten.com/400/300', phone: '9266995423', email: 'jraman05@gmail.com'}}

      />
      <ContactCard
      contact = {{name: 'Mr. Petirson', imgSrc: 'http://placekitten.com/200/100', phone: '9266995423', email: 'jraman05@gmail.com'}}
      />
    </div>
    )
}
export default App;
