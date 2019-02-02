const chinese = $('.chinese')
const english = $('.english')
const pinyin = $('.pinyin')
const cont = $('.continue')
const content = $('.content')
const settings = $('.settings')

function getWords () {
  return text
  .split('\n')
  .map(w => w.trim())
  .filter(w => w)
  .map(w => {
    const [chinese, pinyin, english] = w.split('\t')
    return {chinese, pinyin, english}
  })
}

function getVoice () {
  const voices = window.speechSynthesis.getVoices()
  const voice = voices.find(v => v.lang === 'zh-CN')
  if (!voice) {
    return window.alert('No Chinese')
  }
  return voice
}

function playWord () {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel()
    const msg = new SpeechSynthesisUtterance()
    msg.voice = getVoice()
    msg.text = chinese.text()
    msg.rate = 0.5
    speechSynthesis.speak(msg)
  } 
}

function chooseWord () {
  const words = getWords()
  const word = words[Math.floor(Math.random() * words.length)]
  const lastWord = chinese.text()
  if (lastWord === word.chinese) {
    return newWord()
  }
  chinese.text(word.chinese)
  english.text(word.english)
  pinyin.text('[' + word.pinyin + ']')
}
  
function initWords () {
  chooseWord()
  speechSynthesis.getVoices()
  settings.hide()
  content.show()
  cont.show()
  cont.on('click', () => {
    if (english.is(':visible')) {
      playWord()
      english.hide()
      chinese.show()
      pinyin.show()
    } else {
      chooseWord()
      english.show()
      chinese.hide()
      pinyin.hide()
    }
  })
}