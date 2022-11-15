import { Router } from "express";

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
    const products = await productFiles.getAll();

    res.render("productList", {
        products,
        emptyProducts: !Boolean(products.length)
    })
});

productRouter.post(
    "/",
    async (req, res) => {
        const { title, price, thumbnail } = req.body;

        await productFiles.save({
            title,
            price,
            thumbnail,
        });
        res.redirect("/");
    }
);