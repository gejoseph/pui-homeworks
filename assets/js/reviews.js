
// REVIEWS PAGE

var allreviews = document.getElementById("all-reviews")

var filmsWithCompleteReviews = reviewObjects.filter(review => review.review.length > 0)
console.log(filmsWithCompleteReviews)

for (let i = 0; i < filmsWithCompleteReviews.length; i++){

    allreviews.insertAdjacentHTML("beforeend", 
    
        `<a id="review-${filmsWithCompleteReviews[i].film.title}" class="review-row" href="film.html">
            <img src="${filmsWithCompleteReviews[i].film.poster}">
            <div class="review-row-text">
                <h1 class="review-title"><strong>${filmsWithCompleteReviews[i].film.title.toUpperCase()}</strong><span class="review-year">(${filmsWithCompleteReviews[i].film.year})</span></h1>
                <h4>Starring ${filmsWithCompleteReviews[i].film.stars}</h4>
                <h4>Directed by ${filmsWithCompleteReviews[i].film.directors}</h4><br><br>
                <h4><strong>${filmsWithCompleteReviews[i].review[0][0]}</strong>: ${filmsWithCompleteReviews[i].review[0][1]}<br><strong> Read More...</strong></h4>
            </div>
        </a>`
    
    )

    document.getElementById("review-" + filmsWithCompleteReviews[i].film.title).addEventListener("click", function (e) {
            
        localStorage.setItem("film-page-selected", filmsWithCompleteReviews[i].film.title);
        console.log(localStorage.getItem("film-page-selected"))

    })

}