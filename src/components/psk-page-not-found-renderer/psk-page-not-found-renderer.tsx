const { Component, h } = window.stencilCore;

const { CustomTheme } = window.cardinalCore;

@Component({
    tag: 'psk-page-not-found-renderer',
    styleUrl:"../../assets/css/bootstrap/bootstrap.css",
    shadow: true
})
export class PskPageNotFoundRenderer {
    @CustomTheme()
    render() {
        return (
            <div class="container">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Page not found!</h2>
                    </div>

                    <div class="card-body">
                        <p>The page you are looking for does not exists!</p>
                    </div>
                </div>
            </div>
        );
    }
}
