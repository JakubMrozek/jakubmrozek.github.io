const path = require('path')
const fs = require('fs')
const html = require('./html')
const manifest = require('./manifest.json')

function sortByCaption (photos) {
  photos.sort((a, b) => {
    const [numA] = a.caption.split(')')
    const [numB] = b.caption.split(')')
    return Number(numA) - Number(numB)
  })
}

function nl2br (photo) {
  photo.caption = photo.caption.replace(/\n/g, '<br>')
}

function removeNumber (photo) {
  const [, ...caption] = photo.caption.split(')')
  photo.caption = caption.join('').trim()
  return photo
}

function writeFile (url, data) {
  const file = path.join(__dirname, '..', url)
  fs.writeFileSync(file, data)
}

// generate albums
manifest.albums.forEach(album => {
  let photos = require(`../facebook/${album.folder}/json.json`)
  if (album.sort) {
    sortByCaption(photos)
    photos.forEach(removeNumber)
  }
  photos.forEach(nl2br)
  const items = photos.map(photo => html.getHtmlItem(`${photo.IdPost}.jpg`, album.folder, photo.caption)).join('')
  const header = html.getHeader(album.headline)
  const menu = html.getMenu()
  const headline = html.getHeadline(album.headline, album.desc)
  const footer = html.getFooter()
  const page = [header, menu, headline, items, footer].join('')
  writeFile(album.url, page)
})

// generate album index
{
  const items = manifest.albums.map(album => html.getHtmlItemAlbum(album.url, album.headline, album.desc)).join('')
  const header = html.getHeader('Alba')
  const menu = html.getMenu()
  const headline = html.getHeadline('Alba', 'Seznam alb z cesty kolem světa.')
  const footer = html.getFooter()
  const page = [header, menu, headline, items, footer].join('')
  writeFile('alba.html', page)
}
