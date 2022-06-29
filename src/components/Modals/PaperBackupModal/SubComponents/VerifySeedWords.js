import { Button } from 'components/common'
import { useCallback, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'

const VerifySeedWords = ({ words, setModalSteps, setModalButtons, hideModal }) => {

  const [error, setError] = useState()
  const [wordIndex, setWordIndex] = useState(0)
  const [selectedWordFeedback, setSelectedWordFeedback] = useState({})
  const [animationNextWord, setAnimationNextWord] = useState(false)

  const randNum = (word) => {
    let asciiNumStr = '0'
    for (let i = 0; i < word.length; i++) {
      asciiNumStr += word.charCodeAt(i) + ''
    }

    // some random reducer
    let finalNum = asciiNumStr
    while (finalNum > 100) {
      finalNum = (finalNum.slice(0, finalNum.length - 2) * 1 + finalNum.slice(finalNum.length - 2) * 1) + ''
    }
    return finalNum * 1
  }

  const getWordChoices = useCallback(() => {
    const correctWord = words[wordIndex]

    /*if (selectedWordFeedback.correct) {
      return [{
        word: correctWord,
        selected: true,
        correct: true
      }]
    }*/

    // better having a random seed
    const shuffledWordsList = [...words.slice(0, wordIndex), ...words.slice(wordIndex + 1)]
      .sort((a, b) => randNum(a) - randNum(b))

    // quick hack to loop
    const wordsStream = [...shuffledWordsList, ...shuffledWordsList]

    return [correctWord, ...wordsStream.slice(wordIndex, wordIndex + 3)]
      .sort((a, b) => {
        return randNum(a) - randNum(b)
      }).map((w, index) => {
        return {
          word: w,
          selected: selectedWordFeedback.index === index,
          correct: correctWord === w
        }
      })
  }, [words, wordIndex, selectedWordFeedback])

  const selectWord = useCallback((selectedWord, selectedIndex) => {
    setError(null)

    const correct = words[wordIndex] === selectedWord
    setSelectedWordFeedback({ index: selectedIndex, correct })

    setTimeout(() => {
      if (words[wordIndex] === selectedWord) {
        setAnimationNextWord(true)
        setTimeout(() => {
          setSelectedWordFeedback({})
          setTimeout(() => {
            setWordIndex(wordIndex + 1)
            setAnimationNextWord(false)
          }, 150)
        }, 150)
      } else {
        setSelectedWordFeedback({})
        setError(`The word you selected is not the correct word #${wordIndex + 1}`)
      }
    }, 400)
  }, [words, wordIndex, setError])

  useEffect(() => {
    if (wordIndex > 11) {
      setModalButtons([<Button
        full
        icon={<MdClose/>}
        className={'primary'}
        onClick={() => hideModal()}
      >Close</Button>])
    }
  }, [wordIndex, setModalButtons, hideModal])

  if (wordIndex > 11) {
    return <div className='notification-hollow success text-center mt-4'>
      Verification complete!<br/>
      You should now put your paper in a safe place
    </div>
  }

  return <div>
    <div className='instructions'>
      To make sure your backup is perfect, please verify your backup by clicking on the correct word
    </div>

    <div className='wordsSelectorContainer'>
      <div className='wordRequestedTitle'>
        Select the word as it appears on your backup
      </div>

      <div className={`wordsSelector${animationNextWord ? ' nextWordFade' : ''}`}>
        <div className='wordIndex'>
          Word <span>#{wordIndex + 1}</span>
        </div>
        <div className={`wordChoices${selectedWordFeedback.correct ? ' animated' : ''}`}>
          {
            getWordChoices().map((w, index) => {
              return (<span
                className={`wordChoice${w.selected ? (' selected ' + (w.correct ? 'correct' : 'incorrect')) : ''}`}
                onClick={() => selectWord(w.word, index)}>{w.word}
              </span>)
            })
          }
        </div>
        {
          selectedWordFeedback.correct &&
          <div className='visualCheckmark'><FaCheck/></div>
        }
      </div>

      {
        error &&
        <div className='error-message'>
          {error}
        </div>
      }
    </div>
  </div>
}

export default VerifySeedWords
