import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrl: './team-component.component.css'
})
export class TeamComponentComponent {

  teamcard = [

    {imageurl:"Landing-image.jpg",
      heading:"Mr. Bastin Vijay",
      subheading:"Founder & CEO",
      text:"An EV industry pioneer in South India, Mr. Bastin brings unparalleled expertise in EV manufacturing and lithium battery production to drive EGM's mission."
    },

    {imageurl:"Landing-image.jpg",
      heading:"Mr. Bastin Vijay",
      subheading:"Founder & CEO",
      text:"An EV industry pioneer in South India, Mr. Bastin brings unparalleled expertise in EV manufacturing and lithium battery production to drive EGM's mission."
    },
    
    {imageurl:"Landing-image.jpg",
      heading:"Mr. Bastin Vijay",
      subheading:"Founder & CEO",
      text:"An EV industry pioneer in South India, Mr. Bastin brings unparalleled expertise in EV manufacturing and lithium battery production to drive EGM's mission."
    }
  ]

}
