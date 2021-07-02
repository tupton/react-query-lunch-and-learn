import React from 'react'; // highlight-line
import {getShipment} from 'App/api/corrogo';
import {useQuery} from 'react-query'; // highlight-line

// eslint-disable-next-line react/prop-types
export const ShipmentDetails = ({shipmentId, setError}) => {
  // highlight-start
  const fetchShipmentDetailsQuery = useQuery(['shipments', shipmentId], (id) => getShipment(id), {
    onError: (error) => {
      console.error(error);
      setError('Error retrieving shipment!', error.message);
    }
  });
  const shipmentDetailsResponse = JSON.stringify(fetchShipmentDetailsQuery.data?.data, null, 2);

  if (fetchShipmentDetailsQuery.isLoading) {
    return 'Loading…';
  }
  // highlight-end

  return <pre>{shipmentDetailsResponse}</pre>;
};
