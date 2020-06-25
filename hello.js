const {Node, Context} = require("flatend");

const helloWorld = ctx => ctx.send("Hello world!");

async function main() {
    await Node.start({
        addrs: ["127.0.0.1:9000"],
        services: {
            'hello_world': helloWorld,
        },
    });
}

main().catch(err => console.error(err));