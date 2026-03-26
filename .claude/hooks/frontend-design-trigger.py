import sys, json, re, os

try:
    data = json.load(sys.stdin)
    msg = data.get("message", "")
except Exception:
    sys.exit(0)

pattern = re.compile(
    r'(component|section|page|pagina|página|ui\b|design|diseño|css|layout|animation|animaci[oó]n'
    r'|frontend|web\b|html|tailwind|react|interface|interfaz|button|bot[oó]n|navbar|hero'
    r'|style|estilo|color|font|fuente|responsive|landing|modal|card|tarjeta|menu|menú'
    r'|header|footer|icon|icono|grid|flex|spacing|shadow|sombra|border|hover|transition'
    r'|gradient|gradiente)',
    re.IGNORECASE
)

if not pattern.search(msg):
    sys.exit(0)

skill_path = os.path.join(os.path.dirname(__file__), "../skills/frontend-design/SKILL.md")
try:
    with open(skill_path) as f:
        skill = f.read()
except Exception:
    sys.exit(0)

print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "UserPromptSubmit",
        "additionalContext": skill
    }
}))
