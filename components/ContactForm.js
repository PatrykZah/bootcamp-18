var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render() {
		//console.log(this)
		//console.log(this.props.contact.firstName)
    return (
			<form className='contactForm'>
				<Input
          type= 'text'
          placeholder= 'Imię'
          defaultValue= {this.props.contact.firstName}
        />
				<Input
          type= 'text'
          placeholder= 'Nazwisko'
          defaultValue= {this.props.contact.lastName}
        />
				<Input
          type= 'text'
          placeholder= 'Email'
          defaultValue= {this.props.contact.email}
        />
			</form>
    )
  },
})

var Input = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <label>
        <input type={this.props.type} defaultValue={this.props.defaultValue}/>
				<span>{this.props.placeholder}</span>
			</label>
    )
  },
})