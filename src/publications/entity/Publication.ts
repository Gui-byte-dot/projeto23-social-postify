export class Publication {
    constructor(
      private _image: string,
      private _title: string,
      private _dateToPublish: string,
      private _published: boolean,
      private _socialMedia: string
    ) {}
  
    set image(image: string) {
      this._image = image;
    }
  
    get image() {
      return this._image;
    }
  
    set title(title: string) {
      this._title = title;
    }
  
    get title() {
      return this._title;
    }
  
    set dateToPublish(dateToPublish: string) {
      this._dateToPublish = dateToPublish;
    }
  
    get dateToPublish() {
      return this._dateToPublish;
    }
  
    set published(published: boolean) {
      this._published = published;
    }
  
    get published() {
      return this._published;
    }

    set socialMedia(socialMedia: string) {
        this._socialMedia = socialMedia;
      }
    
      get socialMedia() {
        return this._socialMedia;
      }
  }