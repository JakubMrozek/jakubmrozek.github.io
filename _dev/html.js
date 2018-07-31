exports.getHeader = (headline) => {
  const html = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${headline ? `${headline} | Svět patří těm, co se neposerou` : 'Svět patří těm, co se neposerou'}</title>
      <meta name="description" content="Cesta kolem světa">
      <meta name="author" content="Jakub Mrozek">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600" rel="stylesheet">
      <link rel="stylesheet" href="styles/css.css">
    </head>
    <body>
      <div class='content'>
    `
  return html
}

exports.getFooter = (comments) => {
  const html = `
          ${comments ? '<p class=\'comments\'><a target=\'_blank\' href=\'' + comments + '\'>Komentáře</a></p>' : ''}
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
        <a ${active === 'blog.html' ? 'class=\'active\'' : ''}href='blog.html'>Blog</a>
      </menu>
    `
  return html
}

exports.getHeadline = (headline, desc, date) => {
  const html = `
      <h1>${headline} <span class='date'>${date || ''}</span></h1>
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

exports.getIndexContent = () => {
  const html = `
    <h1>O cestě kolem světa</h1>
    <div class='flex'>
      <div class='left-box'>
        <p>
          Ahoj! Jsem Jakub Mrozek a 9. 7. 2017 jsem vyrazil na <strong>cestu kolem světa</strong>.
          Jak vypadal můj první rok na cestě kolem světa můžete vidět <a href='rok-na-ceste-kolem-sveta.html'>zde</a>.
        </p>
        <p>
          Sledovat mě můžete na <a href='https://www.facebook.com/DundeeVsSvet/'>Facebooku</a>.
        </p>
        <p>
          Kontaktovat mě můžete na <a href='mailto:jakub.mrozek@gmail.com'>jakub.mrozek@gmail.com</a>.
        </p>
      </div>
      <div class='right-box hp'>
          <iframe width="400" height="255" src="https://www.youtube.com/embed/Jc6sHEnxMkI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    `
  return html
}

exports.getHtmlItemPost = ({url, date, headline, perex}) => {
  const html = `
    <h2 style='blog-headline'>
      <a href='${url}'>${headline}</a>
    </h2>
    <p style='blog-date'>${date}</p>
    <div style='blog-perex'>${perex}</div>
    <p><a href='${url}'>Číst více</a></p>
    `
  return html
}

exports.getHtmlPost = ({url, date, headline, content}) => {
  const html = `
    <h2 style='blog-headline'>${headline}</h2>
    <p style='blog-date'>${date}</p>
    <div style='blog-content'>${content}</div>
    `
  return html
}