# Inhalt
## 1.1. Welche verschiedenen Themen beinhaltete der Sprint?
# Bitte detailliert und nicht nur Stichworte!
## 1.2. Was haben die Themen mit dem Begriff DevOps zu tun?
# Gruppendynamik
## 1.3. Hat sich die Kommunikation im Team verändert seit dem ersten Sprint?
## Erläutern Sie was sie geändert haben und welche positiven/negativen Auswirkungen es hatte.
## 1.4. Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?
# Lernzuwachs
## 1.5. Was kann ich nun mehr als vorher?
## 1.6. Welche Schwierigkeiten gab es?
## 1.7. Was ist mir besonders gut gelungen, worauf bin ich richtig stolz?
# Lerneffekt (bezogen auf das Modul)
## 1.8. Was sollte beibehalten werden?
## 1.9. Was würden Sie anders machen?

## commiten mit: docs(lb2): Reflexion Sprint 2 ([ihr-nachname])

# Inhalt
## 1.1. Welche verschiedenen Themen beinhaltete der Sprint? + 1.2 Was haben die Themen mit dem Begriff DevOps zu tun?
Wir haben in woche 5 Damit begonnen Test zu Integrieren dazu gehören bei uns Cypress und Karma. Für Cypress und Karma haben wir Actions definiert, die die Test automatisch beim pushen einer Änderung laufen lassen, diese kann man dan in den Actions nachvolziehen. Dieser Twil gehört zu Continious Integration, da es Darum geht den Workflow zu vereinfachen und so fehler zu vermeiden und früzeitig zu erkennen, Cypress ist ein E2E test (End to End) mit dem man einen Browser simuliert um dann zu testen ob zum BSP Components korrekt gerendert werden und diese Funktionieren (Anclicken und schreiben) wobei Karam ein Normaller Unitest ist mit dem man normalle Testblöcke schreiben kann um einzelne funktionen zu testen.

In Woche 6 haben wir das Dockerfile erstellt, damit unsere App mit Hilfe von Docker lauffähig ist (Notwendig für woche 7), dabei handelt es sich um den Teil der CD (Contious Deployment), es geht darum das man mit Hilfe von Docker einfacher auf verschiedenen Systemen Deployen kann,  dabei behebt Docker mit seiner Containersierung das Klassische Problem "It Work on my Machine", und ermöglicht so eine Einfachere Auslieferung von Systemen und Apps.

In Woche 7 haben wir Teraform und Kamal aufgesetzt, auch diese Beiden systeme haben mit CD zu tuen, dabei Übernimmt Terform die rolle des "Teraformers" und bereite die oberflächen in beispielsweise AWS so fohr, das man auf diese Deployen kann, dieser Teil übernimmt dan Kamal, Kamal erstellt ein Docker Image in unserem fall wen ein Neuer Release Tag erstellt wird und schibt dieses Image dan auf die von Teraform vorbereitete Instance, Kamal und Teraform ermöglichen dadurch auch einen sehr einfach Anbieter wechsel oder einen Redeploy inerhalb eines Knopfdrucks, dies Untersstützt ernorm im Continious Deployment da mans so einfach neue Versionen zur verfügung stellen kann.

# Gruppendynamik
## 1.3. Hat sich die Kommunikation im Team verändert seit dem ersten Sprint?
Die Komunikation wurde besser, wir konnten besser Organisieren wer was machen sollte, aber wir hatten trotzdem oft die situation des Pair Programings wo zwei leute an dem Gleichen ding an einer Maschine arbeiten, so haben ich und Levin Beispielsweise zusammen Terraform und Kamal aufgesetzt, das ist logischerweise nicht immer Effizienter aber macht es bei neuen/komplexen aufgaben einfacher eine Gute lösung zu finden.

## 1.4 Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?
Gut Gelungen ist uns allen, das wir uns alle Verbessert haben in den Bereichen von Komunikation und Selbsständigkeit, wir hatten die Situation, das Jemand nicht weiss was er machen soll weniger oft, und haben uns eigenständiger versucht aufgaben aus zu suchen die wir machen können, dabei ist auch aufgefallen wie sehr tools wie Projects in Github einen dabei Unterstützen und wie viel man darüber steuern kann.

# Lernzuwachs
## 1.5 Was kann ich nun mehr als vorher?
Ich habe viel im Bezug auf CD gelernt, tools wie Kamal oder Teraform waren mir Bisanhin nicht wirklich bekannt, da wir Im Betrieb mit älteren Tools/Systemen arbeiten (Legacy Code), daher war es für mich sehr Interessant neues Über moderne Deployment methoden zu lernen und auch zu sehen wie viel einfacher es ist, wen das Ganze aufgesetzt ist. In unserem Betrieb nutzen wir ein Eigenes Tool das Zip dateien eines Builds lädt und diese dann in das Projekt auf dem Server "Injected" dabei gibt es konstant risiken auch im Bereich der CI das sachen nicht Vollständig funktionieren (Unitest nicht vorhanden) und dadurch ein Update failed was zu Downtime bei einem Kunden führen kann, Für mich war somit am Eindrücklichsten wie sehr man solche Risiken vermindern oder ganz vermeiden kann durch die nutzung solcher tools.

## 1.6 Welche Schwierigkeiten gab es?
Auch wenn die Komunikation besser war, war sie noch nicht Perfekt, es gabe 1-2 mal noch die Situation wo man nicht genau wusste was man machen soll oder warten musst weil jemand gerade etwas am machen ist und dadurch gerade Blockiert ist, auch ist es schwierig den Überblick zu behalten zu dem Was andere Gerade machen (In Betriebne einfacher durch Beispielsweise Daylies).

## 1.7 Was ist mir besonders gut gelungen, worauf bin ich richtig stolz?
Auch wenn der Meiste Code der CD (Teraform und Kamal) nicht von uns Geschrieben wurde bin Ich stolz darauf das dass Deployment der App so einfach funktioniert und auch wie wir als Gruppe gearbeitet haben, Wenn man fragen hat kann man die Einfach stellen und bekommt eine Einfach und schnelle Antwort.

# Lerneffekt (bezogen auf das Modul)
## 1.8. Was sollte beibehalten werden?
Ich bin mir Sicher, dass ich in dem Modul vieles Nützliches im bezug auf CI/CD gelernt habe, wie zum beispiel die Automatisierung von Lintern, Testing und auch git guidlines wie conventionall commits und auch bezüglich dem Deployment, das ganze modul war für mich zu grösseren Teilen neulande (Unitest, Docker, Linting, Github Interface) waren mir natürlich alles schon Bekannt aber noch nicht so vertraut oder in der Anwendung in diser Weise mit Workflows bewusst. Wie oben schon erwähnt sind Gerade das Deployment für mich sehr wichtig da es einen Guten und besseren vergleich zum Betrieb bietet.

## 1.9 Was würden sie Anders machen ?
Ich würde eigentlich nicht gross etwas an der Umstzung des Moduls ändern, mein Einziges Problem ist, das ich nicht immer sagen kann das ich etwas mitnehme und dann auch in dem Betrieb so anwenden kann, wir arbeiten zu grossen teilen mit Älteren und auch often mit mehr Niechen haften systemen die man so wie in dem Modul gezeigt nicht verwenden kann daher ist es nicht immer einfach einen Bezug des neuen wissens in den Betrieb zu führen und dort auch anzuwenden, wenn überhaupt möglich.

