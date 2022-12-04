import React from 'react'
import './button.css'
import { useState } from 'react';
const Button = () => {
	const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <div style={{ display : 'initial'}}>
        <header class="header">
	<div class="brand-box">
		<span class="brand">LUNA</span>
	</div>
	
	<div class="text-box">
		<h1 class="heading-primary">
			<span class="heading-primary-main">Wanna know about something?</span>
			<span class="heading-primary-sub">We'll help you</span>
		</h1>
    <a class=" btn btn-white" onClick={handleClick} >Ask a Question</a>
		{isShown && (
        <div style={{marginBottom : '-900px',marginTop : '20px' }}>
		    <h1 style={{textDecoration : 'overline'}}> Click on the button<br/>
               Fill the Form<br/>
                       We'll answer your Queries shortly <br/>
                              through mail</h1>
        </div>
      )}
      {/* 👇️ show component on click */}
      {isShown || <Box />}
	</div>
</header>
     {/*<button class="button-56" role="button">Button 55</button>*/}
    </div>
  )
}
export default Button;

function Box() {
	return (
	  <div>
		<div class="wrapper">
    <form class="former">
      <div class="pageTitle titler">Post Your Query</div>
      <input type="text" class="name formEntrypoint" placeholder="Name" />
      <input type="text" class="email formEntrypoint" placeholder="Email"/>
      <textarea class="message formEntrypoint" placeholder="Message"></textarea>
      <button class="submitclose formEntrypoint" onclick="thanks()">Submit</button>
    </form>
  </div>
	  </div>
	);
  }
