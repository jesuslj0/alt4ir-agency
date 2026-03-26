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

base = os.path.dirname(__file__)
context_parts = []

for skill_file in [
    "../skills/frontend-design/SKILL.md",
    "../skills/ui-ux-pro-max/SKILL.md",
]:
    path = os.path.join(base, skill_file)
    try:
        with open(path) as f:
            context_parts.append(f.read())
    except Exception:
        pass

if not context_parts:
    sys.exit(0)

print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "UserPromptSubmit",
        "additionalContext": "\n\n---\n\n".join(context_parts)
    }
}))
