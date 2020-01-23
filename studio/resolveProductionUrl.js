export default function resolveProductionUrl(document) {
  return `https://sanity-portfolio.herokuapp.com/${document.slug.current}`;
}
