const RatingBtn = ({ selectedRating, onHandleRating, value }) => {
    const classes = `rating ${
        (+selectedRating === value && "selected choice") || ""
    }`;

    return (
        <button className={classes} onClick={onHandleRating} value={value}>
            {value}
        </button>
    );
};

export default RatingBtn;
