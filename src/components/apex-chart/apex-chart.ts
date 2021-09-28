import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';
import ApexCharts from 'apexcharts';

@customElement('apex-chart')
export class ApexChart extends LitElement {
    @property({attribute: false})
    options = {};

    private chart: ApexCharts | undefined = undefined;

    createRenderRoot(): Element {
        return this;
    }

    render(): TemplateResult {
        return html`
            <div id="apex-chart"></div> `;
    }

    connectedCallback(): void {
        super.connectedCallback && super.connectedCallback();

        this.renderChart().catch(e => {
            console.error('Could not render chart in <apex-chart>', e);
        });
    }

    protected shouldUpdate(): boolean {
        return true;
    }

    async renderChart(): Promise<void> {
        await this.updateComplete;

        const div = document.createElement('div');
        this.appendChild(div);

        this.chart = new ApexCharts(div, this.options);
        return this.chart.render();
    }

    protected updated(changedProperties: Map<PropertyKey, unknown>): void {
        if (changedProperties.has('options') && this.chart) {
            this.chart.updateOptions(this.options);
        }
    }
}
