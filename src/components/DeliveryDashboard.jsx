import { Table } from 'antd'

function DeliveryDashboard() {
    const columns = [
        {
            title: 'Delivery ID',
            dataIndex: 'deliveryId',
            key: 'deliveryId',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'PickUpPoint',
            dataIndex: 'pickUpPoint',
            key: 'pickUpPoint',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Registry Date',
            dataIndex: 'registryDate',
            key: 'registryDate',
        },
        {
            title: 'Delivery Date',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
        },
        {
            title: 'PickUp Date',
            dataIndex: 'pickUpDate',
            key: 'pickUpDate',
        },
    ]

    // dummy data
    const dataSource = [
        {
            deliveryId: 1,
            owner: 'John Doe',
            pickUpPoint: 'ABC Street',
            status: 'Picked Up',
            registryDate: '2023-05-15',
            deliveryDate: '2023-05-16',
            pickUpDate: '2023-05-14',
        },
        {
            deliveryId: 2,
            owner: 'Jane Smith',
            pickUpPoint: 'XYZ Avenue',
            status: 'In Transit',
            registryDate: '2023-05-10',
            deliveryDate: '----',
            pickUpDate: '----',
        },
        {
            deliveryId: 3,
            owner: 'Mike Johnson',
            pickUpPoint: '123 Lane',
            status: 'Pending Pickup',
            registryDate: '2023-05-12',
            deliveryDate: '2023-05-19',
            pickUpDate: '----',
        },
        {
            deliveryId: 4,
            owner: 'Sarah Williams',
            pickUpPoint: '456 Road',
            status: 'In Transit',
            registryDate: '2023-05-13',
            deliveryDate: '----',
            pickUpDate: '----',
        },
        {
            deliveryId: 5,
            owner: 'Michael Brown',
            pickUpPoint: '789 Avenue',
            status: 'Delivered',
            registryDate: '2023-05-11',
            deliveryDate: '2023-05-18',
            pickUpDate: '2023-05-10',
        },
    ]
    
    return (
        <Table 
            columns={columns}
            dataSource={dataSource} 
            style={{ color: '#D3CEDF' }}
        />
    )
}

export default DeliveryDashboard
