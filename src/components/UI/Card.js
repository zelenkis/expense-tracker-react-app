import './Card.css';

function Card(props) {
    return (<div className={"card " + props.viewMode}>{props.children}</div>)
}

export default Card;