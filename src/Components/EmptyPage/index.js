import './index.css'

import {MdCancel} from 'react-icons/md'
import {Link} from 'react-router-dom'

import Header from '../Header'
import SideBar from '../SideBar'

const EmptyPage = () => (
  <>
    <div>
      <Header />
      <div className="empty-bg">
        <div>
          <SideBar />
        </div>
        <div className="empty-container">
          <Link to="/home">
            <button type="button" className="create-contact">
              Create Contact
            </button>
          </Link>

          <p className="desc">
            <div>
              <MdCancel className="cancel-icon" />
            </div>
            No Contact Found <br />
            please add Contact from Create Contact Button
          </p>
        </div>
      </div>
    </div>
  </>
)

export default EmptyPage
