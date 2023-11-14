import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListGeneralComponent } from './user-list-general.component';

describe('UserListGeneralComponent', () => {
  let component: UserListGeneralComponent;
  let fixture: ComponentFixture<UserListGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListGeneralComponent]
    });
    fixture = TestBed.createComponent(UserListGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
