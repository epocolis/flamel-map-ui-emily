import { Component, Input } from "@angular/core";
import { DetailItem } from "src/app/data-access/irrigation.model";

@Component({
    selector: 'details-list',
    templateUrl: './details-list.component.html',
    styleUrls: ['./details-list.component.scss']
})
export class DetailsListComponent {
    @Input() items?: DetailItem[];
    @Input() heading?: string;
}
