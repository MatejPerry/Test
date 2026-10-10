import './App.css'

const menu = [
  { name: 'Ranní espresso', detail: 'Dvojité espresso, čokoládové tóny', price: '65 Kč' },
  { name: 'Domácí limonáda', detail: 'Citron, máta a kapka letní pohody', price: '75 Kč' },
  { name: 'Koláč dne', detail: 'Pečený každé ráno z poctivých surovin', price: '85 Kč' },
]

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="#domu"><span className="brand-mark">k</span> kousek</a>
        <div className="nav-links"><a href="#pribeh">Náš příběh</a><a href="#menu">Menu</a><a className="nav-cta" href="#navsteva">Najdeš nás <span>↗</span></a></div>
      </nav>

      <section className="hero" id="domu">
        <div className="hero-copy">
          <p className="eyebrow"><span /> MALÁ KAVÁRNA · VELKÁ POHODA</p>
          <p className="eyebrow"><span /> MALÁ KAVÁRNA · VELKÁ POHODA</p>
          <h1>Na chvíli<br /><em>jen tak.</em></h1>
          <p className="intro">Dobrá káva, něco sladkého a místo, kde nikam nemusíš spěchat. Zastav se na svůj malý kousek dne.</p>
          <a className="button" href="#menu">Ochutnat menu <span>↗</span></a>
          <div className="hero-note"><span className="note-icon">✳</span><span><strong>Otevřeno každý den</strong><br />8:00 – 18:00 · Praha, Vinohrady</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustrace šálku kávy" role="img">
          <div className="sun" /><div className="art-caption">POMALU<br />A DOBŘE.</div>
          <div className="steam steam-one" /><div className="steam steam-two" />
          <div className="cup"><div className="coffee" /><div className="cup-heart">♥</div></div>
          <div className="saucer" /><div className="sparkle sparkle-one">✳</div><div className="sparkle sparkle-two">✦</div>
          <div className="art-tag">100 %<br /><small>dobrá nálada</small></div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading"><div><p className="eyebrow">MALÉ RADOSTI</p><h2>Dnešní <em>oblíbenci</em></h2></div><p>Výběrová káva a dobroty,<br />které děláme s láskou.</p></div>
        <div className="menu-list">{menu.map((item, index) => <article className="menu-item" key={item.name}><span className="item-number">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><span className="price">{item.price}</span></article>)}</div>
      </section>
      <footer id="navsteva"><span className="brand"><span className="brand-mark">k</span> kousek</span><span>Tvůj kousek klidu na Vinohradech.</span><a href="mailto:ahoj@kousek.cz">ahoj@kousek.cz ↗</a></footer>
    </main>
  )
}

export default App
