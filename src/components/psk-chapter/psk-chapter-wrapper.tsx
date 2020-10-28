const { Component, h, Prop } = window.stencilCore;

@Component({
    tag: "psk-chapter-wrapper"
})

export class PskChapterWrapper {

    @Prop() title: string;

    render() {
        return (
            <psk-chapter title={this.title}>
                <div class="sub-card">
                    <slot />
                </div>
            </psk-chapter>
        )
    }
}
