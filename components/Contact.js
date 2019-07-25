var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render() {
		return (
		<div className='contactItem'>
			<img className='contactImage' src='images/Graphicloads-100-Flat-2-Contacts.ico'></img>
			<p className='contactLabel'>{this.props.item.firstName}</p>
			<p className='contactLabel'>{this.props.item.lastName}</p>
			<a className='contactEmail' href={'mailto:'+this.props.item.email}>
				{this.props.item.email}
			</a>
		</div>
		)
	}
});
