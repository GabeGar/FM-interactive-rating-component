import { useState } from "react";

import StarIcon from "./components/StarIcon";
import ThankYouIllustration from "./components/ThankYouIllustration";
import RatingBtn from "./components/RatingBtn";

const App = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const handleRating = (e) => {
        setSelectedRating(e.target.value);
    };

    const handleSubmit = () => {
        if (!selectedRating) return;

        setHasSubmitted((hasSubmitted) => !hasSubmitted);
    };

    return (
        <div className="page">
            <div className="card">
                <main className="content">
                    {!hasSubmitted && (
                        <>
                            <div className="star-container">
                                <StarIcon />
                            </div>
                            <h2 className="title">How did we do?</h2>
                            <p className="description">
                                Please let us know how we did with your support
                                request. All feedback is appreciated to help us
                                improve our offering!
                            </p>
                            <section className="ratings">
                                {Array.from({ length: 5 }).map((_, i) => {
                                    const value = i + 1;
                                    return (
                                        <RatingBtn
                                            key={value}
                                            selectedRating={selectedRating}
                                            onHandleRating={handleRating}
                                            value={value}
                                        />
                                    );
                                })}
                            </section>
                            <section className="action">
                                <button
                                    className="submit"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </section>
                        </>
                    )}
                    {hasSubmitted && (
                        <section className="thank-you">
                            <ThankYouIllustration />
                            <p className="selected-rating">
                                You selected {selectedRating} out of 5
                            </p>
                            <h2>Thank You!</h2>
                            <p className="gratitude">
                                We appreciate you taking the time to give a
                                rating. If you ever need more support,
                                don&apos;t hesitate to get in touch!
                            </p>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
