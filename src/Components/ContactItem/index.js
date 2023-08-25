import './index.css'

import {Component} from 'react'

class ContactItem extends Component {
  render() {
    const {contactDetails, ToggleIsActive} = this.props
    console.log(contactDetails.length)
    const {firstName, lastName, isActive, id} = contactDetails

    const toggleBtn = () => {
      ToggleIsActive(id)
    }

    const starImgUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    return (
      <>
        <li className="table-row">
          <div className="table-cell name-column">
            <p>
              First Name: <br />
              <span>{firstName}</span>
            </p>
          </div>
          <hr className="separator-name" />
          <div className="table-cell mobile-no-column">
            <p>
              Last Name: <br />
              <span>{lastName}</span>
            </p>
          </div>
          <button
            type="button"
            className="favorite-icon-container"
            onClick={toggleBtn}
          >
            <img src={starImgUrl} className="favorite-icon" alt="star" />
          </button>
        </li>
      </>
    )
  }
}

export default ContactItem
