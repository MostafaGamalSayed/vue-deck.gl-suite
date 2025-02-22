import { type App, type Plugin } from 'vue'

// Import vue components
import * as components from "@/components";

// install function executed by Vue.use()
const install: Exclude<Plugin["install"], undefined> =
  function installVueMaplibreGl(app: App) {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component);
    });
  };

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/components'
export { genDeckOpts, genDeckLayerOpts } from '@/utils'
