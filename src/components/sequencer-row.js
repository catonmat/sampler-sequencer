import React, { useState } from 'react'
import Select from 'react-select';
import { FiMoreVertical } from 'react-icons/fi'
import SequencerNode from './sequencer-node'
import { notes, octaves, synths } from '../data/synth-data'

const selectStyle = {
  valueContainer: () => ({
    width: "100px",
    paddingLeft: "20px"
  })
}

const SequencerRow = ({beat}) => {

  // Select States
  const [note, setNote] = useState(notes[0])
  const [octave, setOctave] = useState(octaves[0])
  const [synth, setSynth] = useState(synths[0])

  return (
    <React.Fragment>
      <div className="select-container">
        <Select
          styles={selectStyle}
          options={synths}
          value={synth}
          onChange={selectedOption => setSynth(selectedOption)}
        />
        <Select
          styles={selectStyle}
          options={notes}
          value={note}
          onChange={selectedOption => setNote(selectedOption)}
        />
        <Select
          styles={selectStyle}
          options={octaves}
          value={octave}
          onChange={selectedOption => setOctave(selectedOption)}
        />
      </div>

      <div className="audio-nodes">
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {1}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {2}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {3}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {4}/>
        <FiMoreVertical style = {{ fontSize: "20px"}} />
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {5}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {6}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {7}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {8}/>
        <FiMoreVertical style = {{ fontSize: "20px"}} />
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {9}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {10}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {11}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {12}/>
        <FiMoreVertical style = {{ fontSize: "20px"}} />
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {13}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {14}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {15}/>
        <SequencerNode
          beat = {beat}
          note = {note}
          octave = {octave}
          synth = {synth}
          spot = {16}/>
      </div>
    </React.Fragment>
  )
}

export default SequencerRow
