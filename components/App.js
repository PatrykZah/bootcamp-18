var contactFormData = {
  firstName: '',
  lastName: '',
  email: ''
};

var contacts = [
  {
    id: 1,
    firstName: 'Jan',
    lastName: 'Nowak',
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email: 'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Zbigniew',
    lastName: 'Koziol',
    email: 'zbigniew.koziol@example.com',
  }
];

var App = React.createClass({
  render() {
    return (
      <div className='app'>
        <ContactForm contact={contactFormData}/>
				<Contacts items={contacts}/>
      </div>
		)
  }
});
