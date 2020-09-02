import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Select from 'react-select'
import { notes, octaves, synths } from '../data/synth-data'

function MpcButtonPair() {

  // Tone States
  const [note1, setNote1] = useState(notes[0])
  const [note2, setNote2] = useState(notes[0])

  const [octave1, setOctave1] = useState(octaves[0])
  const [octave2, setOctave2] = useState(octaves[0])

  const [synth1, setSynth1] = useState(synths[0])
  const [synth2, setSynth2] = useState(synths[0])

  // Menu State
  const [menuOpened1, setMenu1] = useState(false)
  const [menuOpened2, setMenu2] = useState(false)

  // Events MGMT
  let t0

  const handleDown = (synth, note, octave) => {
    t0 = performance.now()
    setMenu1(false)
    setMenu2(false)
    console.log(synth)
    synth.triggerAttackRelease(`${note}${octave}`, "2n")
  }

  const handleUp = (menuToggle, menuOpened, menuNonToggle) => {
    if ( performance.now() - t0 > 500 ) {
      menuToggle(!menuOpened)
      menuNonToggle(false)
      t0 = 0
    }
  }

  return (
    <React.Fragment>
      <div className="button-container">
        <div
          className = {menuOpened1 ? 'mpc-button ripple menuOpened' : 'mpc-button ripple'}
          onMouseDown={()=> {
            handleDown(synth1.value, note1.value, octave1.value)
          }}
          onMouseUp={()=>{
            handleUp(setMenu1, menuOpened1, setMenu2)
          }}
          onTouchStart={()=> {
            handleDown(synth1.value, note1.value, octave1.value)
          }}
          onTouchEnd={()=>{
            handleUp(setMenu1, menuOpened1, setMenu2)
          }}
        />
        <div
          className = {menuOpened2 ? 'mpc-button ripple menuOpened' : 'mpc-button ripple'}
          onMouseDown={()=> {
            handleDown(synth2.value, note2.value, octave2.value)
          }}
          onMouseUp={()=>{
            handleUp(setMenu2, menuOpened2, setMenu1)
          }}
          onTouchStart={()=> {
            handleDown(synth2.value, note2.value, octave2.value)
          }}
          onTouchEnd={()=>{
            handleUp(setMenu2, menuOpened2, setMenu1)
          }}
        />
      </div>
      <Collapse isOpened={menuOpened1}>
        <Select
          options={notes}
          value={note1}
          onChange={selectedOption => setNote1(selectedOption)}
        />
        <Select
          options={octaves}
          value={octave1}
          onChange={selectedOption => setOctave1(selectedOption)}
        />
        <Select
          options={synths}
          value={synth1}
          onChange={selectedOption => setSynth1(selectedOption)}
        />
      </Collapse>
      <Collapse isOpened={menuOpened2}>
        <Select
          options={notes}
          value={note2}
          onChange={selectedOption => setNote2(selectedOption)}
        />
        <Select
          options={octaves}
          value={octave2}
          onChange={selectedOption => setOctave2(selectedOption)}
        />
        <Select
          options={synths}
          value={synth2}
          onChange={selectedOption => setSynth2(selectedOption)}
        />
      </Collapse>
    </React.Fragment>
  )
}

export default function Mpc() {
  return (
    <div className = 'mpc-buttons'>
      <MpcButtonPair />
      <MpcButtonPair />
      <MpcButtonPair />
    </div>
  )
}
