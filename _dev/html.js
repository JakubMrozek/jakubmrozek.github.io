exports.getHeader = (headline) => {
  const html = `
    <!doctype html>
    <html lang="en">
    <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-98639245-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-98639245-1');
    </script>    
      <meta charset="utf-8">
      <title>${headline ? `${headline} | Svět patří těm, co se neposerou` : 'Svět patří těm, co se neposerou'}</title>
      <meta name="description" content="Cesta kolem světa">
      <meta name="author" content="Jakub Mrozek">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600" rel="stylesheet">
      <link rel="stylesheet" href="styles/css.css">
    </head>
    <body>
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
      <div class='content'>
      <ul class="menu">
        <li ${active === 'index.html' ? 'class=\'active\'' : ''}><a href='index.html'>Domů</a></li>
        <li ${active === 'rok-na-ceste-kolem-sveta.html' ? 'class=\'active\'' : ''}><a href='rok-na-ceste-kolem-sveta.html'>Rok na cestě kolem světa</a></li>
        <li ${active === 'alba.html' ? 'class=\'active\'' : ''}><a href='alba.html'>Alba a cestopisy</a></li>
        <li ${active === 'blog.html' ? 'class=\'active\'' : ''}><a href='blog.html'>Blog</a></li>
      </ul>
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
      <div class='flex'>
        <div class='flex-2'>
          <p>${desc || ''}</p>
        </div>
        <div class='flex-1'>
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
    <div class='flex'>
      <div class='flex-1'>
        <a href='./${url}'>
          <img src='./facebook/${album}/${mainPhoto}' width='300'>
        </a>
      </div>
      <div class='flex-2'>
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
      <div class='flex-1'>
        <p>
          Ahoj! Jsem Jakub Mrozek a 9. 7. 2017 jsem vyrazil na <strong>cestu kolem světa</strong>.
          Jak vypadal můj první rok na cestě kolem světa můžete vidět <a href='rok-na-ceste-kolem-sveta.html'>zde</a>.
        </p>
        <ul>
          <li>
            Během cesty jsem zatím navštívil 11 zemí a nezemí: Mongolsko, Čínu, Hong Kong, Vietnam, Laos, Thajsko, Malajsii, Filipíny, Japonsko, Jižní Koreu a Tchaj-wan.
          </li>
          <li>
            Několik dní jsem bydlel u nomádské rodiny někde uprostřed Mongolska v poušti Gobi, 
            další dva týdny uprostřed ulánbátarského sídliště postaveného do tvaru SSSR. 
          </li>
          <li>
            V Číně jsem si koupil kolo a dojel s ním až do thajského Bangkoku přes Vietnam a Laos.
          </li>
          <li>
            V Číně jsem si také našel přítelkyni, která za mnou každý měsíc na pár dní někam přiletí. 
            Už takto byla v 10+ zemích.
            Když nedostala víza do Vietnamu, zaplatila si převaděče.
          </li>
          <li>
            V severním Vietnam jsem najezdil 3000+ km na motorce a 
            strávil jsem přibližně 2 měsíce v okolí Sa Py uprostřed rýžových polí. 
          </li>
          <li>
            Hranice s Laosem jsem omylem překročil ilegálně a 
            pak jel v naprosté tmě na kole dalších 30 km do nejbližší vesnice.
          </li>
          <li>
            V Thajsku jsem potkal divokého slona, který mě nenechal naobědvat. Taky mě tam okradly opice.
          </li>
          <li>
            Na Filipínách jsem omylem vstoupil na americkou vojenskou základnu a celou ji přešel, 
            dokud mě u východu nezadrželi vojáci a já musel na výslech.
          </li>
          <li>
            V Japonsku jsem žil 100+ dní a celé ho projel shinkanseny. 
            V Nagasaki jsem potkal člověka, který byl 1 km od místa, když tam vybuchla atomová bomba.
          </li>
          <li>
            V Koreji jsem strávil celý den uprchlíkem, který 3 roky utíkal z KLDR.
          </li>
          <li>
            Tchaj-wan jsem se pokusil přejít pěšky od nejjižnějšího po nejsevernější místo.
          </li>
        </ul>
        <p>
          Sledovat mě můžete na <a href='https://www.facebook.com/DundeeVsSvet/'>Facebooku</a> nebo <a href='https://www.instagram.com/cekoturisto/'>Instagramu</a>.
        </p>
        <p>
          Kontaktovat mě můžete na <a href='mailto:jakub.mrozek@gmail.com'>jakub.mrozek@gmail.com</a>.
        </p>
      </div>
      <div class='flex-1'>
          <iframe width="400" height="255" src="https://www.youtube.com/embed/Jc6sHEnxMkI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    `
  return html
}

exports.getHtmlItemPost = ({url, date, headline, image, perex}) => {
  const html = `
    <div class='flex'>
      <div class='flex-1'>
        <a href='${url}'>
          <img width='300' class='blog-item-img' src='${image}' />
        </a>
      </div>
      <div class='flex-'>
        <h2 class='blog-headline'>
          <a href='${url}'>${headline}</a>
          <span class='date'>${date}</span>
        </h2>
        <div class='blog-perex'>${perex} <a href='${url}'>Číst více</a></div>
      </div>
    </div>
    `
  return html
}

exports.getHtmlPost = ({url, date, headline, perex, image, content}) => {
  const html = `
    <div>
      <h2 class='blog-headline'>
        ${headline}
        <span class='date'>${date}</span>
      </h2>
      <div class='flex'>
        <div class='flex-2'>
          <div class='blog-content'>
          ${perex}
          ${content}
          </div>
        </div>
        <div class='flex-1'>
          <img width='350' class='blog-post-img' src='${image}' />
        </div>
      </div>
    </div>
  `
  return html
}

exports.getPagination = (parts, current) => {
  let lastPage = 1
  const pages = []
  parts.forEach((items, key) => {
    pages.push({
      name: `${lastPage} - ${Number(lastPage + items.length - 1)}`,
      url: key ? `blog-${key}.html` : 'blog.html',
      current: key === current
    })
    lastPage = lastPage + items.length
  })
  const posts = pages.map(page => {
    if (page.current) {
      return `<span class='blog-pagination-page'>${page.name}</span>`
    } else {
      return `<a href='${page.url}' class='blog-pagination-page'>${page.name}</a>`
    }
  }).join(' | ')
  const html = `
    <div class='blog-pagination'>
      <p class='blog-pagination-text'>
        Stránkování: ${posts}
      </p>
    </div>
  `
  return html
}
