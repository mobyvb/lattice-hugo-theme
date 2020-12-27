# Lattice Hugo Theme

## Adding theme to your Project 

1. In your hugo project, `git submodule add git@github.com/mobyvb/lattice-hugo-theme ./themes/lattice-hugo-theme`
2. In your `config.toml`, add `theme = "lattice-hugo-theme"`
3. You will also need to add this to your `config.toml`:
```
[markup.goldmark.renderer]
  unsafe = true
```

For an example, see https://github.com/mobyvb/lattice-hugo-demo

## Your first page

* Start by running `hugo new _index.md`
* In `content/_index.md`, change `title` to whatever you want, and change `draft` to `false`
* Update the content to whatever you want on your home page using markdown.

### Non-index pages

An index page consists of a single section, so it is possible to create one by just adding content markdown and nothing else. But on other pages (such as blog posts), you will need to explicitly define the content sections. This allows you to create multiple sections separated by the lattice background. The markdown of such a page will look like this:

```
---
title: "Project 1"
date: 2020-11-22T12:04:58-05:00
draft: false
---

{{% content-section %}}

# Project 1

This is my first project.

{{% /content-section %}}

{{% content-section %}}

## Another section

This is another section.

{{% /content-section %}}

```

## Adding a Glossary 

You can create a global glossary for your site, which you can reference from inside any page. To do this, you will need to create the file `data/glossary.json`, populated like this:
```
{
    "word1": "this is the definition of word1",
    "word2": "this is the definition of word2",
    "word3": "this is the definition of word3"
}
```
To create a glossary page, which can be linked to from other areas of the site, create `content/glossary.md` and populate it like this:
```
---
title: "Glossary"
date: 2020-11-16T19:10:02-05:00
draft: false
---

{{% content-section %}}

# Glossary

This is the glossary.

{{< glossary >}}

{{% /content-section %}}

```
Now, from any file, you can reference a glossary term like this:
```
I am using the glossary term {{< glossary-term word1 >}} right here.
```
This will allow the viewer to hover over the term and see the definition. Upon clicking, the glossary page will be opened in a new tab with `word1` highlighted.

## Adding Footnotes

Footnotes work very similarly to glossary terms. Rather than using `data/glossary.json`, you will need to create a file called `data/footnotes/post1.json` (it doesn't have to be named `post1`, but you will need to reference it by its name in the step below so Hugo knows where to find that content).

The content of the json file will look like
```
[
    "this is the first footnote",
    "this is the second footnote"
]
```
With `0` being the index of the first footnote, and `1` being the index of the second.

Now, in any file, you can add something like:
```
Sed porttitor nec lorem non mattis {{< footnote-ref post1 0 >}}.
```
Which will add something that looks like `[0]` - when the user hovers over it, they will see the text of the first footnote for `post1`. Upon clicking, it will navigate to the bottom of the page and highlight the footnote in the footnotes section, which needs to be added at the bottom of the page with:
```
{{< footnotes post1 >}}
```

To see an example of a page using footnotes and glossary terms, see the code [here](https://github.com/mobyvb/lattice-hugo-demo/blob/master/content/blog/post1.md) - The live version of the page can be seen [here](http://mobyvb.com/lattice-hugo-demo/blog/post1/).

## Publishing on GH Pages

Replace the `mobyvb.com/lattice-hugo-demo` URL with your desired URL.

1. Update `baseURL = "http://mobyvb.com/lattice-hugo-demo"` in your hugo project's `config.toml`
2. Add `publishDir = "docs"` to your hugo project's `config.toml`
3. In the theme itself, update `assets/sass/main.scss` to have `$baseURL: http://mobyvb.com/lattice-hugo-demo` (should be the same as above)
4. Run `hugo`, `git add docs`, and `git commit`. Push changes. In your Github repo settings, publish the `docs` directory to GH pages.

For local experimentation, `baseURL` will need to be `""` in both `config.toml` and `main.scss` - you can then test with `hugo serve` and `localhost:1313`

