import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import Header from '../Header'
import SideBar from '../SideBar'

import ContactItem from '../ContactItem'

class HomeContact extends Component {
  state = {
    contactsList: [],
    firstName: '',
    lastName: '',
    errorMSg: '',
  }

  onAddContact = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    const newContact = {
      id: uuidv4(),
      firstName,
      lastName,
      isActive: false,
    }
    if (firstName.length === 0 || lastName.length === 0) {
      this.setState({errorMSg: '*Required Details'})
    } else {
      this.setState({errorMSg: ''})
    }
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      firstName: '',
      lastName: '',
    }))
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  isActive = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (eachContact.id === id) {
          return {...eachContact, isActive: !eachContact.isActive}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {firstName, lastName, contactsList, errorMSg} = this.state

    return (
      <div>
        <Header />
        <div className="app-container">
          <div>
            <SideBar />
          </div>
          <div className="contact-container">
            <form
              className="contact-form-container"
              onSubmit={this.onAddContact}
            >
              <div className="contact-container">
                <div>
                  <label htmlFor="firstName" className="name-label">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    id="firstName"
                    onChange={this.onChangeFirstName}
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="name-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="input"
                    value={lastName}
                    onChange={this.onChangeLastName}
                  />
                </div>

                <div className="active-status">
                  <h1>Status</h1>
                  <div className="radio-input">
                    <div>
                      <input type="radio" id="active" name="status" />
                      <label htmlFor="active" className="radio-label">
                        Active
                      </label>
                    </div>
                    <div>
                      <input type="radio" id="InActive" name="status" />
                      <label htmlFor="InActive" className="radio-label">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>

                <p className="error-msg">{errorMSg}</p>
              </div>
              <div>
                <button type="submit" className="button">
                  Save Contact
                </button>
              </div>
            </form>
            <ul className="contacts-table">
              {contactsList.map(eachContact => (
                <ContactItem
                  key={eachContact.id}
                  contactDetails={eachContact}
                  ToggleIsActive={this.isActive}
                  ErrorMsg={errorMSg}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContact
