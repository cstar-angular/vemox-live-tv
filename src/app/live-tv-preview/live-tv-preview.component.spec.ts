import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTvPreviewComponent } from './live-tv-preview.component';

describe('LiveTvPreviewComponent', () => {
  let component: LiveTvPreviewComponent;
  let fixture: ComponentFixture<LiveTvPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTvPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTvPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
