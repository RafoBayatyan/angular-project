import { Component, Inject, OnInit, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef  } from "@angular/material/dialog"


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  dialogRef = inject(MatDialogRef);
  constructor (
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

  }

  ngOnInit(): void {

  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.data.callback()
    this.closePopUp()
  }
}
