import React, {useState, useCallback, useEffect} from 'react'; // highlight-line
import {getShipment} from 'App/api/corrogo';

// eslint-disable-next-line react/prop-types
export const ShipmentDetails = ({shipmentId, setError}) => {
  // highlight-start
  const [shipmentDetailsResponse, setShipmentDetailsResponse] = useState();
  const [isShipmentDetailsLoading, setIsShipmentDetailsLoading] = useState(false);

  const fetchShipment = useCallback(
    async (id) => {
      setIsShipmentDetailsLoading(true);
      try {
        const response = await getShipment(id);
        setShipmentDetailsResponse(JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error(error);
        setError('Error retrieving shipment!', error.message);
      } finally {
        setIsShipmentDetailsLoading(false);
      }
    },
    [setError]
  );

  useEffect(() => {
    if (!shipmentDetailsResponse) {
      fetchShipment(shipmentId);
    }
  }, [shipmentDetailsResponse]);

  if (isShipmentDetailsLoading) {
    return 'Loading…';
  }
  // highlight-end

  return <pre>{shipmentDetailsResponse}</pre>;
};
