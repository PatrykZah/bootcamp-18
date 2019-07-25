var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement(Input, {
          type: 'text',
          placeholder: 'Imię',
          defaultValue: this.props.contact.firstName,
        }),
        React.createElement(Input, {
          type: 'text',
          placeholder: 'Nazwisko',
          defaultValue: this.props.contact.lastName,
        }),
        React.createElement(Input, {
          type: 'email',
          placeholder: 'Email',
          defaultValue: this.props.contact.email,
        }),
        React.createElement('button', {type: 'button'}, "Dodaj kontakt")
      )
    )
  },
})

var Input = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('label', {},
        React.createElement('input', {
          type: this.props.type,
					//placeholder: this.props.placeholder,
          defaultValue: this.props.defaultValue,
        }),
				React.createElement('span', {}, this.props.placeholder)
			)
    )
  },
})