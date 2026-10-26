import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { instagramDmUrl } from '../data/content';
export default function Header() {
 const [open, setOpen] = useState(false);
 return <><div className="announcement">A LITTLE LASH LOVE. A WHOLE NEW ENERGY. <span>✦</span> APPOINTMENTS VIA DM</div><header className="header"><a className="logo" href="#" aria-label="Blertah Lashes home">blertah<span>L A S H E S</span></a><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{[['#services','The lash menu'],['#philosophy','Our philosophy'],['#gallery','Our work'],['#studio','The studio'],['#faq','FAQs']].map(([href,label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><a href={instagramDmUrl} target="_blank" rel="noreferrer" className="header-book">DM to book <ArrowUpRight size={16}/></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button></header></>;
}
