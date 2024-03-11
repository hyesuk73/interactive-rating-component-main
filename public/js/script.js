window.addEventListener('DOMContentLoaded', function()
{
	const scoreItem = document.querySelectorAll('.score__item');
	const submitButton = document.querySelector('.rating-container__submit-button');
	const popUp = document.querySelector('.pop-up');
	const ratingContainer = document.querySelector('.rating-container');

	scoreItem.forEach(item => {
		item.addEventListener('click',function(event){
			scoreItem.forEach(item => {
				item.classList.remove('is-active');
			});
			this.classList.add('is-active');
		});
	});

	submitButton.addEventListener('click',function(event){
		let currentScore = document.querySelector('.score__item.is-active');
		if(currentScore) {
			popUp.classList.add('is-active');
			let finalScore = document.querySelector('.pop-up__selected-score');
			let currentScoreText = currentScore.innerText;
			finalScore.innerText = currentScoreText;
			ratingContainer.classList.add('is-disabled');
		}
	})
});