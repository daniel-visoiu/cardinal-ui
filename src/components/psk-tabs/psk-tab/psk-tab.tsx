import { Component, Prop, Host, h } from "@stencil/core";
import { TableOfContentProperty, CustomTheme } from 'cardinal-core/decorators';

@Component({
  tag: 'psk-tab',
  shadow: true
})

export class PskTab {
  @CustomTheme()

  @TableOfContentProperty({
    description: [
      `This property is used as the tab title.`,
      `psk-tab-navigator will use this title in order to generate the control area.`
    ],
    isMandatory: true,
    propertyType: `string`
  })
  @Prop() title: string;

  render() {
    return (
      <Host hidden>
        <slot />
      </Host>
    )
  }
}
