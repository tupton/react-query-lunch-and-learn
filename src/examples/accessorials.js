import React from 'react';
import {useQuery} from 'react-query';
import {Field} from 'formik';
import {FormikSelect} from 'shipwell-ui';
import {fetchAccessorialCodesPromise} from 'App/api/shipment'; // highlight-line
import {filterAccessorials} from 'App/utils/globals';

export const AccessorialField = () => {
  const getAccessorialsQuery = useQuery('accessorials', () => fetchAccessorialCodesPromise()); // highlight-line
  const accessorials = filterAccessorials(getAccessorialsQuery.data?.body)?.drayageShipment || []; // highlight-line
  return (
    <Field
      name="accessorials"
      label="Shipment Accessorials"
      component={FormikSelect}
      options={accessorials} // highlight-line
      getOptionLabel={(option) => option.description}
      getOptionValue={(option) => option.id}
      isMulti
    />
  );
};
