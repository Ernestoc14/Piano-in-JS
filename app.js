const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl){ //Function to play the sound
    console.log(newUrl)
    new Audio(newUrl).play() //Get the new audio after looping in pianoKeys
}

pianoKeys.forEach((pianoKey, i) =>{   //Looping to create a new URL
    const number = i < 9 ? '0'+ (i + 1)  : (i + 1) // if i is smaller than 9 then (?) return 0 plus i+1 ELSE return i+1
    const newUrl = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl)) //Callback
})