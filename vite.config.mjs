import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/pages-vendors/',
    plugins: [
      classicEmberSupport(),
      ember(),
      // extra plugins here
      babel({
        babelHelpers: 'runtime',
        extensions,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['./node_modules/'],
        },
      },
    },
  }
});
