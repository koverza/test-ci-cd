export function video() {
    console.log('video works');
    let video = document.querySelector('#video')
    let progress = document.querySelector('#progress')

    document.querySelector('#play').onclick = play;
    document.querySelector('#pause').onclick = pause;
    document.querySelector('#stop').onclick = stop;
    document.querySelector('#more').onclick = more;
    document.querySelector('#slow').onclick = slow;
    document.querySelector('#normal').onclick = normal;
    document.querySelector('#volume').oninput = volume;

    video.ontimeupdate = progressUpdate

    function play() {
        video.play()
    }
    function pause() {
        video.pause()
    }
    function stop() {
        video.pause()
        video.currentTime = 0
    }
    function more() {
        video.play()
        video.playbackRate = 5
    }
    function slow() {
        video.play()
        video.playbackRate = 0.5
    }
    function normal() {
        video.play()
        video.playbackRate = 1
    }
    function volume() {
        let v = this.value
        console.log(v);
        video.volume = v / 100
    }

    function progressUpdate() {
        let d = video.duration
        let c = video.currentTime
        progress.value = 100 * c / d
    }
}