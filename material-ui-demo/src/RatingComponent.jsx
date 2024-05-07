import { useState } from 'react';
import Rating from '@mui/material/Rating';

const RatingComponent = () => {
    const [ratingVal, setRatingVal] = useState(2);

    const changeRating = (e) => { setRatingVal(e.target.value); }
    return (
        <>
            <h2>Rating : {ratingVal}</h2>
            <Rating
                name='simple-controlled'
                value={ratingVal}
                onChange={changeRating}
            />
        </>
    )

}
export default RatingComponent;