import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Photography by <a href="https://www.flickr.com/photos/edserecky/">Ed Serecky</a>. Design by <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js</a>. &copy; Steve Sienkowski 2020</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
