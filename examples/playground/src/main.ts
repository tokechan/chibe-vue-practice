import { createApp, h } from "chibivue";

const app = createApp({
  render() {
    return h("div", { id: "my-vue-app" }, [
      h("p", { style: "color: green; font-weight: bold" }, ["Hello World"]),
      h("button", { class: "btn" }, ["Click me"]),
      h(
        "button",
        {
          style: "color: blue",
          onClick() {
            alert("Wow chibevue");
          },
        },
        ["Click me2!"],
      ),
    ]);
  },
});

app.mount("#app");
