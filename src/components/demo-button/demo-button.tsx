import {Component, Host, h, Event, Prop, EventEmitter, State} from '@stencil/core';

/**
 * Demo-Component to show the interaction between StencilJS and StorybookJS
 */
@Component({
  tag: 'demo-button',
  styleUrl: 'demo-button.scss',
  shadow: true,
})
export class DemoButton {
  /**
   * Dummy state variable that does not get shown in the Preview
   */
  @State() youcantseeme: any;

  /**
   * Example property to show visual differences in the Preview
   */
  @Prop() type: "button" | "link" = "button";

  /**
   * Example event to show event handling (actions) in the Preview
   */
  @Event() clicked: EventEmitter<void>;

  handleClick = () => {
    this.clicked.emit();
  }

  render() {
    return (
      <Host>
        <div class={`root ${this.type}`} onClick={this.handleClick}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
