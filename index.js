module.exports = class TermUtility {

    constructor() {

        this.data = require("./console.json");
    }

    optIN(ID) {
        console.info("[TermUtility] Registration Opt-in: This source code is registered to Fleco's support programme. Your remixed source is eligible to be showcased on Fleco's website and also receive limited support.")
     };
    
    optOUT(ID){
        console.warn("[TermUtility] This source-code is opted out of Fleco's support programme, meaning you are ineligible to receive support on this code.")
        console.info("[Fleco] We recommend you keep TermUtility to be kept updated on latest production releases of Fleco!")
    }

    /**
     * @param {number} [limit=1]
     * @param {function} [fn=null]
     */

    // This stuff is not used at the moment. It'll be useful in the future though.
    generate(limit=1, fn=null) {
        if (!limit || typeof limit !== "number") limit = 1;
        let arr = [];

        for (let i = 0; i < limit; i++) {
            let w = !fn ? this.random() : this.random(1, this.data("q").filter(fn));

            arr.push({
                text: w[0].console,
                id: w[0].id
            });
        }

        return arr;
    }

    /**
     * Returns random item from array
     * @param {number} length Length
     * @param {string[]} [arr=null] Custom array
     * @returns {string[]}
     */
    random(length=1, arr=null) {
        if (!length || typeof length !== "number") length = 1;
        const random = Array.isArray(arr) ? this.shuffle(arr) : this.shuffle(this.data);
        return random.slice(0, length);
    }

 
    /**
     * Shuffles array
     * @param {any[]} array Array to shuffle
     * @param {boolean} [force=false] IF it should force shuffle
     */
    shuffle(array, force=false) {
        if (!Array.isArray(array)) throw new Error("Invalid array!");

        if (!!force) {
            let len = array.length;
            let swap;
            let i;

            while (len > 0) {
                i = Math.floor(Math.random() * len);
                len--;
                swap = array[len];
                array[len] = array[i];
                array[i] = swap;
            }
            return array;
        } else {
            return array.sort(() => 0.5 - Math.random());
        }
    }

    /**
     * Data size
     */
    get size() {
        return this.data.length;
    }

}

//module.exports = TermUtility;