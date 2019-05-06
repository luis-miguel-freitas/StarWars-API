import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa1 ba bw2 b--green bg-lightest-blue'
				type='search' 
				placeholder='Search criteria...'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;