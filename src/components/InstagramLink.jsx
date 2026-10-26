import { instagramUrl } from '../data/content';
const InstagramLink = ({ children, className = '' }) => <a className={className} href={instagramUrl} target="_blank" rel="noreferrer">{children}</a>;

export default InstagramLink;

