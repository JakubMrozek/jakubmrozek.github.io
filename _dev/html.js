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
        <ul class='hp-list'>
          <li>
          🌍 Během cesty jsem zatím navštívil 11 zemí a nezemí: Mongolsko, Čínu, Hong Kong, Vietnam, Laos, Thajsko, Malajsii, Filipíny, Japonsko, Jižní Koreu a Tchaj-wan.
          </li>
          <li>
          🐫 Několik dní jsem bydlel u nomádské rodiny někde uprostřed Mongolska v poušti Gobi, 
            další dva týdny uprostřed ulánbátarského sídliště postaveného do tvaru SSSR. 
          </li>
          <li>
          🚲 V Číně jsem si koupil kolo a dojel s ním až do thajského Bangkoku přes Vietnam a Laos.
          </li>
          <li>
           👩 V Číně jsem si také našel přítelkyni, která za mnou každý měsíc na pár dní někam přiletí. 
            Už takto byla v 10+ zemích.
            Když nedostala víza do Vietnamu, zaplatila si převaděče.
          </li>
          <li>
           🛵 V severním Vietnam jsem najezdil 3000+ km na motorce a 
            strávil jsem přibližně 2 měsíce v okolí Sa Py uprostřed rýžových polí. 
          </li>
          <li>
          🛂 Hranice s Laosem jsem omylem překročil ilegálně a 
            pak jel v naprosté tmě na kole dalších 30 km do nejbližší vesnice.
          </li>
          <li>
          🐘 V Thajsku jsem potkal divokého slona, který mě nenechal naobědvat. Taky mě tam okradly opice.
          </li>
          <li>
          🔫 Na Filipínách jsem omylem vstoupil na americkou vojenskou základnu a celou ji přešel, 
            dokud mě u východu nezadrželi vojáci a já musel na výslech.
          </li>
          <li>
          💣 V Japonsku jsem žil 100+ dní a celé ho projel shinkanseny. 
            V Nagasaki jsem potkal člověka, který byl 1 km od místa, když tam vybuchla atomová bomba.
          </li>
          <li>
          🏃V Koreji jsem strávil celý den uprchlíkem, který 3 roky utíkal z KLDR.
          </li>
          <li>
          🚶‍Tchaj-wan jsem se pokusil přejít pěšky od nejjižnějšího po nejsevernější místo.
          </li>
        </ul>
        <p>
          Sledovat mě můžete na 
          <img class='social-icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADDElEQVRIib2Wv4tUVxTHP9/HILKsYLFlsrOCxial2ZAQxFmwMiA2FvkTAjYOIUUQCalSzJZJlTZ1SJEiiCMWVlssYpOQwllksAoWMjyG4X0t7s/5sbHK3ubNvXPP+Z7zPd9z3pMxZ7GaM0EBeqsH/eHjLaNrwEWtBGKM0EZHxguhKXA8GQ261f9VU7c7HH8p+wekj2w30rrTcj9BhpO4WwBPDN+djAbPNwL1h+M9YGy8JwMRxA5ZWK7cG6c7dnnmEPgT6dZkNFiks5q6r2zvigJCil4gK8SucCppbnsKvBHuDI3gMrCNdAP4HHianNc1uCqpyXHZyWHYKoKEDGfYP0m6LelT0CegzxBHBAob48s1db213yXiSEugSYBLyX5DejAZDd5W9m1/OF5E+0ZoSWh5EwqamSpPK5bAYJDU2f7l5PDgbf/+4wbpY8x1xHlgj6jM1e7MQIp0LalXymKglG0maRqD2xL+1nBXqJfUVwedVlWjoJ7VCyLWxVkQc6ALceicYRfoOaouZb66lqirJRqU5mrDwvYCmFf2ndAc0QKNTQ+pUfG4IaMaI6SBMw3G8FBwQdKHk9Hgb4DJaPAGuAlcMFyROC4ML3OzpAxFl8ZI0b0TgXSTw4MFKyuOm64/HG/bbCmW4FTqEkj+bcceisBrpqvLO4JtJ3p8SkZpxFSjjFTgwKTu9IfjS7Znkn6cjAav+8PxFvA1cAXrA8SOSH14SkaxR3IgwUCgJFbvG/aBf4Gfgdfg86Db4C9Cyuv9k1YWQ57UzslHChKwyrzO3srerk/+A8ipQhmwmnNxWjsX2tkqmaiyqwNcA8Is0nSopzSERkVxBNVhW0tOTX45dpaXFFpUJ/4y7ggDsdyoxlDIrFJgmrSprs4Zd0L/bM4IfpX1qsZIdBXpKzoqNFmUIim3yBPg2UagyejgJeKe0AtMC7QSLaaNI6YFt4J50YI7wRyptWhtzwR/gL6p365L1AWwwe/94fgR8r7RRVG+G6razCVPo8nM8L1gR6gDpjZHJ4fv+Tj5P9eZfde9A9zPg4TMD3zPAAAAAElFTkSuQmCC'><a href='https://www.facebook.com/DundeeVsSvet/'>Facebooku</a> nebo 
          <img class='social-icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACvUlEQVRIib3WTWgdVRgG4OdcLiGESwiliIiEKgoBi4vqRnFVuhDRothlURALRUWKCF2IiLhwIWJLqUU34kZQEVFEXAiiAX9WrVgpRZBaJFLpT6ppbGOa08X55mbuZO41Qsk3HO6dOed87/fznncmZdlGWGdDUND9rwVJ6mA8RtdqcCsxlrCY5eWRftpKl6QZPIiHMBMgw7KvAOfwDd7H91m+PBIoSffhddyNy/gV5+P/SiOjDsbQw824EX/iVbyd5cW+41y7IvofcAEH434zpmJMtowpbAqg3TiBi3hswHcD6HlcxRsYz9Z34SY8g3txfwAdRXcY0Ne4hJkWZ93IbgtujQx6Mfdc7Psk5j7G37iz2t9vcLBrJnpyttG3Hp7Ch/gxyjOLI9HTYwoRZmPv8ejdbWt6hIlIeRZTteeTOBwRX8Jv+Bnn8C9OYleUbyL27MMVPLkmI6sU7tMySV3sxRM4hT24Pct34C4cwDRew2SNZUvxO1b5qgM1DyKFTY9iGS/ggywvRSVO4WV8pvTtgZqvan9fENqA6tbDVuVsfNo8/VlewDtxe0+Lr07zQdOuuwaOkhVYUBh0A3ZGz/oWbHw8br8b4WcAqE0Uz+MjpdavYFcFlqRpvIidClE+HwWkQeOL+Mr/p/fD6NT2PKvQe2/1rF6KxYigV880y38laX84fATbFPGciyzewrdZXolMO8qZpJQeNfpleTlJc4q0TETZqrmFJL2J92qBLGE+mFe3MdwSQf++pnSR8hFk7F6voLZo4hb8gj8GWtBYtB1nFC3bEdF31+G8egtP493o3cH6moEXX5LGFbl/KVL/UhHR+SjVKosGSzUR5dquqPcXeDrLp1tLF6A9Rdt+Ulh2JcY/Q0Z9/gwORWadoRnVLc7LVkXqN1kV3frZqz5OFnAax7I83+pvGND1tg37rrsGeod57VKe9Q8AAAAASUVORK5CYII='><a href='https://www.instagram.com/cekoturisto/'>Instagramu</a>.
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
