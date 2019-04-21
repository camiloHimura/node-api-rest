const Item  = require("./item.model");

module.exports = {
    execute: async () => {
        const item = await Item.create({
                        name: "sony xperia xz1",
                        description: "This is a test",
                        state: "stock",
                        quantity: 10
                    });
        
        console.log("item", item)
    }
}

/* const execute  */
