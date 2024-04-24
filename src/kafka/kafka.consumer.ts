import kafka from './kafka.config';

const consumer = kafka.consumer({ groupId: 'opa' });

export default consumer;
