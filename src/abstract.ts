abstract class clickpicture {
    constructor(
        public cameramode: string,
        public filter: string
    ) { }

    abstract getsepia(): void
    getreeltime(): number {
        return 8
    }
}

class instagram extends clickpicture {
    constructor(
        public cameramode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameramode, filter)
    }

    getsepia(): void {
        console.log("sepia")
    }

}

const hc = new instagram("potrait", "vintage", 3)

hc.getreeltime()
