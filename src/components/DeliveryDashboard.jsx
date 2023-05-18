import { Table, Typography } from 'antd'

const { Title, Paragraph } = Typography;

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
          owner: 'Walter White',
          pickUpPoint: '308 Negra Arroyo Lane',
          status: 'Completed',
          registryDate: '2008-01-20',
          deliveryDate: '2008-02-10',
          pickUpDate: '2008-01-25',
        },
        {
          deliveryId: 2,
          owner: 'Gustavo Fring',
          pickUpPoint: 'Los Pollos Hermanos',
          status: 'Completed',
          registryDate: '2010-03-12',
          deliveryDate: '2010-03-28',
          pickUpDate: '2010-03-15',
        },
        {
          deliveryId: 3,
          owner: 'Jesse Pinkman',
          pickUpPoint: 'RV',
          status: 'Pending Pick Up',
          registryDate: '2012-07-05',
          deliveryDate: '2012-07-06',
          pickUpDate: '----',
        },
        {
          deliveryId: 4,
          owner: 'Hank Schrader',
          pickUpPoint: 'DEA Office',
          status: 'Cancelled',
          registryDate: '2009-09-18',
          deliveryDate: '----',
          pickUpDate: '----',
        },
        {
          deliveryId: 5,
          owner: 'Skyler White',
          pickUpPoint: 'A1A Car Wash',
          status: 'In Progress',
          registryDate: '2011-05-02',
          deliveryDate: '----',
          pickUpDate: '----',
        },
      ];
      
    return (
      <div>
        <Title level={2}>Deliveries</Title>  
        <Table 
            columns={columns}
            dataSource={dataSource} 
            pagination={false}
        />
      </div>
    )
}

export default DeliveryDashboard
