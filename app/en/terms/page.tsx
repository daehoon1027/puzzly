import { InfoPage } from '../../components/info-page';
import { contentMetadata } from '../../content/metadata';
export const metadata = contentMetadata('/terms', 'en', 'Terms of use', 'Puzzly service conditions, image rights, availability, and contact information.');
export default function Page() {
  return <InfoPage locale="en" path="/en/terms" eyebrow="TERMS" title="Terms of use" intro="This English version explains the same terms as our Korean page. Effective August 27, 2026; English translation added September 14, 2026.">
    <section><h2>1. Purpose of the service</h2><p>Puzzly is a free service for choosing images and playing photo puzzles in a web browser. No account is required. Some features depend on external image and hosting services.</p></section>
    <section><h2>2. Appropriate use</h2><p>Respect applicable laws and the rights of others. Do not disrupt normal operation, send automated bulk requests, or use the service for unlawful or harmful purposes.</p></section>
    <section><h2>3. Intellectual property and external content</h2><p>Rights in Puzzly’s service name, interface, and original explanations and guides belong to the operator or their respective rights holders. Recommended images remain subject to the rights of their creators and applicable Pexels or Unsplash licenses and terms. Email us with questions about image sources or rights.</p></section>
    <section><h2>4. Availability</h2><p>We work to provide a stable service but cannot guarantee uninterrupted operation on every device and network. Images may fail to appear because of external provider outages, changed addresses, or network conditions. Parts of the service may change for maintenance or improvements.</p></section>
    <section><h2>5. Responsibility</h2><p>We operate the free service with reasonable care. Responsibility for damage arising from users’ device environments, external services, or inappropriate use may be limited to the extent permitted by applicable law.</p></section>
    <section><h2>6. Changes and contact</h2><p>These terms may be updated when the service or relevant requirements change, with an updated effective date. Send questions about use, image rights, or bugs to <a href="mailto:daehoon1027@gmail.com">daehoon1027@gmail.com</a>.</p></section>
  </InfoPage>;
}
