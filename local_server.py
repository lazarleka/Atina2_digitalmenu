from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent


class SpaHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        translated = Path(super().translate_path(path))
        if translated.exists():
            return str(translated)
        return str(ROOT / "index.html")


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 5173), SpaHandler)
    print("Atina 2 local site: http://127.0.0.1:5173")
    server.serve_forever()
