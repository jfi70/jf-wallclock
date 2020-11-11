

const workerFrom = url => {
    const f = (resolve, reject) => {
        try {
            const w = new Worker(`${url}?${Math.round(Math.random() * 10000)}`);
            resolve(w);
        }
        catch (e) {
            reject(e);
        }
    }
    return new Promise(f)
}

onload = async () => {
    const worker = await workerFrom("./worker.js");
    worker.onmessage = event => {
        // console.log("padding:",event.data.wallclock.padding)
        const t = new Date(Date.now());
        const digits = [t.getHours(), t.getMinutes(), t.getSeconds()].map(z => Array.from(`${z}`.padStart(2, 0))).flat(1);
        Array.from(document.querySelectorAll("main > div.segment")).forEach((d, i) => {
            d.innerText = digits[i];
        })
    }
}
