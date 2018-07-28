exports.getHeader = (headline) => {
  const html = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${headline} | Svět patří těm, co se neposerou</title>
      <meta name="description" content="Cesta kolem světa">
      <meta name="author" content="Jakub Mrozek">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600" rel="stylesheet">
      <link rel="stylesheet" href="css.css">
    </head>
    <body>
      <div class='content'>
    `
  return html
}

exports.getFooter = () => {
  const html = `
          </div>
        </body>
      </html>
    `
  return html
}

exports.getMenu = (active) => {
  const html = `
      <menu class='menu'>
        <a ${active === 'index.html' ? 'class=\'active\'' : ''}href='index.html'>Domů</a>
        <a ${active === 'rok-na-ceste-kolem-sveta.html' ? 'class=\'active\'' : ''}href='rok-na-ceste-kolem-sveta.html'>Rok na cestě kolem světa</a>
        <a ${active === 'alba.html' ? 'class=\'active\'' : ''}href='alba.html'>Alba</a>
      </menu>
    `
  return html
}

exports.getHeadline = (headline, desc) => {
  const html = `
      <h1>${headline}</h1>
      <p class='perex'>${desc}</p>
    `
  return html
}

exports.getHtmlItem = (src, album, desc) => {
  const html = `
      <div class='flex album'>
        <div class='left-box'>
          <p>${desc || ''}</p>
        </div>
        <div class='right-box'>
          <p>
            <img src='./facebook/${album}/${src}' width='400'>
          </p>
        </div>
      </div>
    `
  return html
}

exports.getHtmlItemAlbum = (url, headline, desc, album, mainPhoto, date) => {
  const html = `
    <div class='album-item'>
      <div class='album-item-photo'>
        <a href='./${url}'>
          <img src='./facebook/${album}/${mainPhoto}' width='300'>
        </a>
      </div>
      <div class='album-item-desc'>
        <h2>
          <a href='./${url}'>${headline}</a> <span class='date'>${date || ''}</span>
        </h2>
        <p>${desc}</p>
        </div>
    </div>
  `
  return html
}
