# Lattice Hugo Theme

## Publishing on GH Pages

Replace the `mobyvb.com/lattice-hugo-demo` URL with your desired URL.

1. Update `baseURL = "http://mobyvb.com/lattice-hugo-demo"` in your hugo project's `config.toml`
2. Add `publishDir = "docs"` to your hugo project's `config.toml`
3. In the theme itself, update `assets/sass/main.scss` to have `$baseURL: http://mobyvb.com/lattice-hugo-demo` (should be the same as above)
4. Run `hugo`, `git add docs`, and `git commit`. Push changes. In your Github repo settings, publish the `docs` directory to GH pages.

For local experimentation, `baseURL` will need to be `""` in both `config.toml` and `main.scss` - you can then test with `hugo serve` and `localhost:1313`

