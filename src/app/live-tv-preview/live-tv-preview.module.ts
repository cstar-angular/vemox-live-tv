import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiveTvPreviewComponent} from './live-tv-preview.component';
import {LiveTvPreviewService} from './live-tv-preview.service';
import {CarouselModule} from '../carousel/carousel.module';
import {ListingModule} from '../listing/listing.module';
import {PlayerModule} from '../player/player.module';

@NgModule({
    imports: [
        CommonModule,
        CarouselModule,
        ListingModule,
        PlayerModule
    ],
    declarations: [
        LiveTvPreviewComponent
    ],
    exports: [
        LiveTvPreviewComponent
    ],
    providers: [
        LiveTvPreviewService
    ]
})
export class LiveTvPreviewModule {
}
