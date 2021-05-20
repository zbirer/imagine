'use strict'
const DEFAULT_NOTE = {
    instrument: null,
    pitch: null,
    length: null // changed from 'quarter'
}
const HEADER = {
    header: ''
}

const characterToFigureMap = {
	c: "circle",
	r: "rect",
	t: "tri",
	x: "x",
	q: "quiet",
	default: "circle"
}

const characterToLengthMap = {
	"1": 'whole',
	"2": 'half',
	"4": 'quarter',
	"8": 'eighth',
	"6": 'sixteenth', // '6' is instead of '16'
    default: 'quarter'
}

const characterToPitchMap = {
    "c": 'red',
    "d": 'brown',
    "e": 'grey',
    "f": 'blue',
    "g": 'black',
    "a": 'yellow',
    "b": 'green',
    
	//--boom walkers additional colors--//
    "o": 'boom-orange',
    "n": 'boom-green',
    "p": 'boom-purple',
    "i": 'boom-pink',

    default: 'red'
}

const noteWidthMap = {
	"whole":     16,
	"half":      8,
	"quarter":   4,
	"eighth":    2,
	"sixteenth": 1
}

let sizeInfo4 = {
	size: 4,
	maxWidth: 16,
	chartClass: "chart4",
	barClass: "bar4"
}

let sizeInfo3 = {
	size: 3,
	maxWidth: 12,
    chartClass: "chart3",
	barClass: "bar3"
}

let sizeInfo = sizeInfo4

function setSize(newSize) {
	sizeInfo = (newSize == 3) ? sizeInfo3 : sizeInfo4
	console.log("new size ", sizeInfo)
    createNoteObj(document.getElementById("notes").value)
}

function setTool(name) {
	console.log("new tool: ",name)
}

function handleHeaderChange(ev) {
    let strFromInput = ev.value
    HEADER.header = strFromInput
    document.querySelector('.header').innerText = HEADER.header
}

function handleChange(ev) {
    let strFromInput = ev.value
    createNoteObj(strFromInput)
}


function createNoteObj(notesStr) {
	let notes = notesStr.split(' ').filter(note => note!=="")

    let notesObjs = notes.map(n => {
        if (n[0] === 'q' && n.length === 2) {  //THIS PART CHECKS IF ITS A SILENT. IF SO, ASSIGN A 'r' JUST SO THE CODE WILL WORK
			n = n[0] + 'r' + n[1]
		}
     
		let octave = n[0]	// represented by shape
		let pitch = n[1]	// represnted by color
		let length = n[2]	// represented by length

        let currNote = {
			octave: "#" + (characterToFigureMap[octave] || characterToFigureMap.default) + `-${length}`,

			length: characterToLengthMap[length] || characterToLengthMap.default,
		
			pitch: characterToPitchMap[pitch] || characterToPitchMap.default
		}


        return currNote
    })

    createElements(notesObjs)
}


// function createElements(notes) {    

//     console.log(notes)
//     let strHtmls = notes.map(n => {
//         console.log(n)
//         return `<span class="note-span"> <svg class=${n.length}>
//         <use href="${n.octave}" class=${n.pitch}>
//      </svg> </span>`
//     })
//     document.querySelector('.chart').innerHTML = strHtmls.join('')
//}

function createElements(notes) {
    let counter = 0;
    let strHtmls = ``;
    notes.map(n => {
        if (counter === 0) strHtmls += `<div class="${sizeInfo.barClass}">`

		counter = counter + noteWidthMap[n.length]

        strHtmls += `<div class="note-wrapper"> <svg class=${n.length}>
        <use href="${n.octave}" class=${n.pitch}>
     </svg> </div>`

        if (counter >= sizeInfo.maxWidth) {
            strHtmls += `</div>`
            counter = 0
        }
    })

	document.querySelector('#chart').classList.remove(sizeInfo3.chartClass)
	document.querySelector('#chart').classList.remove(sizeInfo4.chartClass)
	document.querySelector('#chart').classList.add(`${sizeInfo.chartClass}`)
    document.querySelector('#chart').innerHTML = strHtmls
}



