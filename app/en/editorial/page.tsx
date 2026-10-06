import { EditorialPage } from '../../components/editorial-page';
import { contentMetadata } from '../../content/metadata';

export const metadata = contentMetadata('/editorial', 'en', 'Editorial and testing process', 'Who creates Puzzly content and how photographs, guides, translations, and controls are reviewed.');

export default function Page() {
  return <EditorialPage locale="en" />;
}
