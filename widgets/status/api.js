'use strict';

/**
 * Das Status-Widget fragt hier nach dem Zustand aller Geraete - siehe widgetStatus in
 * app.js. Nur lesend: das Widget zeigt an, es schaltet nichts.
 */
module.exports = {
  async status({ homey }) {
    return homey.app.widgetStatus();
  },
};
