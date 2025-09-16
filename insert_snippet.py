import logging
from bs4 import BeautifulSoup

def prepare_webpage(raw_content):
    parsed_html = BeautifulSoup(raw_content, "html.parser")
    
    # x can come from many sources
    # different ways to insert invisible texts
    # and with different texts to confuse ai
    x = BeautifulSoup("""
    <div style="opacity: 0.0; position: absolute;">
    TEXT THAT WILL CONFUSE AI
    </div>
    """, "html.parser")
    
    parsed_html.body.insert(1, x)

    # must return bytes to mitmproxy,
    # hence "encode"
    return str(parsed_html).encode()

class Counter:
    def __init__(self):
        self.num = 0

    def response(self, flow):
        logging.info("Modifying response.")
        raw_content = flow.response.content
        flow.response.content = prepare_webpage(raw_content)


addons = [Counter()]
