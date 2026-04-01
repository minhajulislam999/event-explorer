import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-auto">
      <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="footer-title text-xl font-bold">Event Explorer</span>
          <p className="mt-2 text-sm">Discover and explore exciting local events near you. From tech to art, we have it all!</p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/login" className="link link-hover">Login</Link>
          <Link to="/register" className="link link-hover">Register</Link>
          <Link to="#" className="link link-hover">Terms & Conditions</Link>
          <Link to="#" className="link link-hover">Privacy Policy</Link>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" className="link link-hover">Facebook</a>
            <a href="https://twitter.com" target="_blank" className="link link-hover">Twitter</a>
            <a href="https://instagram.com" target="_blank" className="link link-hover">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm border-t border-neutral-700">
        <p>© 2025 Event Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;