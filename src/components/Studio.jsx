import { ArrowUpRight, MapPin } from 'lucide-react';
import { instagramDmUrl } from '../data/content';
const address = 'Rruga Haxhi Zeka 98, Vushtrri, Kosovo';
const query = encodeURIComponent(address);
export default function Studio() {
  return <section className="section studio" id="studio">
    <div className="section-heading"><div><span className="eyebrow">YOUR LITTLE BEAUTY ESCAPE</span><h2>Come for the lashes.<br/><em>Stay for the feeling.</em></h2></div><p>A glimpse inside Blertah Lashes.<br/>Your appointment, your moment.</p></div>
    <div className="studio-photos"><figure><img src="/images/studio-lounge.jpg" alt="The mirror and seating corner inside Blertah Lashes studio" loading="lazy"/><figcaption>A little time for you</figcaption></figure><figure><img src="/images/studio-details.jpg" alt="Coffee, candle, and seasonal decor in the studio seating area" loading="lazy"/><figcaption>It’s all in the details</figcaption></figure></div>
    <div className="location-layout"><div className="location-copy"><MapPin size={27} strokeWidth={1.5}/><span className="eyebrow">FIND US IN VUSHTRRI</span><h3>Your next lash date<br/>starts here.</h3><address>Rruga Haxhi Zeka 98<br/>Vushtrri, Kosovo</address><p>Visits by appointment. Book exclusively through Instagram DM.</p><a className="button" href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer">Search address in Google Maps <ArrowUpRight size={18}/></a><a className="text-link" href={instagramDmUrl} target="_blank" rel="noreferrer">DM for an appointment <ArrowUpRight size={16}/></a></div><div className="map-frame"><iframe title="Map: Rruga Haxhi Zeka 98, Vushtrri" src="https://www.openstreetmap.org/export/embed.html?bbox=20.955%2C42.823%2C20.974%2C42.835&layer=mapnik" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer">Haxhi Zeka area, Vushtrri · DM for the exact entrance ↗</a></div></div>
  </section>;
}

