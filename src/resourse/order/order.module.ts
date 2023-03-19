import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { Order, OrderSchema, User, UserSchema } from "src/schema";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";


@Module({
    imports: [ MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}, {name: User.name, schema: UserSchema}])],
    controllers: [OrderController],
    providers: [OrderService],
    exports: [OrderService]
})

export class OrderModule {}