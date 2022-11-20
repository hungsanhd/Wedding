function playAudio(src) {
    var audioElement = new Audio(src);
    var promise = audioElement.play();
	if (promise !== undefined) {
		promise.then(_ => {
		  // Autoplay started!
		}).catch(error => {
			audioElement.muted = true;
            audioElement.play();
		});
	}
    return audioElement
}

const sequences = ['assets/audio/Yeu-5-Rhymastic.mp3', 'assets/audio/EmOi-VuCatTuong-4767367.mp3']

// play audio
let index = 0
const audioElement = playAudio(sequences[index])
audioElement.addEventListener('ended', (e) => {
    index++
    if (index < sequences.length) {
        audioElement.src = sequences[index]
        audioElement.play();
    }
});