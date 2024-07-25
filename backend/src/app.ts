import express, { Application } from "express";
import { corsHeaders } from "./middlewares/cors.middleware";
import { authRouter } from "./routes/auth.router";
import { userRouter } from "./routes/user.router";
import { productsRouter } from "./routes/products.router";
import { ordersRouter } from "./routes/orders.router";

const app: Application = express();

app.use(express.json());
app.use(corsHeaders);

// app.use((err: any, req: any, res: any, next: any) => {
//     if (err) {
//         res.status(500).json({
//             error: err.message
//         });
//     }
//     next();
// })

// app.use(express.urlencoded({extended: false}));


app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export { app }