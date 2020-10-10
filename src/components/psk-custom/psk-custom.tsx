import { Component, h } from '@stencil/core';
import { CustomTheme } from 'cardinal-core/decorators';

@Component({
  tag: 'psk-custom',
  shadow: true
})

export class PskCustom {
  @CustomTheme()

  render() {
    return (
      <div>
        <slot />
      </div>
    )
  }
}
