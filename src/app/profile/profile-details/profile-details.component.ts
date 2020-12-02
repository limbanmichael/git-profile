import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
    @Input() profileDetails: any;
    @Output("closeModal") closeModal: EventEmitter<any> = new EventEmitter()

    ngOnInit(): void {
        console.log(this.profileDetails, 'profile details');
    }

    close() {
        this.closeModal.emit();
    }
}
