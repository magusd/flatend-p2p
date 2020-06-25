const {Node, Context} = require("flatend");

const world = ctx => ctx.send("world!");

async function main() {
    await Node.start({
        addrs: ["127.0.0.1:9000"],
        services: {
            'world': world,
        },
    });
}

main().catch(err => console.error(err));
