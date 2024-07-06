import { Suspense } from 'react';
import UpdatePromptPage from '@components/UpdatePromptPage';

const UpdatePrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePromptPage />
    </Suspense>
  );
};

export default UpdatePrompt;
