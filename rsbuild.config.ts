import {defineConfig} from "@rsbuild/core"
import {pluginReact} from "@rsbuild/plugin-react"
import {pluginLess} from "@rsbuild/plugin-less"
import {pluginNodePolyfill} from "@rsbuild/plugin-node-polyfill"

export default defineConfig({
    plugins: [pluginNodePolyfill(), pluginReact(), pluginLess()],
    dev: {
        hmr: true,
        writeToDisk: true
    },
    html: {
        template: "./index.html"
    },
    source: {
        entry: {
            index: "./index.tsx"
        }
    },
    output: {
        filenameHash: false
    }
})