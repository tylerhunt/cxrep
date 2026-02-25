import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()

import Layout from '@/components/layout';

createInertiaApp({
  title: (title) => (title ? `${title} - CXRep` : 'CXRep'),
  // progress: false,

  resolve: (name) => {
    const pages = import.meta.glob('../pages/**/*.jsx', { eager: true });
    const page = pages[`../pages/${name}.jsx`];

    if (!page) {
      console.error(`Missing Inertia page component: '${name}.jsx'`);
    }

    page.default.layout ||= (page) => <Layout>{page}</Layout>;

    return page;
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    );
  },

  defaults: {
    form: {
      forceIndicesArrayFormatInFormData: false,
    },
    future: {
      useScriptElementForInitialPage: true,
      useDataInertiaHeadAttribute: true,
      useDialogForErrorModal: true,
      preserveEqualProps: true,
    },
  },
});
