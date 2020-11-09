


const interval = 880;

function sync(i) {

    const start = new Date(Date.now());
    const s = start.getSeconds();
    setTimeout(() => {
        const b = performance.now();
        while (s === new Date(Date.now()).getSeconds()) { }
        const d = performance.now() - b;
        postMessage({ wall_clock: { timestamp: Date.now() , padding: d} });
        sync(i);
    }, i);
};

sync(interval);
