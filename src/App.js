import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Social from './components/Social';

function App() {
  const [categories] = useState([
    {
      name: 'Group',description: 'Group projects I have assisted in',},
    { name: 'solo', description: 'Projects I have worked on' },
    { name: 'resume', description: 'send me a request'},
  
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            
            <About></About>
            <Social></Social>
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
         
      </main>
    </div>
  );
}

export default App;
