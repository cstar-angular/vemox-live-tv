import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../loading/loading.service';
import {LiveTvPreviewService} from './live-tv-preview.service';
import {Router} from '@angular/router';
import {PlayerService} from "../player/player.service";

@Component({
    selector: 'app-live-tv-preview',
    templateUrl: './live-tv-preview.component.html',
    styleUrls: ['./live-tv-preview.component.css']
})
export class LiveTvPreviewComponent implements OnInit {
    block: any;
    scheduling: any;
    assetId: string;
    url: string;


    constructor(private loading: LoadingService,
                private liveTVService: LiveTvPreviewService,
                public playerService: PlayerService) {
    }

    ngOnInit() {

        this.liveTVService.getChannels().subscribe(res => {
            res.blocks[0].widgets.forEach((data) => {
                data.layout.columns = 5;
                data.layout.show_elements_favorite = 'none';
                data.layout.show_elements_rating = 'none';
                data.layout.pagination_indicator = 'none';
                data.layout.element_horizontal_spacing = 15;
                data.layout.element_vertical_spacing = 15;
                data.layout.assets_format_ratio = 1.2;
                data.layout.presentation_order = 'LTR';
                data.layout.show_elements_title = 'none';
            });
            this.block = res.blocks[0];
            this.scheduling = this.block.widgets[0].playlist.contents[0].scheduling;

            this.url = this.block.widgets[0].playlist.contents[0].image.url;
            this.assetId = this.block.widgets[0].playlist.contents[0].id;
            if(!this.scheduling.length) {
                this.thumbClick(this.assetId, this.url);
            }
            this.loading.set(false);
        });

    }

    thumbClick(id, url) {
        this.assetId = id;
        this.url = url;
        this.liveTVService.getChannelDetails(id).subscribe(
            prog => this.scheduling = prog.slice(0, 2));
    }

}
