import { newE2EPage } from '@stencil/core/testing';

describe('demo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-button></demo-button>');

    const element = await page.find('demo-button');
    expect(element).toHaveClass('hydrated');
  });
});
