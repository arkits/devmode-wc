import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'devmode-wc',
  styleUrl: 'devmode-wc.scss',
  shadow: true,
})
export class DevmodeWc {
  @State() isToggled: boolean = false;
  @State() shouldDisplay: boolean = false;
  
  @Prop() allowedOrigin?: string;
  
  @Event() pillToggled: EventEmitter<boolean>;

  componentWillLoad() {
    this.updateVisibility();
  }

  @Watch('allowedOrigin')
  updateVisibility() {
    if (!this.allowedOrigin) {
      // If no origin specified, show everywhere
      this.shouldDisplay = true;
      return;
    }
    
    const currentOrigin = window.location.origin;
    this.shouldDisplay = currentOrigin === this.allowedOrigin;
  }

  private handleToggle = () => {
    this.isToggled = !this.isToggled;
    this.pillToggled.emit(this.isToggled);
    console.log(`DevMode toggled: ${this.isToggled ? 'ON' : 'OFF'}`);
  };

  render() {
    if (!this.shouldDisplay) {
      return null;
    }

    return (
      <div class="floating-pill">
        <div class="pill-content">
          <span class="helper-text">Dev Mode</span>
          <label class="toggle-switch">
            <input
              type="checkbox"
              checked={this.isToggled}
              onChange={this.handleToggle}
            />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    );
  }
} 