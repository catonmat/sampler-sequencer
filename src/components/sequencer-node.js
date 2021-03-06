import React, { useState, useEffect } from 'react'

const SequencerNode = ({beat, note, octave, synth, spot, switchState, drum}) => {

  const [active, changeActive] = useState(false)

  const shouldPlay = () => {
    if (active && spot === beat && switchState) {
      synth.value.triggerAttackRelease(`${note.value}${octave.value}`, "2n")
    }
    else if (active && spot === beat && !switchState) {
      const sound = sessionStorage.getItem(drum)
      const audio = new Audio(sound)
      audio.play()
    }
  }

  useEffect(() => {
    shouldPlay()
  })

  return(
    <div
      className = {
        active
          ? spot === beat
            ? "audio-node active on-beat"
            : "audio-node active"
          : spot === beat
            ? "audio-node on-beat"
            : "audio-node"
      }
      onClick = {() => changeActive(!active)}
    />
  )
}

export default SequencerNode
