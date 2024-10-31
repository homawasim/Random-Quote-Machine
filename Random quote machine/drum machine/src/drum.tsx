import { AudioClip } from "./type.tsx";

interface DrumPadProps {
    audioClip: AudioClip;
}
const Drum = ({ audioClip }: DrumPadProps) => {
    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
            .play()
            .then(() => {
                console.log("played");
            }).catch(console.error);
        // document.getElementById("display").innerHTML = clip.description;


        return (
            <button className="drum-pad" id={`drum-${audioClip.keyTrigger}`} onClick={() => playSound(audioClip)}>

                <audio src={audioClip.url} id={
                    audioClip.keyTrigger} className="Clip"
                >
                </audio>{audioClip.keyTrigger}
            </button>
        )
    }
}
export default Drum;