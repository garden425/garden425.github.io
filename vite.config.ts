
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 상대 경로 빌드를 사용하여 어떤 도메인에서도 잘 작동하도록 설정합니다.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // 소스맵을 끄면 빌드 속도가 빨라지고 용량이 줄어듭니다.
    sourcemap: false
  }
});
