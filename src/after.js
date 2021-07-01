import React from "react";
import { getShipment } from "App/api/shipments";
import { useQuery } from "react-query";

// eslint-disable-next-line react/prop-types
export const ShipmentDetails = ({ shipmentId, setError }) => {
	const fetchShipmentDetailsQuery = useQuery(
		["shipments", shipmentId],
		(id) => getShipment(id),
		{
			onError: (error) => {
				console.error(error);
				setError("Error retrieving shipment!", error.message);
			},
		}
	);

	const shipmentDetailsResponse = JSON.stringify(
		fetchShipmentDetailsQuery.data?.data,
		null,
		2
	);

	if (fetchShipmentDetailsQuery.isLoading) {
		return "Loading…";
	}

	return <pre>{shipmentDetailsResponse}</pre>;
};
