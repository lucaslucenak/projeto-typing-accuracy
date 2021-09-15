import React from "react";

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
            <span className="matched"></span>
            <span className="remainder"></span>
        </div>
        <div className="typed-keys">asdflucasasdf</div>
        <div className="completed-words">
            <ol>
                <li>arroz</li>
                <li>feijão</li>
                <li>batata</li>
            </ol>
        </div>
    </div>
    );
};

export default App;