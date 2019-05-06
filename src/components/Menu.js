import React from 'react';
import './Menu.css';

const Menu = ({ options, selected, menuClick }) => {
	var li = [];
	for (var i=0; i<options.length; i++)
	{
		if (selected === i)
			li.push(<li className='selected' data-id={i} key={i}>{options[i].name}</li>);
		else
			li.push(<li onClick={menuClick} data-id={i} key={i}>{options[i].name}</li>);
	}
	return (
	  <nav className="sticky">
	      <ul>
	      	{li}
	  	  </ul>
	  </nav>
	);
}

export default Menu;