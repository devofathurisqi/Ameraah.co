import {Link} from 'react-router-dom';
import {ArrowRight,ArrowUpRight} from 'lucide-react';
import {Logo} from '../components/Layout';
import {ShoppingSteps} from '../App';
import {whatsappUrl} from '../commerce';
import {config} from '../config';
export default function About(){return <><section className="about-hero section"><div><span className="eyebrow">A NOTE FROM AMERAAH.CO</span><h1>Sederhana.<br/><em>Terasa istimewa.</em></h1><p>Simplicity reveals luxury. Ameraah.co mengajakmu menemukan keindahan dalam pilihan yang sederhana: warna yang dekat denganmu, siluet yang kamu sukai, dan cara mengenakannya yang terasa personal.</p><p>Delapan pilihan dalam satu koleksi yang ringkas. Jelajahi Viscose Polos dan Gradasi, Paris Jadul, Hayla Khiban, Ciput, Zea Sport, Pashmina Airflow, dan Pashmina Tencel. Pilih warna, simpan ke tas, lalu percakapkan detailnya bersama kami.</p><Link to="/koleksi" className="button">Jelajahi koleksi <ArrowRight size={18}/></Link></div><div className="about-identity"><Logo/><p>{config.tagline}</p><a className="text-link" href={whatsappUrl(`Halo ${config.brand}, saya ingin bertanya tentang koleksi.`)} target="_blank" rel="noreferrer">Sapa Ameraah.co <ArrowUpRight size={18}/></a></div></section><ShoppingSteps/></>;}
