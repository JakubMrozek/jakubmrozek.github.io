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
        <li ${active === 'vybaveni.html' ? 'class=\'active\'' : ''}><a href='vybaveni.html'>Vybavení</a></li>
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
           🛵 V severním Vietnamu jsem najezdil 3000+ km na motorce a 
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
          <img class='social-icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAACvUlEQVRIib3WTWgdVRgG4OdcLiGESwiliIiEKgoBi4vqRnFVuhDRothlURALRUWKCF2IiLhwIWJLqUU34kZQEVFEXAiiAX9WrVgpRZBaJFLpT6ppbGOa08X55mbuZO41Qsk3HO6dOed87/fznncmZdlGWGdDUND9rwVJ6mA8RtdqcCsxlrCY5eWRftpKl6QZPIiHMBMgw7KvAOfwDd7H91m+PBIoSffhddyNy/gV5+P/SiOjDsbQw824EX/iVbyd5cW+41y7IvofcAEH434zpmJMtowpbAqg3TiBi3hswHcD6HlcxRsYz9Z34SY8g3txfwAdRXcY0Ne4hJkWZ93IbgtujQx6Mfdc7Psk5j7G37iz2t9vcLBrJnpyttG3Hp7Ch/gxyjOLI9HTYwoRZmPv8ejdbWt6hIlIeRZTteeTOBwRX8Jv+Bnn8C9OYleUbyL27MMVPLkmI6sU7tMySV3sxRM4hT24Pct34C4cwDRew2SNZUvxO1b5qgM1DyKFTY9iGS/ggywvRSVO4WV8pvTtgZqvan9fENqA6tbDVuVsfNo8/VlewDtxe0+Lr07zQdOuuwaOkhVYUBh0A3ZGz/oWbHw8br8b4WcAqE0Uz+MjpdavYFcFlqRpvIidClE+HwWkQeOL+Mr/p/fD6NT2PKvQe2/1rF6KxYigV880y38laX84fATbFPGciyzewrdZXolMO8qZpJQeNfpleTlJc4q0TETZqrmFJL2J92qBLGE+mFe3MdwSQf++pnSR8hFk7F6voLZo4hb8gj8GWtBYtB1nFC3bEdF31+G8egtP493o3cH6moEXX5LGFbl/KVL/UhHR+SjVKosGSzUR5dquqPcXeDrLp1tLF6A9Rdt+Ulh2JcY/Q0Z9/gwORWadoRnVLc7LVkXqN1kV3frZqz5OFnAax7I83+pvGND1tg37rrsGeod57VKe9Q8AAAAASUVORK5CYII='><a href='https://www.instagram.com/cekoturisto/'>Instagramu</a> (ten moc nepoužívám).
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

exports.getGearContent = () => {
  const html = `
    <h1>Vybavení na cestu kolem světa</h1>
    <div class='flex'>
      <div class='flex-2'>
      <p>V současné době vlastním <strong>79 věcí</strong>, které mají dohromady něco kolem <strong>7 kg</strong>.
      Většinu mám od začátku cesty (400+ dní). 
      Zde najdete jejich kompletní přehled s popisky.

      <p><i>Fotografie jsou z března 2018, popisky ze září 2018.</i></p> 
      </p>
      <h2>Organizace a balení</h2>
      <ul>
      <li>Batoh</li>
      <li>Malá taška/ruksak</li>
      <li>Ledvinka</li>
      </ul>
      
      <h3>Batoh Crumpler Track Jack Board Backpack</h3>
      <p>Výběrem batohu jsem strávil mnoho času, nakonec jsem se rozhodl pro výše uvedený podle 
      <a target='_blank' href='https://www.youtube.com/watch?v=6TxQHhM_vsM'>tohoto videa</a>. 
      Potřeboval jsem batoh, který lze vzít do letadla, šlo by s ním jít na více dní do hor, 
      mohl jsem ho připevnit jako jedinou brašnu na kolo a podobně. 
      I po roce každodenního používání je stále jako nový a nikdy s ním žádný problém nebyl. 
      Jeho nevýhoda byla vyšší cena 4 490 Kč a váha 1,4 kg, naopak super je 16 kapes! 
      Objem má 40L, což znamená, že je zhruba z 80% zaplněn a zbytek prostoru se dá snadno využít pro jídlo. 
      Pořídil bych si ho nejspíš znova, ale předtím bych se podíval po lehčích variantách, existují už i batohy s váhou o kilo nižší.
      Koupil jsem ho v obchodě <a target='_blank' href='http://shop.pod7kilo.cz/p/cestovatelsky-batoh-crumpler-track-jack-board-backpack-ruzne-barvy-1400-g/#4844'>Pod 7 kilo</a>, který se na kvalitní vybavení s nízkou váhou specializuje.
      </p>

      <h3>Malá taška/ruksak</h3>
      <p>Vedle hlavního, velkého batohu mám ještě jeden ultralehký menší, který slouží pro kratší výlety, když nechci nosit všechny věci u sebe. Jinak slouží jako vak pro špinavé prádlo. Tenhle jsem dostal za absolvování nějakého běhu, myslím, že pulmaratonu v Praze před několika roky.</p>

      <h3>Skrytá ledvinka Eagle Creek Undercover Money Belt</h3>
      <p>Zvláštní ledvinka tělové barvy pro nejdůležitější doklady (pas a platební karta). 
      Pod tričkem není vůbec vidět a mám ji proto, abych měl důležité doklady na dvou místech. 
      V batohu mám druhý pas a druhou platební kartu, takže pokud by mi ho ukradli, stále bych zůstal funkční.</p>

      <hr>

      <h2>Spaní</h2>
      <ul>
      <li>Spacák</li>
      <li>Špunty do uší</li>
      </ul>

      <h3>Spacák Lafuma Active 10</h3>
      <p>Spacák jsem si koupil den před odjezdem a moc jsem neřešil značku. Potřeboval jsem co nejlehčí a do nejnižší teploty cca 10 stupňů. Tenhle váží kolem 0,5 kg a spal jsem v něm tak 15 nocí. Využíval jsem ho hlavně v Mongolsku a Laosu při spaní v místech, kde jsem si nebyl úplně jistý čistotou.</p>
      <h3>Špunty do uší</h3>
      <p>Dostal jsem jich hodně v japonských kapsulových hostelech, ale nikdy jsem je nepoužil, nebyly potřeba. Ale jsou lehké a nezaberou žádný prostor, tak jsem si je už nechal. Jejich použití je dost nepříjemné a mám je jen pro situace, kdyby to už nešlo vydržet.</p>
      
      <hr>

      <h2>Oblečení</h2>
      <ul>
      <li>Boty</li>
      <li>Ponožky 4x </li>
      <li>Dlouhé kalhoty</li>
      <li>Krátké kalhoty</li>
      <li>Spodní prádlo 4x</li>
      <li>Tričko s krátkým rukávem 5x</li>
      <li>Košile s dlouhým rukávem</li>
      <li>Mikina</li>
      <li>Větrovka</li>
      <li>Pláštěnka</li>
      <li>Sluneční brýle s obalem</li>
      </ul>

      <h3>Boty</h3>
      <p>Za první rok jsem udělal kolem 4,5 mil. kroků, takže jsou boty dost důležitým prvkem a doporučuji na nich nešetřit a dlouho si je vybírat. První mi vydržely 400 dní, druhé jsem si koupil na Tchaj-wanu. V Asii se boty kupují špatně, protože Asiati mají pidi nožičky a jejich velikosti končí o půl čísla níže než ty, které bych potřeboval.</p>
      
      <h3>Ponožky</h3>
      <p>V Asii se dají koupit na kažém kroku v obchodech typu 7/11, FamilyMart ap. Vydrží přibližně 8 až 12 týdnů.</p> 
      
      <h3>Dlouhé kalhoty</h3> 
      <p>Měl jsem velmi lehké kalhoty, které byly v pořádku, dokud jsem díky průvodcování jednoho aktivního Jihokorejce nesletěl ze soulské skály a neudělal si v nich díry. Další plánuji koupit v Hong Kongu. Na některá místa není možné jít v krátkých kalhotech, jinak bych je celý rok nepotřeboval.</p>

      <h3>Krátké (tříčtvrteční) kalhoty</h3>

      <p>Trávím v nich 95% venkovního času. První jsem po 400 dnech vyměnil za nové. Ty první jsem si kupoval kvůli velkému množství kapes, ale stejně jsem nakonec vyžíval jen dvě postranní, takže ty nové mají jen 2 kapsy a jsou mnohem lehčí.</p>
      <h3>Spodní prádlo</h3>

      <p>Platí zde to samé, co pro ponožky. Vydrží zhruba 2 až 3 měsíce a snadno se dukupuji v asijských malých samoobsluhách. Množství 4 ks je nejmenší přijatelné množství pro dlouhodobé cestování.</p>
      <h3>Tričko s krátkám rukávem</h3>

      <p>Mám jich 5x a každé trčko vydrží přibližně 4 - 6 měsíců s výjimkou jednoho kvalitního značkového Puma, které vydrželo celou dobu a vypadá stále stejně i po mnoha dnech nošení. Triček mám více, protože moje nejneoblibenější činnost je praní.</p>
      <h3>Košile s dlouhým rukávem</h3>

      <p>Pořídil jsem si ji po nátlaku od Mongolek. Téměř ji nenosím, mám ji jen pro zvláštní příležitosti.</p>
      <h3>Mikina</h3>

      <p>Je to jediné teplé oblečení, které mám. Měl jsem ji na sobě jen v Mongolsku a v Japonsku, když jsem tam přijel ještě v době, kdy tam bylo chladno.</p>
      <h3>Větrovka</h3>

      <p>Velmi lehká a nepromokavá bunda, nosím ji jen při jízdě na kole, když začne pršet.</p>
      <h3>Pláštěnka</h3>

      <p>Asijská pláštěnka z Vietnamu za 5 Kč. Na Tchaj-wanu používám skoro pořád.</p>
      <h3>Sluneční brýle s obalem</h3>
      <p>Používám je jen při jízdě na kole nebo na motorce, aby mi nespadlo nic do oka. Jinak sluneční brýle nenosím, nemám to rád.</p>

      <hr>

      <h2>Elektronika a příslušenství</h2>
      <ul>
      <li>Macbook</li>
      <li>Nabíječka pro MacBook</li>
      <li>Obal na MacBook</li>
      <li>Adaptér 2x</li>
      <li>Power banka</li>
      <li>USB zásuvka 2x</li>
      <li>USB kabel 2x</li>
      <li>iPhone 7 plus</li>
      <li>iPhone 5s</li>
      <li>Zvláštní kryt na telefon</li>
      <li>Sluchátka</li>
      </ul>

      <h3>Apple Macbook Air 13”, 2017 + nabíječka</h3>
      <p>Apple Macbook je naprostý základ pro mojí práci. Používám ho kvůli vysoké vysoké spolehlivosti (vydrží 5+ let), baterii (mohu pracovat kdekoliv po mnoho hodin bez elektrické zásuvky), nízké váze (1,3 kg) a úžasnému ekosystému (propojení s iPhone), takže nejsem závislý na Wifi a častěji používám mobilní internet i pro práci.</p> 
      <h3>Obal na MacBook</h3>
      <p>Na Tchaj-wanu jsem si kupoval nový. Je nepromokavý a má silnější vrstvu pěny, která chrání Macbook před nárazy.</p>
      <h3>Adaptér do zásuvky</h3>
      <p>Mnoho turistů si pořizuje jeden univerzální adaptér, já si koupil dva malé speciálně pro japonské zásuvky, jeden pro telefon/power banku a jeden pro notebook. Poprvé jsem adaptér potřeboval až na Filipínách, pak v Japonsku a na Tchaj-wanu, všude jinde mají podobné zásuvky jako v Česku. Dají se pořídit snadno skoro všude, na Filipínách stály kolem 15 Kč. Lze je půjčit v hotelech a různých ubytovných.</p>
      <h3>Power banka</h3>
      <p>Důležitá součást výbavy, telefon nevydrží celý den, pokud ho používám často. Zrovna dnes mi přestala power banka fungovat, takže si musím pořídit novou. Často se stává, že v místě ubytování není zásuvka poblíž a mobil je téměř vybitý, tehdy se hodí power banka také. Používám ji velmi často, minimálně každý druhý den, takže počítám s živoností jeden rok a méně. Vysokokapacitní power banky není možné vzít do letadla, při koupi je dobré si dát na to pozor. </p>
      <h3>USB zásuvky a kabely</h3>
      <p>Dají se pořídit velmi snadno téměř všude v Asii v obchodech typu 7/11 a podobně. Stojí pár korun.</p> 
      <h3>iPhone 7 plus</h3>
      <p>S výjimkou Macbooku je iPhone jediná drahá věc, kterou vlastním. Telefon je pro mě komunikační prostřek s rodinou, přáteli a kolegy v práci, GPS navigace, foťák, kamera, čtečka knih, televize (Youtube), editor fotografií, ukolníček, poznámkový blok, hudební přehrávač, peněženka, prostě vše. IPhone 7 plus je výborný, vše plní na jedničku a není s ním problém. Prostě Apple. Po roce používání má 88% maximální kapacity baterie, takže stále docela dost. Vydržel i déšť na Tchaj-wanu. V dešti je s ním však problém, protože nefunguje dotyková obrazovka a home button. Tady by se mi hodil nový iPhone s Face ID. IPhone 7 plus je hodně velký, více se mi líbí rozměry iPhone X. Jeho nevýhodou je kromě ceny hlavně baterka, k iPhone si holt člověk musí vždy dokoupit i power banku. </p>
      <h3>iPhone 5s</h3>
      <p>Záložní telefon, kde mám i českou SIMkartu. Je už starý, opotřebovaný, pomalý, baterka vydrží tak jednu, dvě hodiny. Mám ho pro případ, že by přestal fungovat hlavní telefon, protože pak bych zratil kontakt s okolím, navigaci, foťák a tak dále.</p>
      <h3>Zvláštní kryt na telefon</h3>
      <p>Dostal jsem ho od přítelkyně. Je odolnější a je k němu přidělán přívěsek, takže se dá telefon nosit na krku. To je důležité pro kolo a motorku, když někam přijíždím a potřebuji používat navigaci, tak by mi telefon mohl vypadnout z ruky a bylo by po něm.</p>
      <h3>Sluchátka</h3>
      <p>Mám klasická sluchátka od Apple, které přidává k telefonu. Ale nejsou moc kvalitní, tedy zvuk je fajn, ale moc nevydrží. Na Tchaj-wanu jsem si pořídil už třetí, ale po dvou dnech v dešti přestaly fungovat. Jsou ale důležitou součástí výbavy, hlasitá hudba ve suchátkách má na mě stejný efekt jako kafe nebo energetický nápoj.</p>


      <hr>

      <h2>Hygiena a lékárnička</h2>
      <ul>
      <li>Ručník</li>
      <li>Kartáček na zuby</li>
      <li>Zubní pasta</li>
      <li>Mezizubní kartáčky</li>
      <li>Párátka</li>
      <li>Obal na kartáček a zubní pastu</li>
      <li>Sprchový gel</li>
      <li>Deodorant</li>
      <li>Parfém</li>
      <li>Hřeben</li>
      <li>Kondomy</li>
      <li>Sluneční krém</li>
      <li>Náplasti</li>
      <li>Vazelína</li>
      <li>Sanorin emulze</li>
      <li>Betadine</li>
      <li>Kleštičky na nehty</li>
      <li>Holítko</li>
      </ul>
      
      <p>To jsou poměrně běžné věci, ke kterým asi není moc co dodat. Rozhodně doporučuji nezapomenout na vazelínu, jakmile člověk ucítí, že ji potřebuje, je už pozdě. V Asii je k dostání ve většině obchodů typu 7/11.</p>

      <p>V lékárničce mám pouze náplasti, sanorin (proti rýmě) a dezinfekci. Nic dalšího nepotřebuji, nepohybuji se stovky kilometrů od civilizace. V budoucnu v zemích typu Bangladéš či Indie se to určitě změní a pak budu vybavenější, ale momentálně ve východní Asii v zemích typu Japonsko to není potřeba.</p>

      <p>Pokud mám nějaký problém a nedokážu spolehlivě a na 100% identifikovat zdroj problémů, stejně musím jít k lékaři, může to být něco mnohem závažnějšího a platí čím dříve se začne člověk léčit, tím je to lepší.</p>

      <hr>

      <h2>Doklady, peníze</h2>
      <ul>
      <li>Peněženka</li>
      <li>Platební karta 3x</li>
      <li>Peníze</li>
      <li>Cestovní pas 2x</li>
      <li>Řidičský průkaz</li>
      <li>Mezinárodní řidičský průkaz</li>
      <li>Kartička pojištěnce</li>
      <li>Mezinárodní očkovací průkaz</li>
      </ul>
      <hr>

      <h2>Ostatní</h2>
      <ul>
      <li>Propiska</li>
      <li>Sešit</li>
      <li>Pohlednice z Česka</li>
      <li>Pohlednice z Hirošimy</li>
      <li>Vějíř</li>
      <li>Učebnice čínštiny, kterou pro mě napsala přítelkyně</li>
      <li>Zelený čaj</li>
      <li>Umělohmotný příbor</li>
      <li>Lepící páska</li>
      <li>Vodní filtr</li>
      <li>Vak na vodu</li>
      <li>Moskytiéra</li>
      </ul>

      </div>
      <div class='flex-1 gear'>


      <img width="350" class="blog-post-img" src="facebook/gear/1.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/2.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/3.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/4.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/5.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/6.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/7.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/8.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/9.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/10.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/11.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/12.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/13.jpg">
      <img width="350" class="blog-post-img" src="facebook/gear/14.jpg">
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