import { EventEmitter } from "@stencil/router/dist/types/stencil.core";
const { Component, h, Event, Prop, } = window.stencilCore;

const { BindModel, TableOfContentEvent, TableOfContentProperty } = window.cardinalCore;

@Component({
  tag: 'psk-user-profile'
})
export class PskUserProfile {

  @BindModel() modelHandler;

  @TableOfContentProperty({
    description: `should receive an object with the following properties if the default renderer is wanted: username, avatar, email.`,
    isMandatory: false,
    propertyType: `any`,
    defaultValue: 'null'
  })
  @Prop() userInfo: any = null;

  @TableOfContentProperty({
    description: `This property allows the component to display a custom User Profile in case the default one is not preferred. `,
    isMandatory: false,
    propertyType: 'any',
  })
  @Prop() profileRenderer: any;

  @TableOfContentEvent({
    eventName: `getUserInfo`,
    controllerInteraction: {
      required: true
    },
    description: `This event is emitted only if the userInfo property is null in order to get the desired data.`
  })
  @Event({
    eventName: 'getUserInfo',
    cancelable: true,
    composed: true,
    bubbles: true,
  }) getUserInfoEvent: EventEmitter;

  componentWillLoad() {
    if (!this.userInfo) {
      this.getUserInfoEvent.emit((err, userInfo) => {
        if (!err) {
          this.userInfo = userInfo;
        } else {
          console.error("Error getting user info", err);
        }
      })
    }
  }

  render() {

    let ItemRenderer = this.profileRenderer ? this.profileRenderer : "psk-user-profile-renderer";

    return (
      <ItemRenderer userInfo={this.userInfo} />
    );
  }
}

