let JeopardyDisplay = (props) => {

    return (

        <div>
            {/* Displaying the question to help you get started */}
            <div>Question: {props.jeopardyData.question}</div>
            <div>Category: {props.jeopardyData.category && props.jeopardyData.category.title}</div>
            <div>Value: {props.jeopardyData.value}</div>
            <div>Your Score: {props.score}</div>
            <input type="text" ref={props.userAnswer} />
            <button onClick={props.checkAnswer}>What is?</button>
        </div>

    )

}

export default JeopardyDisplay;