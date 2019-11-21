import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';

class MyDesign extends PolymerElement {

    static get template() {
        return html`
<style include="shared-styles">
                :host {
                    display: block;
                    height: 100%;
                    background-image: url("./src/alpha.jpg");
                    background-size:cover;
                    overflow-y: scroll;
                }
            </style>
<vaadin-vertical-layout style=" width: 100%; heght: 100%;  ">
 <vaadin-horizontal-layout theme="" style="width: 100%; margin; auto;  " class="header">
  <div class="logo" style="margin-left: 20px; width: 100px;
height: 80px;
box-sizing: border-box;
padding: 20px;
border: 0;
border-radius: 0 0 0 4px;
background-color: #ef3124;
outline: none; text-align: center;">
   <img src="./src/logo.svg" style="width: 23px; height: 37px;" Alpha-Bank>
  </div>
  <div class="logo" style="margin-right: 20px; width: 150px;
height: 80px;
box-sizing: border-box;
padding: 20px;
border: 0;
border-radius: 0 0 4px 0;
background-color: #ef3124;
outline: none;">
   <a href="" style="color: #fff; text-decoration: none;">Alpha - Bank</a>
  </div>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout>
  <div class="a" style="width: 250px; font-weight: 100; display: block;  padding: 20px; margin: auto; ">
   <div class="moscow" style="padding-bottom: 10px;">
    <a href="" style="color: #fff;">+74957888878</a>
    <label style="color: #fff; ">- for Moscow and abroad</label>
   </div>
   <div class="russia">
    <a href="" style="color: #fff;">8 800 2000 00 00</a>
    <label style="color: #fff;">- for calls in Russia</label>
   </div>
  </div>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout style="margin: auto;">
  <div class="title" style="padding: 40px;">
   <h1 style="margin-top: 35px;
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 1.3; color: #fff; font-weight: 100;">Internet - bank</h1>
  </div>
 </vaadin-horizontal-layout>
 <vaadin-horizontal-layout theme="" style="margin: auto;">
  <vaadin-vertical-layout theme="margin" style="margin: auto; ">
   <div class="a" style="padding: 10px 15px; font-size: 22px; font-weight: 50; ">
    <div class="login">
     <label style="color: #fff; padding: 11px 15px;">Login</label>
     <a href="" style="color: #fff; padding: 11px 15px;">Registry</a>
    </div>
   </div>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
 <vaadin-vertical-layout style="margin: auto; padding: 20px 20px 20px;" theme="">
  <label style="color: #fff; padding: 
0 0 20px; font-weight: 100;">Login</label>
  <vaadin-text-field label="" placeholder="" style="border: 1px solid hsla(0,0%,100%,.4); border-radius: 4px; color: #ffffffe6; width: 250px;"></vaadin-text-field>
  <label style="color: #fff; padding: 
10px 0 20px 0; font-weight: 100;">Password</label>
  <vaadin-text-field label="" placeholder="" style="border: 1px solid hsla(0,0%,100%,.4); border-radius: 4px; color: #ffffffe6; width: 250px;"></vaadin-text-field>
  <a href="" style="color: #fff; padding: 
10px 0 10px 0 ; font-size: 12px; font-weight: 100; ">Recover login and password</a>
  <vaadin-button theme="" style="border: 1px solid hsla(0,0%,100%,.4); border-radius: 4px; color: #ffffffe6; width: 200px; height: 50px;">
    Sign 
  </vaadin-button>
 </vaadin-vertical-layout>
 <vaadin-horizontal-layout style="margin-left: 1em; ">
  <vaadin-vertical-layout style="margin: auto;">
   <div class="btn">
    <a href="" style="color: #fff;  font-size: 14px; font-weight: 100; padding: 9px 12px; ">Alfa-Bank website</a>
   </div>
   <div class="btn">
    <a href="" style="color: #fff;  font-size: 14px; font-weight: 100; padding: 9px 12px;">Feedback</a>
   </div>
   <div class="btn">
    <a href="" style="color: #fff; font-size: 14px; font-weight: 100; padding: 9px 12px;">Reference</a>
   </div>
   <div class="btn" ">
    <a href="" style="color: #fff; font-size: 14px; font-weight: 100; padding: 9px 12px;">Mobile Bank</a>
   </div>
   <div class="text" style="font-size: 12px; font-weight: 100; color: #fff; padding: 5px;">
     Made in Alpha Lab 
   </div>
   <div class="text" style="font-size: 12px; font-weight: 100; color: #fff; padding: 5px  10px;">
     2001-2019 Alfa Bank 
    <br> General license of the Bank of Russia 
    <br> No.1326 of January 16, 2015 
   </div>
  </vaadin-vertical-layout>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>
`;
    }

    static get is() {
        return 'my-design';
    }

    static get properties() {
        return {
            // Declare your properties here.
        };
    }
}

customElements.define(MyDesign.is, MyDesign);
