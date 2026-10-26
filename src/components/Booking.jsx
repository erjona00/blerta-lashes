import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { instagramDmUrl } from '../data/content';
export default function Booking() {
  return <section className="booking section" id="contact"><div><span className="eyebrow">YOUR NEXT BEAUTY MOMENT</span><h2>Good lashes.<br/><em>Great energy.</em></h2><p>Your new look starts with a conversation. Send us a DM<br className="desktop"/> for appointments, availability, and a little lash inspiration.</p></div><div className="dm-card"><MessageCircle size={32} strokeWidth={1.3}/><span className="eyebrow">APPOINTMENTS VIA INSTAGRAM DM ONLY</span><h3>Let’s talk lashes.</h3><p>Tell us your preferred look and when you’d like to visit. We’ll confirm the details with you in DM.</p><a className="button" href={instagramDmUrl} target="_blank" rel="noreferrer"><Instagram size={18}/> DM to book <ArrowUpRight size={18}/></a><small>@blertah.lashes · Confirmed personally in DM</small></div></section>;
}
