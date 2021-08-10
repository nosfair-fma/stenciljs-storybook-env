import {html} from "lit-html";
import {Meta} from "@storybook/web-components";
import '../../dist/collection/components/demo-button/demo-button';
import {action} from "@storybook/addon-actions";

export default {
  title: "DemoButton",
  component: "demo-button",
} as Meta;

const defaultArgs = {
  INNER_HTML: "Hello World!",
  type: "button",
  clicked: action("demo-button:clicked"),
};

const Template = ({INNER_HTML, type, clicked}) => html`
  <demo-button type=${type} @clicked=${clicked}>${INNER_HTML}</demo-button>
`;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
};

export const Link = Template.bind({});
Link.args = {
  ...defaultArgs,
  type: "link"
};
