import React from 'react'
import "./navbar.css"

function child({n, a, v, y}) {
  return (
   <>	
	<div className='navbar'>
		<div className='space'>
			<h1>LOGO</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Project</li>
			</ul>
		</div>
   </div>
   </>
  )
}

export default child