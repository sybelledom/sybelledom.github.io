---
layout: page
title: README___
permalink: /readme/
---

## livereload

- [Jekyll 3.7.0 Released](https://jekyllrb.com/news/2018/01/02/jekyll-3-7-0-released/)
- Run cli cmd :
  - jekyll serve --livereload
- wait until cli prompt : “LiveReload: Browser connected”

## Github-pages

- Pour prévisualiser l'intégration pour afin de la valider
- Branche to push to update github-pages

# debug sass

```bash
sass --watch _sass/main.scss:_site/css/main.css
```

## License

The theme is available as so I use this source [MIT License][2].

[Materialize][3] a modern responsive front-end framework based on Material Design

Copyright © 2017 Marco Damiani. Powered by <a href="http://jekyllrb.com">Jekyll</a>

[1]: https://github.com/jekyll/minima
[2]: https://opensource.org/licenses/MIT
[3]: http://materializecss.com/

## Jekyll doc

- [docs](https://jekyllrb.com/docs/)
- [docs](https://jekyllrb.com/docs/)

# Run Jekyll (projet existant)

## CLI

- Run :
  - jekyll serve
  - bundle
  - ça install les dépendances.
  - jekyll serve
  - si erreur exec :
  - gem update --system
  - relancer un :
  - bundle
  - puis un :
  - jekyll serve
  - Si toujours en erreur :
  - bundle exec jekyll serve
  - solution ultime :
  - bundle clean --force

# sass map

### cli RUN

- sass -I \_sass --watch \_sass/main.scss:\_site/css/main.css
- jekyll serve
- @see https://www.praqma.com/stories/how-to-track-sass-files/
