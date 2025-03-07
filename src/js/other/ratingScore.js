export function ratings() {
    console.log('ratings works');
    const ratings = document.querySelectorAll('.rating')

    if (ratings.length > 0) {
        initRatings()
    }
    
    function initRatings() {
        let ratingActive, ratingValue;
    
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }
    
        function initRating(rating) {
            initRatingVars(rating);
            setRatingActiveWidth();
    
            if (rating.classList.contains('rating_set')) {
                setRating(rating)
            }
        }
    
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active')
            ratingValue = rating.querySelector('.rating__value')
        }
    
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }
    
        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item')
    
            for (let index = 0; index < ratingItems.length; index++) {
                const ratingItem = ratingItems[index];
                ratingItem.addEventListener("mouseenter", function (e) {
                    initRatingVars(rating)
                    setRatingActiveWidth(ratingItem.value)
                })
                ratingItem.addEventListener("mouseleave", function (e) {
                    setRatingActiveWidth()
                })
                ratingItem.addEventListener("click", function (e) {
                    initRatingVars(rating)
                    if (rating.dataset.ajax) {
                        setRatingValue(ratingItem.value, rating)
                    } else {
                        ratingValue.innerHTML = index + 1
                        setRatingActiveWidth()
                    }
                })
            }
        }
    }
}
