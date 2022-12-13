import styles from './response-window.module.css';
import { Typography } from 'components/ui';

const ResponseWindow = ({ response }) => {
  return (
    <div className={styles.responseWindow}>
      <header className={styles.responseHeader}>
        <Typography variant="h3">Response</Typography>
      </header>
      <pre className={styles.codeBlockContainer}>
        <code className={styles.codeBlock}>{response}</code>
      </pre>
    </div>
  );
};

export default ResponseWindow;
