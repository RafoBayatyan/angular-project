import { User } from '../user-list/user-list.model';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/modules/users/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);
  formbuilder = inject(FormBuilder);
  router = inject(Router);

  user?: User;
  userEditForm!: FormGroup;

  // @Input , Output

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];

    this.userService.getAndSetUsers().subscribe((users) => {
      this.user = users?.find((el: User) => el.id === id);
      this.initForm();
    });
  }

  private initForm() {
    this.userEditForm = this.formbuilder.group({
      email: [this.user?.email, [Validators.email, Validators.required]],
      userName: [
        this.user?.username,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      firstName: [
        this.user?.name.firstname,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
      lastName: [
        this.user?.name.lastname,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ],
      ],
      city: [
        this.user?.address.city,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  editUser() {
    if (this.userEditForm.valid) {
      this.userService.editUser(this.user!.id, this.userEditForm.value);
      this.router.navigateByUrl('/user/list');
    }
  }

  updateUsercolor(color: string) {
    this.userService.updateUsercolor(this.user!.id, color);
    console.log(this.user);
  }

  ngOnDestroy() {}
}
