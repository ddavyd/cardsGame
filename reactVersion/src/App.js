import React, {useState} from 'react'
import Board from './components/Board/Board'
import backImg from './assets/images/back.jpg'
import kitty from './assets/images/kitty.jpg'
import puppy from './assets/images/puppy.jpeg'


function App() {
  const cards = buildCards()
  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  )
}

export default App

function buildCards() {
  let id = 0
  const images = {kitty, puppy}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
