import styles from './resource-content.module.css';
import { Typography } from 'components/ui';
import { URLBanner } from 'components/banner';
import { ResponseWindow } from 'components/response-window';
import DescriptionSection from './description-section';
import ParametersSection from './parameters-section';
import { getApiUrl } from 'data/data';

const ResourceContent = ({ contentData }) => {
  const { title, endpoint, sections } = contentData;
  const { description, parameters } = sections;
  const apiUrl = getApiUrl();

  return (
    <>
      <Typography variant="h2" className={styles.mainHeading}>
        {title}
      </Typography>
      <URLBanner method="get" url={apiUrl} endpoint={endpoint} />
      <DescriptionSection description={description.description} />
      <ResponseWindow response={parameters.responseExample} />

      <ParametersSection title={parameters.title} sectionData={parameters.content} />
    </>
  );
};

export default ResourceContent;
