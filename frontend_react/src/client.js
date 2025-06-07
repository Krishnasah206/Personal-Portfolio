import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// ⛔ Avoid exposing the token in frontend for security
export const client = createClient({
  projectId: '8zxjdee9',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  // ⚠️ If you *must* use a token (e.g., for preview mode), move this logic to a secure server
  token: 'skLZQA6wlrh0QZFoKh0KqLMbEMHhvn6xz8BTcaqwmiSMSSrqp3eyBtJpGPorRGHDTfzNFzS5NyRJXRhaAVdKNshFGaZzkDuzpzozVMVrIfp1VWHoZwUIHNJhwtD8s8v37w1U5kjhB6DpftZsPd6cn1XYQB273EMsE9k3zP2Re4Ca8FDhuZIO',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
