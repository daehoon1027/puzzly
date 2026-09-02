import type { Metadata } from 'next';
import { InfoPage } from '../../components/info-page';

export const metadata: Metadata = {
  title: { absolute: 'Contact Puzzly | Puzzly' },
  description: 'Contact Puzzly about bugs, image rights, privacy, or product feedback.',
  alternates: { canonical: '/en/contact', languages: { 'ko-KR': '/contact', 'en-US': '/en/contact' } },
};

export default function EnglishContactPage() {
  return <InfoPage locale="en" eyebrow="CONTACT" title="Tell us about Puzzly" intro="We review bug reports, feature ideas, image rights questions, and privacy requests by email to improve the service.">
    <section><h2>How to contact us</h2><p>Send us an email using the button below. Your default mail app will open with a subject already filled in.</p><p><a className="contact-button" href="mailto:daehoon1027@gmail.com?subject=Puzzly%20contact">Email Puzzly →</a></p><p>Contact email: <a href="mailto:daehoon1027@gmail.com">daehoon1027@gmail.com</a></p></section>
    <section><h2>What to include for a faster reply</h2><ul><li>The page where the issue occurred and the puzzle version you selected</li><li>Piece count, search term, device, and browser</li><li>The steps that reproduce the issue and a screenshot if possible</li></ul><p>Please do not include sensitive personal information such as national ID numbers or financial details.</p></section>
    <section><h2>Contact topics</h2><div className="text-grid"><div><h3>Features and bugs</h3><p>Tell us if pieces do not move, images fail to load, or an accessibility improvement would help.</p></div><div><h3>Content and rights</h3><p>For image source, copyright, or inappropriate-image requests, include the image and search term.</p></div><div><h3>Privacy</h3><p>We can answer questions about cookies, external service requests, and the privacy policy.</p></div></div></section>
  </InfoPage>;
}
