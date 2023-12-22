import { apiDocsModuleWsdlDocApiRef, ApiDocsModuleWsdlDocClient } from './api';
import {
  createApiFactory,
  createPlugin,
  discoveryApiRef,
  identityApiRef,
} from '@backstage/core-plugin-api';

/**
 * The plugin instance.
 *
 * @public
 */
export const apiDocsModuleWsdlDocPlugin = createPlugin({
  id: 'api-docs-module-wsdl',
  apis: [
    createApiFactory({
      api: apiDocsModuleWsdlDocApiRef,
      deps: {
        identityApi: identityApiRef,
        discoveryApi: discoveryApiRef,
      },
      factory({ identityApi, discoveryApi }) {
        return new ApiDocsModuleWsdlDocClient({ identityApi, discoveryApi });
      },
    }),
  ],
});
