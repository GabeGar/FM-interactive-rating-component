import StarIcon from "./components/StarIcon.jsx";

const App = () => {
    return (
        <div className="page">
            <div className="card">
                <main className="content">
                    <div className="star-container">
                        <StarIcon />
                    </div>
                    <h2 className="title">How did we do?</h2>
                    <p className="description">
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </p>
                    <section className="ratings">
                        <div className="rating-container">
                            <span className="one">1</span>
                        </div>
                        <div className="rating-container">
                            <span className="two">2</span>
                        </div>
                        <div className="rating-container">
                            <span className="three">3</span>
                        </div>
                        <div className="rating-container">
                            <span className="four">4</span>
                        </div>
                        <div className="rating-container">
                            <span className="five">5</span>
                        </div>
                    </section>
                    <section className="action">
                        <button className="submit">Submit</button>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
