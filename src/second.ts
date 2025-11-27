interface TakePhoto {
    cameraMode: string
    filter: string
    burstMode: number
}

interface story {
    createStory(): string;
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) { }

}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ) { }

    createstory(): void {
        console.log("story")
    }
}

