export default function Controls({
	buttonPause,
	buttonPlay,
	buttonSet,
	buttonStop,
	buttonSoundOn,
	buttonSoundOff
}) {
	function play() {
		hideShowButtons(buttonPlay, buttonPause)
		hideShowButtons(buttonSet, buttonStop)
	}

	function pause() {
		hideShowButtons(buttonPause, buttonPlay)
	}

	function reset() {
		hideShowButtons(buttonStop, buttonSet)
		hideShowButtons(buttonPause, buttonPlay)
	}

	function getMinutes() {
		let newMinutes = prompt('Quantos minutos?')
		if (!newMinutes) {
			return false
		}
		return newMinutes
	}

	function hideShowButtons(hideButton, showButton) {
		hideButton.classList.add('hide')
		showButton.classList.remove('hide')
	}

	function playSong() {
		hideShowButtons(buttonSoundOn, buttonSoundOff)
	}

	function pauseSong() {
		hideShowButtons(buttonSoundOff, buttonSoundOn)
	}

	return {
		play,
		pause,
		playSong,
		pauseSong,
		reset,
		getMinutes
	}
}
