import React from 'react';
import Card from './Card';

const CardList = ({ data, imgSource, category }) => {
	return (
		<div>
		  {
			data.map((user, i) => {
				return (
					<Card 
						key={i}
						id={data[i].url.substring(data[i].url.length-3).replace(/\//g,"")} 
						imgSource={imgSource}
						category={category}
						data={data[i]}
					/>
				);
			})
		  }
		</div>
	);
}

export default CardList;