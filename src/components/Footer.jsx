import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const ICON_SIZE = 35;

export default function Footer() {
  return (
    <div className="container mx-auto py-10">
      <ul className="flex gap-5 justify-center">
        <li>FAQs</li>
        <li>Contact Us</li>
      </ul>
      <ul className="flex justify-center gap-10 my-7">
        <a href="https://www.facebook.com/">
          <FaFacebookF size={ICON_SIZE} />
        </a>

        <a href="https://twitter.com/">
          <FaTwitter size={ICON_SIZE} />
        </a>

        <a href="https://www.youtube.com/">
          <FaYoutube size={ICON_SIZE} />
        </a>

        <a href="https://www.instagram.com/">
          <FaInstagram size={ICON_SIZE} />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedin size={ICON_SIZE} />
        </a>
      </ul>
      <ul className="flex gap-16 justify-center">
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Terms & Conditions</li>
      </ul>
    </div>
  );
}
