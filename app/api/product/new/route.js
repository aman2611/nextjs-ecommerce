
import connectMongo  from '@/database/db.js'
import ProductModel from '@/models/product.js';

export const POST = async (request) => { 
    const data = await request.json();
    try {
        await connectMongo();
        const newProduct = new ProductModel(data);
        await newProduct.save();
        return new Response(JSON.stringify(newProduct), { status: 201 })
    } catch (error) {
        return new Response(error, { status: 500 });
    }
}