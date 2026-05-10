import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h("div", {}, [
      h("p", {}, ["Hello World"]),
      h("button", { class: "btn" }, ["Click me"]),
      h("button", {}, ["Submit"]),
      h("button", {}, ["Reset"]),
      h("button", {}, ["Delete"]),
      h("button", {}, ["Update"]),
      h("button", {}, ["Cancel"]),
      h("button", {}, ["Save"]),
      h("button", {}, ["Close"]),
    ]);
  },
});

app.mount("#app");
