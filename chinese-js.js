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

function chooseCharacters () {
  const words = getWords()
  const word = words[Math.floor(Math.random() * words.length)]
  const lastWord = chinese.text()
  if (lastWord === word.chinese) {
    return chooseCharacters()
  }
  chinese.text(word.chinese)
  english.text(word.english)
  pinyin.text('[' + word.pinyin + ']')
}

function chooseNumbers () {
  const words = [
    {chinese: '一', english: '1', pinyin: 'yī'},
    {chinese: '二', english: '2', pinyin: 'èr'},
    {chinese: '三', english: '3', pinyin: 'sān'},
    {chinese: '四', english: '4', pinyin: 'sì'},
    {chinese: '五', english: '5', pinyin: 'wǔ'},
    {chinese: '六', english: '6', pinyin: 'liù'},
    {chinese: '七', english: '7', pinyin: 'qī'},
    {chinese: '八', english: '8', pinyin: 'bā'},
    {chinese: '九', english: '9', pinyin: 'jiǔ'},
    {chinese: '十', english: '10', pinyin: 'shí'}
  ]
  // 11 - 19
  for (let i = 0 ; i < 9 ; ++i) {
    const word = words[i]
    let chinese = '十' + word.chinese
    let english = '1' + word.english
    let pinyin = 'shí ' + word.pinyin
    words.push({
      chinese, english, pinyin
    })
  }

  // 20 - 99
  for (let i = 1 ; i < 9 ; ++i) {
    const word = words[i]
    let chinese = word.chinese + '十'
    let english = word.english + '0'
    let pinyin =  word.pinyin + ' shí'
    words.push({
      chinese,
      english,
      pinyin
    })
    for (let ii = 0; ii < 9; ++ii) {
      const word2 = words[ii]
      let chinese2 = word.chinese + '十' + word2.chinese
      let english2 = String(Number(word.english + '0') + Number(word2.english))
      let pinyin2 =  word.pinyin + ' shí ' + word2.pinyin
      words.push({
        chinese: chinese2,
        english: english2, 
        pinyin: pinyin2
      })
    }
  }

  const word = words[Math.floor(Math.random() * words.length)]
  const lastWord = chinese.text()
  if (lastWord === word.chinese) {
    return chooseNumbers()
  }
  chinese.text(word.chinese)
  english.text(word.english)
  pinyin.text('[' + word.pinyin + ']')
}
  
function initWords (type) {
  speechSynthesis.getVoices()
  settings.hide()
  content.show()
  cont.show()

  let fn = null
  if (type === 'characters') {
    fn = chooseCharacters
  }
  if (type === 'numbers') {
    fn = chooseNumbers
  }
  fn()

  cont.on('click', () => {
    if (english.is(':visible')) {
      playWord()
      english.hide()
      chinese.show()
      pinyin.show()
    } else {
      fn()
      english.show()
      chinese.hide()
      pinyin.hide()
    }
  })
}