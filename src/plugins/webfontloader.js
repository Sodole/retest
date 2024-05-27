export default async function loadFonts() {
  const webFontLoader = await import('webfontloader');

  webFontLoader.load({
    custom: {
      families: ['Pretendard Variable'],
      urls: [
        'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
      ],
    },
  });
}
