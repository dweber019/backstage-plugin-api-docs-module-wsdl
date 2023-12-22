import React from 'react';
import useAsync from 'react-use/lib/useAsync';
import { Alert } from '@material-ui/lab';
import { Progress } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { apiDocsModuleWsdlDocApiRef } from '../../api';
import { useEntity } from '@backstage/plugin-catalog-react';
import { stringifyEntityRef } from '@backstage/catalog-model';

export type WsdlDefinitionProps = {
  definition: string;
};

export const WsdlDefinition = ({ definition }: WsdlDefinitionProps) => {
  const apiDocsModuleWsdlDocApi = useApi(apiDocsModuleWsdlDocApiRef);
  const { entity } = useEntity();
  const result = useAsync(() => {
    return apiDocsModuleWsdlDocApi.convert(
      definition,
      stringifyEntityRef(entity),
    );
  }, [definition]);

  if (result.loading) {
    return <Progress />;
  }

  if (result.error) {
    return <Alert severity="error">{result?.error?.message}</Alert>;
  }

  return <div dangerouslySetInnerHTML={{ __html: result.value || '' }} />;
};
