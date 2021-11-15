import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spider-homepage',
  template: `
    <img class="spider-logo" src="../../assets/spider-logo.jpg" alt="">
    
    <h2>Inspired from <span>Spiders</span></h2>
    
    <div class="good-to-know">
      <p class="eng">From the archive, 4 October 1971: Spiders on LSD take a tangled trip.<br>Drugs experiment makes stoned spiders spin webs which are both ugly and inefficient at catching flies.</p>

      <p class="arm">1971 թվականի հոկտեմբերի 4-ի արխիվից։ Սարդերը LSD օգտագործելով խճճված ճանապարհորդություն են անում:<br>LSD-ի փորձարկումը ստիպում է քարացած սարդերին հյուսել ցանցեր, որոնք և՛ տգեղ են, և՛ անարդյունավետ ճանճեր բռնելու համար:</p>
    </div>
    
    <img class="spider-lsd-exp-img" src="../../assets/spider-lsd.jpeg" alt="spider-lsd">
  `,
  styles: [`
    @use "sass:map";
    @use "../../styles/variables" as spider;
    
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 50px;
    }

    .spider-logo {
      vertical-align: middle;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid lightgrey;
      object-fit: cover;
    }
    
    h2 {
      margin-top: 20px;
      
      span {
        font-style: italic;
        color: map.get(spider.$colors, primary);
      }
    }
    
    .good-to-know {
      max-width: 600px;
      text-align: center;
      p.eng {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 20px;
      }
      
      p.arm {
        letter-spacing: 1.5px;
      }
    }
    
    .spider-lsd-exp-img {
      margin-top: 20px;
      object-fit: cover;
      width: 300px;
      height: 100%;
    }
  `]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
