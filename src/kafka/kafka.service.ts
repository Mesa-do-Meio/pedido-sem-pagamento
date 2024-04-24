import { Injectable } from '@nestjs/common';
import producer from './kafka.producer';

@Injectable()
export class KafkaService {
    async sendMessage(topic: string, message: string): Promise<void> {
        await producer.send({
            topic,
            messages: [{ value: message }],
        });
    }
}
