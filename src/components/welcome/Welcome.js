import { useParams } from "react-router-dom";

function Welcome(props){

    let { name } = useParams();

    return (
        <div className="Welcome">
            <h1>Hello, {props.name || name || "Guest"} {props.iceCream}!</h1>
        </div>
    )

}

export default Welcome;