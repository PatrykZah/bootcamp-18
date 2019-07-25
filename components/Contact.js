var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'images/Graphicloads-100-Flat-2-Contacts.ico'
        }),
        React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        ),/*
				React.createElement('img', {
          className: 'contactInfo',
          src: 'images/info.ico'
        })
				*/
      )
    )
  },
});