const { Component, h } = window.stencilCore;

const { CustomTheme } = window.cardinalCore;

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
