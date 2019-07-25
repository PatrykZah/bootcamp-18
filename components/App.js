var Counter = React.createClass({	
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	getDefaultProps: function() {
		console.log('getDefaultProps',this,)
	},
	getInitialState: function() {
		console.log('getInitialState',this)
		return {
			counter: 0
		}
	},
	componentWillMount: function() {
		console.log('componentWillMount',this)
	},
	componentDidMount: function() {
		console.log('componentDidMount',this)
	},
	

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps',this)
	},
	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate',this)
		return true
	},
	componentWillUpdate: function() {
		console.log('componentWillUpdate',this)
	},

	render: function() {
		return React.createElement('div', {className:'counter'},
			React.createElement('div', {className:'controls'},
				React.createElement('button', {onClick: this.increment}, '+'),
				React.createElement('button', {onClick: this.decrement}, '-')
			),
			React.createElement('span', {}, 'Licznik ' + this.state.counter)
		);
	}
});

Apps = React.createElement('div',{},
	React.createElement(Counter),
	React.createElement(Counter)
)

ReactDOM.render(Apps,document.getElementById('app'))
