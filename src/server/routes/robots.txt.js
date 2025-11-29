export default async function index(router) {
  router.get('/', async (req, res, _next) => {
    res.type('text/plain');
    res.send('User-agent: *\nDisallow: /');
  });
}
