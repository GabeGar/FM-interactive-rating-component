const RatingBtn = ({ selectedRating, onHandleRating, value }) => {
    const classes = `rating ${
        (Number(selectedRating) === value && "selected choice") || ""
    }`;

    return (
        <button className={classes} onClick={onHandleRating} value={value}>
            {value}
        </button>
    );
};

export default RatingBtn;
