function Welcome(props){

    return (
        <div className="Welcome">
            <h1>Hello, {props.name || "Guest"} {props.iceCream}!</h1>
        </div>
    )

}

export default Welcome;