import {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonSoundOn,
	buttonSoundOff,
	buttonSet
} from './elements.js'

export default function ({ timer, controls, sound }) {
	buttonPlay.addEventListener('click', function () {
		controls.play()
		timer.countdown()
		sound.pressButton()
	})

	buttonPause.addEventListener('click', function () {
		controls.pause()
		timer.hold()
		sound.pressButton()
	})

	buttonStop.addEventListener('click', function () {
		controls.reset()
		timer.reset()
		timer.hold()
		sound.pressButton()
	})

	buttonSoundOn.addEventListener('click', function () {
		controls.playSong()
		sound.bgAudio.pause()
	})

	buttonSoundOff.addEventListener('click', function () {
		controls.pauseSong()
		sound.bgAudio.play()
	})

	buttonSet.addEventListener('click', function () {
		let newMinutes = controls.getMinutes()
		if (!newMinutes) {
			timer.reset()
			return
		}

		timer.updateDisplay(newMinutes, 0)
		timer.updateMinutes(newMinutes)
	})
}
