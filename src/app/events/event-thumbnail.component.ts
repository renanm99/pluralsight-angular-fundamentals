import{ Component, Input, Output } from '@angular/core'
import { EventEmitter } from 'protractor';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well however thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">
        Click me</button>
    </div>
    `
})

export class EventThumbnailComponent {
    //Passa informação de pai para filho [event]="event1"
    @Input() event:any;
    @Output() eventClick = new EventEmitter();

    handleClickMe(){
        console.log('CLICKED!');
        this.eventClick.emit('foo');
    }
}