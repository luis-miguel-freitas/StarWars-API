import React from 'react';
import './Card.css';

const Card = ( props ) => {

	switch (props.category) {
		case 'People':    return ( PeopleCard (props) );
		case 'Planets':   return ( PlanetsCard (props) );
		case 'Films':     return ( FilmsCard (props) );
		case 'Species':   return ( SpeciesCard (props) );
		case 'Vehicles':  return ( VehiclesCard (props) );
		case 'Starships': return ( StarshipsCard (props) );
		default: 		  return ( PeopleCard (props) );
	} 
}

const PeopleCard = ({ id, imgSource, category, data }) => {

	return (
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.name}</h2>
				<div className='tl'>
					<strong>Height:</strong> {data.height} cm<br/>
					<strong>Mass:</strong> {data.mass} kg<br/>
					<strong>Hair color:</strong> {data.hair_color}<br/>
					<strong>Skin color:</strong> {data.skin_color}<br/>
					<strong>Eye color:</strong> {data.eye_color}<br/>
					<strong>Birth year:</strong> {data.birth_year}<br/>
					<strong>Gender:</strong> {data.gender}<br/>
				</div>
			</div>
		</div>
	);
}

const PlanetsCard = ({ id, imgSource, category, data }) => {

	return(
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.name}</h2>
				<div className='tl'>
					<strong>Rotation period:</strong> {data.rotation_period} days<br/>
					<strong>Orbital period:</strong> {data.orbital_period} days<br/>
					<strong>Diameter:</strong> {data.diameter}km<br/>
					<strong>Climate:</strong> {data.climate}<br/>
					<strong>Gravity:</strong> {data.gravity}<br/>
					<strong>Terrain:</strong> {data.terrain}<br/>
					<strong>Surface water:</strong> {data.surface_water}%<br/>
					<strong>Population:</strong> {data.population}<br/>
				</div>
			</div>
		</div>
	);
}

const FilmsCard = ({ id, imgSource, category, data }) => {

	return(
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.title}</h2>
				<div className='tl wordwrap'>
					<strong>Episode:</strong> {data.episode_id}<br/>
					<strong>Director:</strong> {data.director}<br/>
					<strong>Producer(s):</strong> {data.producer}<br/>
					<strong>Release date:</strong> {data.release_date}<br/>
				</div>
			</div>
		</div>
	);
}

const SpeciesCard = ({ id, imgSource, category, data }) => {

	return (
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.name}</h2>
				<div className='tl'>
					<strong>Classification:</strong> {data.classification}<br/>
					<strong>Designation:</strong> {data.designation}<br/>
					<strong>Average height:</strong> {data.average_height} cm<br/>
					<strong>Skin colors:</strong> {data.skin_colors}<br/>
					<strong>Hair colors:</strong> {data.hair_colors}<br/>
					<strong>Eye colors:</strong> {data.eye_colors}<br/>
					<strong>Average lifespan:</strong> {data.average_lifespan} years<br/>
					<strong>Language:</strong> {data.language}<br/>
				</div>
			</div>
		</div>
	);
}

const VehiclesCard = ({ id, imgSource, category, data }) => {

	return (
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.name}</h2>
				<div className='tl'>
					<strong>Model:</strong> {data.model}<br/>
					<strong>Manufacturer:</strong> {data.manufacturer}<br/>
					<strong>Cost:</strong> {data.cost_in_credits} credits<br/>
					<strong>Length:</strong> {data.length} m<br/>
					<strong>Max atmosphering speed:</strong> {data.max_atmosphering_speed} km/h<br/>
					<strong>Crew:</strong> {data.crew}<br/>
					<strong>Passengers:</strong> {data.passengers}<br/>
					<strong>Cargo capacity:</strong> {data.cargo_capacity}<br/>
					<strong>Consumables:</strong> {data.consumables}<br/>
					<strong>Vehicle class:</strong> {data.vehicle_class}<br/>
				</div>
			</div>
		</div>
	);
}

const StarshipsCard = ({ id, imgSource, category, data }) => {

	return (
		<div className="tc f7 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="shadow-5" alt={`${category}`} height="220" src={`${imgSource}${id}.jpg`} />
			<div>
				<h2>{data.name}</h2>
				<div className='tl'>
					<strong>Model:</strong> {data.model}<br/>
					<strong>Manufacturer:</strong> {data.manufacturer}<br/>
					<strong>Cost:</strong> {data.cost_in_credits} credits<br/>
					<strong>Length:</strong> {data.length} m<br/>
					<strong>Max atmosphering speed:</strong> {data.max_atmosphering_speed}<br/>
					<strong>Crew:</strong> {data.crew}<br/>
					<strong>Passengers:</strong> {data.passengers}<br/>
					<strong>Cargo capacity:</strong> {data.cargo_capacity} metric tons<br/>
					<strong>Consumables:</strong> {data.consumables}<br/>
					<strong>Hyperdrive rating:</strong> {data.hyperdrive_rating}<br/>
					<strong>MGLT:</strong> {data.MGLT}<br/>
					<strong>Starship class:</strong> {data.starship_class}<br/>
				</div>
			</div>
		</div>
	);
}

export default Card;