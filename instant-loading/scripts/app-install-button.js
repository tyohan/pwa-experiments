class AppInstallButton extends HTMLElement {
    
      // A getter/setter for an open property.
      get open() {
        return this.hasAttribute('open');
      }
    
      set open(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
          this.setAttribute('open', '');
        } else {
          this.removeAttribute('open');
        }
        this.toggleDrawer();
      }
    
      // A getter/setter for a disabled property.
      get disabled() {
        return this.hasAttribute('disabled');
      }
    
      set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
          this.setAttribute('disabled', '');
        } else {
          this.removeAttribute('disabled');
        }
      }
    
      // Can define constructor arguments if you wish.
      constructor() {
        // If you define a ctor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
    
        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', e => {
          // Don't toggle the drawer if it's disabled.
          if (this.disabled) {
            return;
          }
          this.showInstallDialog();
        });
      }
    
      showInstallDialog() {
        window.deferredA2HSPrompt.prompt();
      }

      captureInstallPrompt(){
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            // Save the event so it can be triggered later.
            window.deferredA2HSPrompt = e;
            return false;
          });
      }
    }
    
    customElements.define('app-install-button', AppInstallButton);