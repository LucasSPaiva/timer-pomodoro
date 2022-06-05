import Controls from './controls.js'
import { Timer } from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
	buttonSet,
	buttonStop,
	buttonPlay,
	buttonPause,
	buttonSoundOn,
	buttonSoundOff,
	minutesDisplay,
	secondsDisplay
} from './elements.js'

const controls = Controls({
	buttonPause,
	buttonPlay,
	buttonSet,
	buttonStop,
	buttonSoundOn,
	buttonSoundOff
})

const timer = Timer({
	minutesDisplay,
	secondsDisplay,
	resetControls: controls.reset
})

const sound = Sound()

Events({ timer, controls, sound })
