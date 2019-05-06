import React, { Component } from 'react';
import Menu from '../components/Menu';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import './App.css';

const menu = [{ 
				name: 'People',
				source: 'https://swapi.co/api/people/',
				numPages: 9,
				images: 'https://starwars-visualguide.com/assets/img/characters/'
			}, {
				name: 'Planets',
				source: 'https://swapi.co/api/planets/',
				numPages: 7,
				images: 'https://starwars-visualguide.com/assets/img/planets/'
			}, {
				name: 'Films',
				source: 'https://swapi.co/api/films/',
				numPages: 1,
				images: 'https://starwars-visualguide.com/assets/img/films/'
			}, {
				name: 'Species',
				source: 'https://swapi.co/api/species/',
				numPages: 4,
				images: 'https://starwars-visualguide.com/assets/img/species/'
			}, {
				name: 'Vehicles',
				source: 'https://swapi.co/api/vehicles/',
				numPages: 4,
				images: 'https://starwars-visualguide.com/assets/img/vehicles/'
			}, {
				name: 'Starships',
				source: 'https://swapi.co/api/starships/',
				numPages: 4,
				images: 'https://starwars-visualguide.com/assets/img/starships/'
			}];


class App extends Component {

	constructor() {
		super()
		this.state = {
			searchfield: '',
			selectedMenu: 0,
			people: [], 
			planets: [], 
			films: [],
    		species: [], 
    		vehicles: [], 
    		starships : [],
		}
	}

	componentDidMount() {
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	onMenuClick = (event) => {
		this.setState({ selectedMenu: Number(event.currentTarget.dataset.id) });
	}

	render() {
	    const { searchfield, selectedMenu } = this.state;
	    let filterField = 'name';
	    let data = [];

	   	switch (selectedMenu) {
	   		case 0: data = this.state.people;
	   				break;
	   		case 1: data = this.state.planets;
	   				break;
	   		case 2: data = this.state.films;
	   				filterField = 'title';
	   				break;
	   		case 3: data = this.state.species;
	   				break;
	   		case 4: data = this.state.vehicles;
	   				break;
	   		case 5: data = this.state.starships;
	   				break;
	   		default: console.log('Invalid selectedMenu value:', selectedMenu);
	   	}

	    if (data.length === 0)
	    {
	    	const proxyUrl = '';
	        const pages = menu[selectedMenu].numPages;
	   	    var urls = [];
	 
	        for (var i=0; i<pages; i++) {
	        	urls.push(proxyUrl + menu[selectedMenu].source + `?page=${i+1}`);
	        }

	        Promise.all(urls.map(url =>
	           fetch(url).then(data => data.json())
	        ))
	          .then(array => {
	          	 for (var i=0; i<pages; i++)
	          	 	data = data.concat(array[i].results);
	 
  	    	 	 switch (selectedMenu) {
				 	case 0: this.setState({ people: data });
				 			break;
				 	case 1: this.setState({ planets: data });
				 			break;
				 	case 2: this.setState({ films: data });
				 			filterField = 'title';
				 			break;
				 	case 3: this.setState({ species: data });
				 			break;
				 	case 4: this.setState({ vehicles: data });
				 			break;
				 	case 5: this.setState({ starships: data });
				 			break;
	   				default: console.log('Invalid selectedMenu value:', selectedMenu);
				 }

				 return (data);
			})
	        .catch(err => console.log('ughhhh fix it!', err));
	    }

		const filteredData = data.filter(data => {
			return data[filterField].toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div className='tc'>
				<h1 className='f1 ttu'>&nbsp;Star Wars&nbsp;</h1>
				<Menu options={menu} selected={selectedMenu} menuClick={this.onMenuClick} />				
				<p></p>
				<SearchBox searchChange={this.onSearchChange} />
				<p></p>
				<Scroll>
					{
					  !data.length ?
					  <div className="tc">
					  	<p></p>
					  	<a href="/" className="spinner">Spinner</a>
					  </div> : 
					  <CardList data={filteredData} imgSource={menu[selectedMenu].images} category={menu[selectedMenu].name} />
					}
				</Scroll>
				<div className="tl f6 yellow lh-copy tracked">
					@Luís Miguel Freitas 2019
				</div>
			</div>
		);
	}
}

export default App;