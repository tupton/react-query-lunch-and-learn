/* eslint-disable react/prop-types */
import React, {useCallback} from 'react';
import {Field} from 'formik';
import {useQuery} from 'react-query';
import {FormikSelect} from 'shipwell-ui';
import {fetchBrokerShipperRelationshipsPromise} from 'App/api/brokers';

export const ShipmentDetails = ({company}) => {
  // highlight-start
  const getCustomers = useCallback(
    (opts = {}) => {
      const {brokerage} = company;
      if (brokerage?.id) {
        return fetchBrokerShipperRelationshipsPromise(brokerage.id, opts);
      }
    },
    [company]
  );
  // highlight-end

  // highlight-start
  const getCustomersQuery = useQuery(['brokerages', company?.brokerage?.id], () => getCustomers(), {
    // highlight-end
    enable: company?.brokerage?.id
  });

  return (
    <Field
      name="customer"
      label="Customer Account"
      component={FormikSelect}
      async
      defaultOptions={getCustomersQuery.data?.body?.results} // highlight-line
      getOptionLabel={(option) => option.company.name}
      getOptionValue={(option) => option.company.id}
      // highlight-start
      loadOptions={async (input) => {
        const response = await getCustomers({companyContains: input});
        return response?.body?.results;
      }}
      // highlight-end
    />
  );
};
