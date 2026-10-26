import { ArrowUpRight } from 'lucide-react';
import { priceMenu, priceSourceUrl, instagramDmUrl } from '../data/content';
const formatPrice = (price) => `€${price}`;
export default function PriceMenu() {
  return <div className="price-menu">
    <div className="price-menu-heading"><div><span className="eyebrow">THE FULL BEAUTY MENU</span><h3>A little detail.<br/><em>A beautiful difference.</em></h3></div><a className="text-link" href={priceSourceUrl} target="_blank" rel="noreferrer">View Instagram price list <ArrowUpRight size={16}/></a></div>
    <div className="price-menu-grid">{priceMenu.map(group => <div className="price-category" key={group.category}><h4>{group.category}</h4><dl>{group.items.map(item => <div className="price-row" key={item.name}><dt>{item.name}</dt><dd>{formatPrice(item.price)}</dd></div>)}</dl></div>)}</div>
    <div className="price-menu-footer"><p>Prices as published in our Instagram Prices highlight. Appointments and availability are confirmed in DM.</p><a href={instagramDmUrl} target="_blank" rel="noreferrer" className="text-link">DM to book <ArrowUpRight size={16}/></a></div>
  </div>;
}
