import { Component, OnInit, OnDestroy, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subject } from 'rxjs';
import { SlackService } from '../../app/services/slack-service';


@Component({
    selector: 'slackbot-dialog',
    templateUrl: './slackbot-dialog.html',
})

export class SlackBotDialogComponent implements OnInit, OnDestroy {

    public formBuilder: FormBuilder;
    private close$ = new Subject<void>();
    form: FormGroup;
    slackRequest$;

    constructor (formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: any, private slack: SlackService,
                 public dialogRef: MatDialogRef <SlackBotDialogComponent>, ) {
        this.formBuilder = formBuilder;
    }
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [],
            question: [],
        });
    }

    ngOnDestroy(): void {
        this.close$.next();
        this.close$.complete();

    }
    passInformation() {
        this.slackRequest$ = this.slack.sendMessage(this.data.baseUrl + this.data.url, this.data.url.substring(1),
            this.form.get('name').value, this.form.get('question').value).subscribe(() => {
                this.slackRequest$.unsubscribe();
                this.dialogRef.close();
        });
    }
}