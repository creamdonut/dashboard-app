import { Router } from 'pages';
import { ErrorBoundary } from './ErrorBoundery';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
}

export default App;
