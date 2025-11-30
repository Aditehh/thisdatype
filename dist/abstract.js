"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class clickpicture {
    cameramode;
    filter;
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    getreeltime() {
        return 8;
    }
}
class instagram extends clickpicture {
    cameramode;
    filter;
    burst;
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getsepia() {
        console.log("sepia");
    }
}
const hc = new instagram("potrait", "vintage", 3);
hc.getreeltime();
//# sourceMappingURL=abstract.js.map