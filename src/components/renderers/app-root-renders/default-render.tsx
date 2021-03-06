import { EventEmitter } from "@stencil/router/dist/types/stencil.core";
const {Component, Event, h, Prop, State} = window.stencilCore;

const { CustomTheme , MOBILE_MAX_WIDTH } = window.cardinalCore;

@Component({
	tag: 'psk-default-renderer',
	shadow: true
})

export class AppRootDefaultRender {
	@CustomTheme()

	@Prop() mobileLayout: boolean = false;
	@Prop() disableSidebar: boolean = false;
  @State() appVersion: string;

  @Event({
    eventName: 'getAppVersion',
    cancelable: true,
    composed: true,
    bubbles: true,
  }) getAppVersion: EventEmitter;

	componentWillLoad():Promise<any> {
		return new Promise((resolve)=>{
      this.getAppVersion.emit((err, appVersion) => {
        if (!err) {
          this.appVersion = appVersion;
        }
        resolve();
      });
    })

	}

	render() {

		let appMenuCmpt = <psk-app-menu item-renderer="sidebar-renderer" hamburgerMaxWidth={MOBILE_MAX_WIDTH} />;
		let versionCmpt = <div class="nav-footer">version {this.appVersion}</div>;

		let asideComponents = [];

		if (this.mobileLayout) {
			asideComponents = [<psk-user-profile profile-renderer="mobile-profile-renderer" />, appMenuCmpt]
		}
		else {
			asideComponents = [<psk-user-profile />, appMenuCmpt, versionCmpt]
		}

		return (
			<div class={`global_container ${this.mobileLayout ? "is-mobile" : ""}`}>
        { this.disableSidebar === false ? <aside>{asideComponents}</aside> : null }

				<section>
					<psk-app-router />
					{this.mobileLayout === true ? versionCmpt : null}
				</section>
			</div>
		);
	}
}
