import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
  selector: 'playlist',
  templateUrl: 'app/ts/playlist.component.html',
  inputs: ['videos']
})

export class PlaylistComponent{
  onSelect(vid:Video){
    var videoFrame = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+vid.videoCode+'" frameborder="0" allowfullscreen></iframe>';
    var videoDiv = document.getElementById('videoContainer');
    videoDiv.innerHTML = videoFrame;
  }
}
