import {Component, OnInit} from '@angular/core';
import {ApiService} from '../_services/api.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [ApiService]
})
export class DashboardComponent implements OnInit {

    private message: string;

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.api
            .init()
            .subscribe(
                (data: any) => this.message = data.message,
                (error) => console.error(error)
            );
    }

}