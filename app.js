



const workerURL = `./worker.js?${Math.round(Math.random()*10000)}`;
const wallClockWorker = new Worker(workerURL);



wallClockWorker.onmessage = event => {
    const t = new Date(Date.now());

    const hands = [ t.getHours(), t.getMinutes(), t.getSeconds()].map( z => Array.from(`${z}`.padStart(2,0))).flat(1);
    

    Array.from(document.querySelectorAll("main > div.hand")).forEach( (d,i)=> {
        d.innerText = hands[i];
    })


}