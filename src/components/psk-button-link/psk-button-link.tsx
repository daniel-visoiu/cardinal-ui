const { Component, Prop, h } = window.stencilCore;
const { BindModel, TableOfContentProperty, CustomTheme } = window.cardinalCore;

@Component({
  tag: "psk-button-link",
  styleUrl: './psk-button-link.css',
})

export class PskButtonLink {
  @CustomTheme()

  @BindModel() modelHandler;

  @TableOfContentProperty({
    description: `This property is passed to psk-link.`,
    isMandatory: false,
    propertyType: `string`
  })
  @Prop() page: string;

  @TableOfContentProperty({
    description: [
      `This property is the label for this component.`,
      `If this property is not specified, you must provide a slot as content for the label of this component`
    ],
    isMandatory: false,
    propertyType: `string`
  })
  @Prop() name?: string;

  @TableOfContentProperty({
    description: `This property describes the icon specified for psk-icon.`,
    isMandatory: false,
    propertyType: `string`
  })
  @Prop() icon?: string;

  render() {
    return (
      <psk-link page={this.page} class='button-link'>
        {this.icon ? <psk-icon icon={this.icon}/> : null}
        {this.name ? <div>{this.name}</div> : <slot/>}
      </psk-link>
    )
  }
}
