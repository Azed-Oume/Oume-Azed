import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter votre logique de traitement du formulaire ici
    // Par exemple, envoyer les données au serveur ou effectuer une action spécifique.
    console.log(this.state);
  };

  render() {
    return (
      <div className='contact'>
        <h2 className='contact__title'>Contactez-nous</h2> 
        <form onSubmit={this.handleSubmit}>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor="name">Nom :</label>
            <input className='contact__form__label'
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor="email">Email :</label>
            <input className='contact__form__label'
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor="subject">Sujet :</label>
            <input className='contact__form__label'
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor="message">Message :</label>
            <textarea className='contact__form__label'
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className='contact__form'>
            <button className='contact__form__label' type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
