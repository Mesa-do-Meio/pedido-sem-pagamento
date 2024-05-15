import { SellProductDto } from "src/modules/kart/dto/kart.dto"

export default class PaymentEvent {
  type: string
  data: SellProductDto
}