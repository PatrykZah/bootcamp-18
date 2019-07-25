
var movies = [
  {
		id: 0,
    title: 'Harry Potter',
    desc: 'Harry Potter – seria siedmiu powieści fantasy autorstwa brytyjskiej pisarki J.K. Rowling, wydawanych od 1997 do 2007 roku. Cykl przedstawia Świat Magii, czyli społeczność czarodziejów, istniejącą równolegle do świata niemagicznego, tak zwanego mugolskiego.',
		img: 'images/harrypotter.jpg'
	},
  {
		id: 1,
    title: 'Król Lew',
    desc: 'amerykański film przygodowy live-action produkcji Walt Disney Studios w reżyserii Jona Favreau, którego zarówno amerykańska jak i polska premiera została zaplanowana na 19 lipca 2019',
		img: 'images/krol-lew.jpg'
  },
  {
		id: 2,
    title: 'Ghost in the shell',
    desc: 'amerykański film akcji science fiction z 2017 wyreżyserowany przez Ruperta Sandersa na podstawie japońskiej mangi o tej samej nazwie autorstwa Masamune Shirowa.',
		img: 'images/Ghost in the shell.jfif'
  }
];

var Movie = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired
  },
	render: function() {
		return (
			//React.createElement('li',{key: this.props.movie.id}, //czemu tutaj nie moge :(
			React.createElement('li',{},
				React.createElement(MovieTitle,{movie:this.props.movie}),
				React.createElement('div', {className: 'container'},
					React.createElement(MovieDescription,{movie:this.props.movie}),
					React.createElement(MovieImage, {movie:this.props.movie})
				)
			)
		)
	}
})

var MovieTitle = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired
  },
	render: function() {
		return (
			React.createElement('h2', {}, this.props.movie.title)
		)
	}
})

var MovieDescription = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired
  },
	render: function() {
		return (
			React.createElement('p', {}, this.props.movie.desc)
		)
	}
})

var MovieImage = React.createClass({
	propTypes: {
    movie: React.PropTypes.object.isRequired
  },
	render: function() {
		return (
			React.createElement('img', {src:this.props.movie.img})
		)
	}
})

var MoviesList = React.createClass({
	propTypes: {
    movies: React.PropTypes.array.isRequired
  },

	render: function() {
		
		let moviesElements = movies.map(function(movie) {
			return React.createElement(Movie,{movie:movie,key:movie.id})
			//return React.createElement(Movie,{movie:movie})
		})
		
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmów'),
				React.createElement('ul', {}, moviesElements)
			)
		)
	}
})

ReactDOM.render(
	React.createElement(MoviesList, {movies:movies}),
	document.getElementById('app')
);

	
