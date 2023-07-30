const slider = new Vue ({
	el: '#slider',
	
	data: () => ({
		val: 70
	}),
	
	// Just for fun, set the value randomly each time the component loads. (Means the value of 70 above really doesn't do anything.)
	mounted() {
		this.val = Math.floor(Math.random() * 101)
	},
	
	computed: {
		// This is not ideal just because it needs knowledge of how wide the track is.
		// Ideally I'd like to do this more dynamically so it works with any track length,
		// but for the sake of smooth animations I kept it like this.
		getPlacement() {
			if (window.matchMedia("(orientation: landscape)").matches) {
				return ((this.val * 13)) + `%`;
			}
			else {
				return ((this.val * 11)) + `%`;
			}
		},
		
		// This is kinda hacky, but if the background is rounded at too low a value, you can see it peeking out from behind the emoji.
		greaterThanFifty() {
			return this.val > 50 ? `var(--roundness)` : `0`;
		},
		
		// Makes the color smoothly move from red to orange to yellow
		getHappinessColor() {
  		return `rgba(255, ${106 + (103 / 100 * this.val)}, ${(Math.floor(this.val * -1 / 7.692)) + 13}`;
		},
		
		// Adjusts the amount of yellow in the filled slider
		getSliderBackground() {
			return `linear-gradient(to right, var(--orange), ${(this.val * -1) + 125}%, var(--yellow))`
		},
		
		// Changes which emoji is displayed
		getHappiness() {
			let moods = ["😡","😠","😦","☹️","🙁","😐","🙂","😊","😄","😃","😍"]
			
			if (this.val === 0) {
				return "🤬";
			} 
				
			return moods[(Math.floor(this.val / 10))];
		}
	}
});