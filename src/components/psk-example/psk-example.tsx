const { Component, h, Prop } = window.stencilCore;
const { TableOfContentProperty, CustomTheme } = window.cardinalCore;

@Component({
	tag: "psk-example",
  shadow:true
})

export class PskExample {
  @CustomTheme()

	@TableOfContentProperty({
		description:`The title of the component's example that will be used to create a psk-chapter.`,
		isMandatory:false,
		propertyType:`string`
	})
	@Prop() title: string = "";

	render() {
		return (
			<psk-chapter title={this.title}>
        <div class="example-content">
				  <slot />
        </div>
			</psk-chapter>
		);
	}
}
