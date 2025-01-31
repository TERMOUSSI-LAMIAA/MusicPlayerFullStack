import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchFilterComponent } from './album-search-filter.component';

describe('AlbumSearchFilterComponent', () => {
  let component: AlbumSearchFilterComponent;
  let fixture: ComponentFixture<AlbumSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumSearchFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
