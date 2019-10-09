import React from 'react';
import Contact from './components/contact.js'
function App() {
  return (
    <div className="App">
      <Contact name='Pearl Morrison' status avatar = 'https://randomuser.me/api/portraits/women/63.jpg'/>
      <Contact name='Kim Carter' status avatar = 'https://randomuser.me/api/portraits/women/81.jpg' />
      <Contact name='Becky Barnes' status avatar='https://randomuser.me/api/portraits/women/4.jpg'/>
    </div>
  );
}
export default App;
