export default function resolveProductionUrl(document) {
  return `https://lukemackenzie-portfolio.herokuapp.com/${document.slug.current}`;
}
