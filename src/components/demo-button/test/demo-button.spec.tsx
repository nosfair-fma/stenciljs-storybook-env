import { newSpecPage } from '@stencil/core/testing';
import { DemoButton } from '../demo-button';

describe('demo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoButton],
      html: `<demo-button>hello world</demo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-button>
        <mock:shadow-root>
            <div class="button root">
                <slot></slot>
            </div>
        </mock:shadow-root>
        hello world
      </demo-button>
    `);
  });
});
