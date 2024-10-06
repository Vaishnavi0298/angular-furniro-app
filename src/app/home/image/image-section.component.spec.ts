import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeImageComponent } from './image-section.component';

// import { HomePageComponent } from './home-page.component';

describe('HomeImageComponent', () => {
  let component: HomeImageComponent;
  let fixture: ComponentFixture<HomeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
