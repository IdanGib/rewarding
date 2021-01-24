import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { EditDialogComponent } from 'src/app/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  title = 'Settings';
  constructor(public app: AppService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '90%',
      data: {}
    });

    const s = dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      s?.unsubscribe();
    });
  }
}
