import { CONFIG } from './core/config.js';
import * as Helpers from './core/helpers.js';
import * as Utils from './core/utilities.js';
import * as DOM from './core/dom.js';
import * as Storage from './core/storage.js';
import { EventBus } from './core/events.js';

class App{
  constructor(){this.bus=new EventBus();}
  init(){
    DOM.ready(()=>{
      console.log('Initializing', CONFIG.appName);
      this.bus.emit('app:init');
    });
  }
}
new App().init();
