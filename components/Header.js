import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import { useUrlSearchParams } from "use-url-search-params";

export default function Header(props) {
    const [params, setParams] = useUrlSearchParams();
    const name = params.thanks;
    return (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="content">
            <div className="inner">
            <h1>Tesla Model 3</h1>
                <p><h3>
                {name === undefined ? "Detroit rental": `Thanks for renting, ${name}!`}
                </h3>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('learn')}}>Learn</a></li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('photos')}}>Photos</a></li>
            </ul>
        </nav>
        { name === undefined ?
        <nav>
            <ul>
                <li><a href="https://turo.com/us/en/car-rental/united-states/warren-mi/tesla/model-3/827649">Rent on Turo</a></li>
            </ul>
        </nav>
        : '' }
        <nav><ul><li>
            <a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a>
        </li></ul></nav>
    </header>
    ); 
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

