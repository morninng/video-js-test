import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var videojs: any;


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit {

  @ViewChild('jsVideo') jsVideo!: ElementRef;

  player: any;

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit(): void {

    const videoOptions = {
      controls: true,
      sources: [{
          src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          type: 'video/mp4',
      }]
    };


    this.player = videojs(this.jsVideo.nativeElement, videoOptions, function onPlayerReady() {
      console.log('onPlayerReady');
    });

  }

}
