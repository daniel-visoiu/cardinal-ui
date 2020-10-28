const {Component, Prop} = window.stencilCore;
import {RouterHistory } from "@stencil/router/dist/types/global/interfaces";
const {injectHistory} = window.stencilRouter;

@Component({
  tag: "psk-route-redirect",
})
export class PskRouteRedirect {

  @Prop() url;
  @Prop() history: RouterHistory;

  componentWillLoad() {
    if(this.url){
      this.history.push(this.url, {});
    }
    else{
      console.error("Url was not provided")
    }
  }
}

injectHistory(PskRouteRedirect);
