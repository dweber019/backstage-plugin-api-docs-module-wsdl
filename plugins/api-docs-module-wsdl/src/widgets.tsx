import React from 'react';
import { WsdlDefinitionWidget } from './components/WsdlDefinitionWidget';

/**
 * @public
 */
export const wsdlDocsApiWidget = {
  type: 'wsdl',
  title: 'WSDL',
  component: (definition: string) => (
    <WsdlDefinitionWidget definition={definition || ''} />
  ),
};
