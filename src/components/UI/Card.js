import './Card.css';

function Card(props) {
    console.log('Card props:', props);
    return (<div className={"card " + props.viewMode}>{props.children}</div>)
}

export default Card;