# Inhalt
## 1.1. Welche verschiedenen Themen beinhaltete der Sprint?
In diesem Sprint haben wir grosstenteils testing und das Deployment angeschaut. Darunter was der Unterschied zwischen Unit-Test und Integration-Test
ist und wann diese Tests angewendet werden sollen. Damit diese Test aber nicht nur lokal laufen, schauten wir und das CI (Git Actions) an, damit die
Tests direkt bei einem Push nochmals durchlaufen und die richtigkeit unseres Codes dadurch sichergestellt wird. Anschliessend mussten wir und mit dem Thema Docker ausseinandersetzen, darunter docker-compose, .dockerignore files
und was alles in so ein File hinzugefügt werden soll. Dabei haben wir uns auch angeschaut wie container erstellt werden können und was der best practice ist,
zum Docker so einzurichten, dass es bei allen gleich lauft. Nun als wir dies geschafft haben, beschäftigten wir und mit dem Deployment, bei welchem wir AWS
benutzt haben um zu Testen, ob wir unsere App deployen können.

## 1.2. Was haben die Themen mit dem Begriff DevOps zu tun?
In Der DevOps wird nicht nur geschaut, ob der Code funtioniert, sondern auch wie der Code am besten getestet werden kann, damit sich später keine ungewollten
Fehler ins Programm schleichen. Die Tests werden dafür genutzt um zu prüfen, ob der Code wirklich so lauft, wie er laufen soll. 
CI ist eins von den Hauptthemen in der DevOps. In der DevOps dreht sich viel um die Automatisierung, welches wir mithilfe von Github Actions gemacht haben.
Uns ist es gelungen die ausführung von Tests automatisch ausführen zu lassen, wenn ein Code ins Repository gepushed wird. Dadurch kann es nicht passieren, 
dass ausversehen das Testing vergessen wurde und Code mit Fehlern gepushed wird.
Mit Docker haben wir bewirkt, dass das Programm bei jedem gleich lauft und so jeder auf dem Gleichen Stand steht. Dazu hilft Docker auch bei der Automatisierung,
da man nur mit einem Befehl die Möglichkeit hat das ganze Programm zu starten.
Zusammengefasst kann man sagen, dass jeder dieser Themen dafür sorgt den Programmieralltag an dem Projekt zu erleichtern und die Effizienz zu verbessern.

# Gruppendynamik
## 1.3. Hat sich die Kommunikation im Team verändert seit dem ersten Sprint?
Meiner Meinung nach wurde die Kommunikation seit dem Ersten Sprint immer wie besser. In unserem ersten Sprint war es schon so, dass wir gut 
zusammen an dem Projekt arbeiten konnten. Falls jemand ein Problem hatte, kam direkt jemand vorbei und hat ihn dabei unterstützt. In diesem Sprint habe ich
aber auch gemerkt, dass wir in unserer Gruppe viel besser Vorankommen, da jeder sich 100% beteiligen wollte. Dadurch hat sich unser Workflow verbessert und 
unser Team konnte noch viel Effizienter arbeiten. Ich denke eine Grosse änderung zum Letzten Sprint war, dass wir nun mit dem Programmieren angefangen haben
und so alle im Team motivierter waren unsere Website aufzubauen und zu sehen, was wir alles schon erreicht haben.


## 1.4. Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?
Eine Punkt, bei welchem wir dachten es würde uns schwerer Fallen war das aufsetzen von AWS. Wir haben von vielen Personen mitgekriegt, dass
das aufsetzen von AWS sich als Schwieriger als erwartet herausstellen kann, da sehr viele Kleine Einstellungen gemacht werden müssen. Doch zum
glück war das bei uns nicht der Fall. Wir haben uns zusammengesetzt. Einen Plan gemacht wie wir jetzt am besten anfangen und so
hat es relativ reibungslos funktioniert.

# Lernzuwachs
## 1.5. Was kann ich nun mehr als vorher?
Da ich noch nicht so viel erfahrung mit React, Tailwind hatte und im Geschäft grösstenteils Angular benutze, musste ich mich erst wieder mit React zurechtfinden.
Als ich das aber geschafft und mit dem Ersten Programmierticket (NavBar Programmieren) gestarten habe, bin ich vertrauter mit React und Tailwind geworden und 
konnte das Ticket souverän abschliessen.

## 1.6. Welche Schwierigkeiten gab es?
Eine Schwierigkeit war die Suche nach einem neuen Ticket, welches man bearbeiten könnte. Die meisten Tickets waren aufbauend. Das heisst zuerst musste ein bestimmtes
Ticket gelösst werden, bevor das Nächste angefangen werden konnte, da das eine vom Forschritt des anderen abhängig war. Das liegt an der Tatsache, dass unser
Projekt aus einer grossen Hauptfunktion und zwar dem Canvas besteht. Wenn dieses noch nicht abgeschlossen ist, wird es schwierig andere Tickets zu machen, welche 
darauf aufbauend sind.
## 1.7. Was ist mir besonders gut gelungen, worauf bin ich richtig stolz?
Ich bin sehr stolz auf die NavBar, welche ich Programmiert habe. Dafür das ich nicht sehr viel Erfahrung mit React und Tailwind hatte, ist mir das Design und der 
Aufbau von der Navbar mithilfe von React sehr gut gelungen. Es hat mich erstaunt wie einfach es sein kann mit Tailwind etwas zu programmieren, wenn man den Dreh einmal
raus hat. Durch diesen Erfolg habe ich viel mehr Motivation mich noch mehr mit React und Tailwind zu beschäftigen und es auch für zukünftige Projekte zu verwenden.

# Lerneffekt (bezogen auf das Modul)
## 1.8. Was sollte beibehalten werden?
Ich finde den Aufbau vom Modul grundsätzlich sehr gut. Ich finde es sehr spannend was für Themen wir uns angeschaut haben und wir konnten dadurch auch sehr viel dazu lernen.
Das wir uns zum Beispiel nochmals in Docker eingelesen haben finde ich eine sehr wichtigen Punkt, da viele von uns nicht mehr ganz genau wissen wie ein Docker angewendet
werden kann und so konnten wir das Thema nochmals auffrischen.

## 1.9. Was würden Sie anders machen?
Durch die Partnerarbeit fiel es ab und zu schwer selber zu verstehen wie ein paar Sachen umgesetzt werden konnten,
da man sich bei ein Paar Sachen nicht beteiligen konnte. Ein Beispiel dafür wäre das integrieren von der CI. Dadurch, dass ich an Tickets gearbeitet habe und zwei andere vom Team
in der gleichen Zeit das aufsetzen von CI gemacht haben, wusste ich schlussendlich garnicht wie es in das Projekt integriert wurde, was meiner Meinung nach schade ist.
Eine Lösung dafür wäre, dass jeder das Aufsetzen erst einmal selber machen muss mit einem Testprojekt und anschliessend wird es erst ins Projekt integriert.

