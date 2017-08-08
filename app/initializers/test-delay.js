import { begin, end } from "@ember/runloop"

export function initialize() {
  begin();

  setTimeout(function() {
    end();
  });
}

export default {
  initialize
};
