export class Quote {
    showPublisher:boolean
     constructor(public id: number,public description: string, public author: string, public publisher: string,public completeDate: Date,){
         this.showPublisher = false;
     }

}
