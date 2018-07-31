const path = require('path')
const fs = require('fs')
const markdown = require('markdown').markdown
const html = require('./html')
const manifest = require('./manifest.json')

function sortByCaption (photos) {
  photos.sort((a, b) => {
    const [numA] = a.caption.split(')')
    const [numB] = b.caption.split(')')
    const nA = Number(numA)
    const nB = Number(numB)
    if (nA < nB) {
      return -1
    }
    if (nA > nB) {
      return 1
    }
    return 0
  })
}

function sortByName (photos) {
  photos.sort((a, b) => {
    return a.IdPost.localeCompare(b.IdPost)
  })
}

function nl2br (photo) {
  if (!photo.caption) {
    return
  }
  photo.caption = (photo.caption + '').replace(/\n/g, '<br>')
}

function removeNumber (photo) {
  const [, ...caption] = (photo.caption + '').split(')')
  photo.caption = caption.join(')').trim()
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
  } else {
    sortByName(photos)
  }
  photos.forEach(nl2br)
  const items = photos.map(photo => html.getHtmlItem(`photo_${photo.IdPost}.jpg`, album.folder, photo.caption)).join('')
  const header = html.getHeader(album.headline)
  const menu = html.getMenu(album.menu)
  const headline = html.getHeadline(album.headline, album.desc, album.date)
  const footer = html.getFooter(album.comments)
  const page = [header, menu, headline, items, footer].join('')
  writeFile(album.url, page)
})

// generate album index
{
  const items = manifest
  .albums
  .filter(album => album.inAlbums)
  .map(album => {
    return html.getHtmlItemAlbum(album.url, album.headline, album.desc, album.folder, album.mainPhoto, album.date)
  })
  .join('')
  const header = html.getHeader('Alba a cestopisy')
  const menu = html.getMenu('alba.html')
  const headline = html.getHeadline('Alba a cestopisy', 'Seznam alb (cestopisů) z cesty kolem světa a několik dalších alb o cestě z Česka do Ázerbájdžánu.')
  const footer = html.getFooter()
  const page = [header, menu, headline, items, footer].join('')
  writeFile('alba.html', page)
}

// generate index
{
  const header = html.getHeader('Alba a cestopisy')
  const menu = html.getMenu('index.html')
  const content = html.getIndexContent()
  const footer = html.getFooter()
  const page = [header, menu, content, footer].join('')
  writeFile('index.html', page)
}

// generate blog
{
  const header = html.getHeader('Blog')
  const menu = html.getMenu('blog.html')
  const headline = html.getHeadline('Blog', 'Seznam příspěvků povětšinou z Facebooku.')
  const dir = fs.readdirSync(path.join(__dirname, '..', 'posts'))
  const contents = []
  for (let key in dir) {
    const [id] = dir[key].split('.')
    const post = fs.readFileSync(path.join(__dirname, '..', 'posts', dir[key])).toString('utf8')
    const [date, headline, url, image, , , ...contentParts] = post.split(/\n/)
    const [perex, text] = contentParts.join('\n').split('---perex---')
    contents.push({
      id,
      url,
      date,
      image,
      headline,
      perex,
      content: markdown.toHTML(text)
    })
  }
  contents.sort((a, b) => a.id > b.id ? 1 : -1)
  contents.reverse()
  const items = contents
  .map(item => {
    const header = html.getHeader(item.headline)
    const menu = html.getMenu('blog.html')
    const content = html.getHtmlPost(item)
    const footer = html.getFooter()
    const page = [header, menu, content, footer].join('')
    writeFile(item.url, page)
    return html.getHtmlItemPost(item)
  })
  .join('')
  const footer = html.getFooter()
  const page = [header, menu, headline, items, footer].join('')
  writeFile('blog.html', page)
}
