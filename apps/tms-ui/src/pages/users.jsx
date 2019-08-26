import React from 'react';
import router from 'umi/router';
import styles from './users.css';

export default function() {
  const goBack = () => router.goBack();

  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
