import{ Component, Input } from '@angular/core'

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
            
            <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `
    ,
    styles: [
        `.pad-left{margin-left: 10px;}
        .well{color:#bbb;}
        `
    ]
})

export class EventThumbnailComponent {
    //Passa informação de pai para filho [event]="event1"
    @Input() event:any;
}