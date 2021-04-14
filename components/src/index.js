// Import the react and react dom libraries
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                time="12:00"
                text="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Dima"
                time="15:30"
                text="Cool post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Vasya"
                time="23:04"
                text="Great post!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"))