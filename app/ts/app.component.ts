import {Component} from 'angular2/core';
import {Config} from './config.service'
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})
export class AppComponent {
  mainHeading = Config.MAIN_HEADING;
  videos:Array<Video>;

  constructor(){
    this.videos = [
      new Video(1,"Getting Started","hXfigUyeHaY","Simple start to angular 2"),
      new Video(2,"Overview and Core Concepts","vc9n0j6-D2U","General look of angular 2" )
      new Video(3,"Components","h8surzS7LOo","We are talking about components")
      new Video(4,"SystemJS and main.ts","xGmEKaBgS_8","Closer Look to files (SystemJS and main.ts)")
      new Video(5,"Data Binding and Variables","uq4kLWPfosU","How to use variables? How to bind data?")
      new Video(6,"Creating our First Component","pz9sbuMvhQU","Creating a playlist")
    ]
  }
}
