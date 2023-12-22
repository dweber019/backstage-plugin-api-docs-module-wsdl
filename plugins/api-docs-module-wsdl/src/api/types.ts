import { createApiRef } from '@backstage/core-plugin-api';

/**
 * The API used to convert WSDL to HTML.
 *
 * @public
 */
export interface ApiDocsModuleWsdlDocApi {
  /**
   * Convert WSDL to HTML.
   *
   * @public
   */
  convert(xml: string, entityRef: string): Promise<string>;
}

/**
 * ApiRef for the ApiDocsModuleWsdlDocApi.
 *
 * @public
 */
export const apiDocsModuleWsdlDocApiRef = createApiRef<ApiDocsModuleWsdlDocApi>(
  {
    id: 'plugin.api-docs-module-wsdl.api',
  },
);
