export class BookInventory {
    constructor(
        public title: string,
        public author: string,
        public category?: string,
        public ISBN?: string,
        public blurb?: string
      ) {  }
}
