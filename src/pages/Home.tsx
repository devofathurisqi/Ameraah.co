import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, ArrowRight } from 'lucide-react';
import { products, imageUrl, imageSet, priceLabel } from '../data/catalog';
import ProductCard from '../components/ProductCard';
import { whatsappUrl } from '../commerce';
import { config } from '../config';

export default function Home() {
  const edit = ['modal-viscose', 'viscose-gradasi', 'hayla-khiban'].map(id => products.find(p => p.id === id)!);
  return <div className="ameraah-home">
    <section className="a-cover">
      <div className="a-cover-copy">
        <span className="eyebrow">AMERAAH.CO / THE ESSENTIAL COLLECTION</span>
        <h1>Simplicity<br/>reveals<br/><em>luxury.</em></h1>
        <p>Kesederhanaan yang terasa istimewa.<br/>Pilihan hijab untuk hadir sebagai dirimu.</p>
        <Link className="button" to="/koleksi">Temukan koleksimu <ArrowUpRight size={18}/></Link>
        <a className="a-scroll" href="#essentials"><span>LESS, WITH A LITTLE MORE MEANING</span><ArrowDown size={17}/></a>
      </div>
      <div className="a-cover-visual">
        <img src={imageUrl('modal-alt.webp')} srcSet={imageSet('modal-alt.webp')} sizes="(max-width:700px) 100vw, 52vw" alt="Viscose Polos putih, dipadukan dengan blazer dusty rose" width="900" height="1200" fetchPriority="high"/>
        <span className="a-photo-index">01 / THE EVERYDAY MUSE</span>
        <Link className="a-photo-label" to="/produk/modal-viscose"><span><small>THE SIGNATURE ESSENTIAL</small><strong>Viscose Polos</strong><span>Rp48.000</span></span><ArrowUpRight size={26}/></Link>
      </div>
    </section>
    <section className="a-index" aria-label="Tujuh koleksi Ameraah">{products.map((p,i)=><Link key={p.id} to={`/produk/${p.slug}`}><span>0{i+1}</span><strong>{p.name}</strong><small>{priceLabel(p)}</small></Link>)}</section>
    <section className="a-essentials section" id="essentials">
      <div className="a-section-heading"><div><span className="eyebrow">THE CONSIDERED EDIT</span><h2>Everyday pieces.<br/><em>Quietly beautiful.</em></h2></div><div><p>Warna yang mudah dipadukan.<br/>Siluet yang menjadi bagian dari harimu.</p><Link className="text-link" to="/koleksi">Lihat 7 koleksi <ArrowUpRight size={17}/></Link></div></div>
      <div className="a-edit-grid">{edit.map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>
    <section className="a-statement"><div className="a-statement-photo"><img src={imageUrl('gradasi.webp')} alt="Perpaduan warna Viscose Gradasi" width="800" height="1000" loading="lazy"/></div><div className="a-statement-copy"><span className="eyebrow">A NOTE ON SIMPLICITY</span><h2>Keindahan<br/>dalam hal<br/><em>sederhana.</em></h2><p>Sentuhan warna. Jatuh kain. Cara kamu mengenakannya. Bagi Ameraah.co, hal-hal kecil itulah yang melengkapi penampilan.</p><Link className="text-link" to="/tentang">Kenali Ameraah.co <ArrowUpRight size={17}/></Link><span className="a-statement-sign">A.</span></div></section>
    <section className="a-price-edit section"><span className="eyebrow">YOUR ESSENTIALS, AT A GLANCE</span><div><h2>Seven pieces.<br/><em>Your own way.</em></h2><p>Jelajahi pilihanmu, lihat setiap warna, lalu simpan yang kamu suka.</p></div><div className="a-price-list">{products.map((p,i)=><Link key={p.id} to={`/produk/${p.slug}`}><small>0{i+1}</small><h3>{p.name}</h3><span>{priceLabel(p)}</span><ArrowUpRight size={19}/></Link>)}</div></section>
    <section className="a-invitation"><span className="eyebrow">LET’S FIND YOUR EVERYDAY</span><h2>Pilihan yang terasa<br/><em>seperti dirimu.</em></h2><p>Kami siap membantu memilih warna dan koleksi.</p><a className="button" href={whatsappUrl(`Halo ${config.brand}, saya ingin dibantu memilih koleksi.`)} target="_blank" rel="noreferrer">Sapa Ameraah.co <ArrowRight size={18}/></a><Link className="text-link" to="/panduan">Cara memesan <ArrowUpRight size={16}/></Link></section>
  </div>;
}
