import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@auna/mf-header",
  app: () => System.import("@auna/mf-header"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@auna/mf-appointment",
  app: () => System.import("@auna/mf-appointment"),
  activeWhen: ["/appointment"],
});

registerApplication({
  name: "@auna/mf-pharmacy",
  app: () => System.import("@auna/mf-pharmacy"),
  activeWhen: ["/pharmacy"],
});

registerApplication({
  name: "@auna/mf-teleconsultation",
  app: () => System.import("@auna/mf-teleconsultation"),
  activeWhen: ["/teleconsultation"],
});

start({
  urlRerouteOnly: true,
});
