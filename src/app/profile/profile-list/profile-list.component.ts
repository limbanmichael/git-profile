import { Component, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { map, take } from "rxjs/operators";

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent {
    profile: any;
    hideDetails = true;
    profileDetails: any;

    constructor(private ProfileService: ProfileService) {

    }

    ngOnInit(): void {
        this.getAllProfile();

        this.ProfileService.profile
            .subscribe(data => {
                this.profile = data;
            });
    }

    getAllProfile() {
        this.ProfileService.getAllProfile()
            .pipe(take(1))
            .subscribe(result => {
                this.ProfileService.setProfileObject(result);
            });
    }

    getProfileDetails(param) {
        this.ProfileService.setLoading(true);
        this.ProfileService.getProfile(param)
            .pipe(take(1))
            .subscribe(result => {
                this.hideDetails = false;
                this.profileDetails = result;
            },
                error => {
                    this.ProfileService.setErrorMessage(error.error.message);
                    this.ProfileService.setLoading(true);
                });
    }

    closeModal() {
        this.hideDetails = true;
    }
}
