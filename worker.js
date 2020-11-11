


const interval = 850;

(function sync(i) {
    const s = new Date(Date.now()).getSeconds();
    setTimeout(() => {
        const b = performance.now();
        while (s === new Date(Date.now()).getSeconds()) { }
        const d = Math.round(performance.now() - b);
        postMessage({ wallclock: { padding: d} });
        sync(i);
    }, i);
})(interval);

