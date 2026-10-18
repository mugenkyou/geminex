import json, subprocess, uuid, os
from pathlib import Path

conv_id = str(uuid.uuid4())
cmd = [
    "agy", 
    "--output-format", "stream-json", 
    "--dangerously-skip-permissions", 
    "--conversation", conv_id,
    "--print", "Hello"
]
env = dict(os.environ)
env["ANTIGRAVITY_APP_DATA_DIR"] = "~/.gemini/config"
subprocess.run(cmd, env=env)
