import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="learn" className={`${this.props.article === 'learn' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Learn</h2>
          <span className="image main">Car and Driver Model 3 overview:
          <iframe id="video" width="560" height="315" src={this.props.videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></span>
          <span className="image main">Model 3 Quick Tutorial:
          <iframe id="video" width="560" height="315" src={this.props.videoSrc2} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></span>
          <span className="image main">Click the Tesla logo below to learn about the Model 3 from Tesla.<a href="https://www.tesla.com/support/Model-3-videos"><img src="/static/images/tesla-logo.jpg" alt="Tesla" /></a></span>
          {close}
        </article>

        <article id="photos" className={`${this.props.article === 'photos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Photos</h2>
          <span className="image main">
            <a href="/static/images/outside1.jpg">
              <img src="/static/images/outside1.jpg" alt="" /></a>
              Tesla Model 3
          </span>
          <span className="image main">
            <a href="/static/images/inside.jpg">
              <img src="/static/images/inside.jpg" alt="" /></a>
              Interior
          </span>
          <span className="image main">
            <a href="/static/images/inside2.jpg">
              <img src="/static/images/inside2.jpg" alt="" /></a>
              Interior 2
          </span>
          <span className="image main">
            <a href="/static/images/outside2.jpg">
              <img src="/static/images/outside2.jpg" alt="" /></a>
              Front
          </span>
          <span className="image main">
            <a href="/static/images/outside3.jpg">
              <img src="/static/images/outside3.jpg" alt="" /></a>
              Rear
          </span>
          <span className="image main">
            <a href="/static/images/side.jpg">
              <img src="/static/images/side.jpg" alt="" /></a>
              Side
          </span>
          <span className="image main">
            <a href="/static/images/driver.jpg">
              <img src="/static/images/driver.jpg" alt="" /></a>
              Driver Seat
          </span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/me.jpg" alt="" /></span>
          <p>Thanks for renting!<br/>-Steve</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul> */}
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  videoSrc: PropTypes.string,
  videoSrc2: PropTypes.string
}

export default Main