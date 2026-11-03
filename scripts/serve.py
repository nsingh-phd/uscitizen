#!/usr/bin/env python3
"""Local dev server: serves files as-is and sends every other path to index.html,
matching Cloudflare Pages' single-page-app behavior.

    python3 scripts/serve.py [port]
"""
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_head(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            self.path = "/index.html"
        return super().send_head()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Serving on http://localhost:{port}/")
    http.server.ThreadingHTTPServer(("", port), Handler).serve_forever()
