# Fragen 

## 1.1. Welche verschiedenen Themen behandelten wir bis jetzt?
Bitte detailliert und nicht nur Stichworte!
## 1.2. Was haben die Themen mit dem Begriff DevOps zu tun?
# Gruppendynamik
## 1.3. Wie war die Zusammenarbeit im Team?
## 1.4. Was ist uns besonders gut gelungen, worauf sind alle richtig stolz?
# Lernzuwachs
## 1.5. Was kann ich mehr als vorher?
## 1.6. Welche Schwierigkeiten gab es?
## 1.7. Was ist mir besonders gut gelungen, worauf bin ich richtig stolz?
# Lerneffekt (auf Ihr Projekt bezogen)
## 1.8 Was sollte beibehalten werden?
## 1.9 Was sollte geändert werden?

## 1.1
### Woche 1:
Begonnen haben wir mit dem Einrichten des Github accounts welcher für dieses Modul zwingend wichtig ist um normall zu arbeiten. 
Daraufhin haben wir den AWS accoutn eingerichtet damit man über diesen Applikationen auf eine einfache VM deployen können
Danach haben wir mit einer kleinen Demoapp gestartet welche wird von dem Repo von herrn Hodel gecloned haben.
Nachdem jeder sein eigenes Repo erstellt hat haben wir das Automatische deployment (CD) getestet und haben so die App auf der VM Instanz des AWS laufen lassen.
Danach haben wir noch kurz gruppen für die Anstehenden arbeiten gebildet und das Repo erstellt.

## Woche 2:
Wir haben mit dem Besprechen begonne, was für eine Applikation wir machen wollen, und haben dann gestartet das Project zu Initialisieren, Issues inklusive aktzeptanzkriterien erfassen 
Danach haben wir die eigentliche Apllikation erstellt.

## Woche 3:
Wir haben besprochen wie GIT funktioniert und wie wir es verwenden sollen, dazu gehört branching und conventionall commits.
Danach haben wir uns Github actions angeschaut und unsere Erste Github Action erstellt, in diesem fall die Release-Please action

## Woche 4:
Wir haben uns Linting angeschaut und besprochen was dieser kann und nicht kann, dazu gehören zum beispiel einfach security checks oder allgemeine fehler im Code die er erkennen kann.
Wir haben auch verglichen wie sich ein Linter von einem formatierer wie Prettier unterscheidet und zwar in dem das ein Formatter "Dümmer ist als ein Linter" und er nur stuhr versucht das format bündig zu halten 
Danach haben wir eine einfache Linting action eingebaut und im anschluss noch an der Eingentlichen applikation gearbeitet

# 1.2
Bei DevOps geht es darum das man workflows verbessert und im Grundprinzip auch das ein Applikationsentwickler die Infrastruktur versteht und Applikationen auch darauf laufen lassen kann, ohne die zusätzliche hilfe von beispielsweise einem Systemtechniker.

Alles was wir angeschaut haben fällt unter die Punkte CI/CD dabei lag der schwerpunkt bis anhin unter CI sachen wie autmatische Linter oder Formatter helfen und dabei Formatierungen ein zu halten um die Lesbarkeit algemein zu verbessern und Linter unterstützen im vorzeitingen finden von Fehlern. Aus meiner sicht lag der Fokus aber auch zu grösseren teilen darunter wie wir uns im Team zusammen auf gewisse punkte einigen um somit einen Klaren standart zu etablieren, dadurch weiss jeder wie sachen zu bearbeiten sind und macht es einfacher für jeden im team seine aufgaben schnell und effizient zu bearbeiten. Unter CD fällt zum grössten teill die DemoApp die wir in Woche 1 angeschaut haben, das einfache deployen auf eine VM in AWS war dabei der Hauptpunkt, bei CD geht es darum möglichst einfach neuere Versionen zu veröffentlichen was mit solchen automatisationen gut funktioniert.

# 1.3
Prinzipiell war die zusammenarbeit gut jedoch war es nicht immer einfach zu schauen das immer jeder bescheid weiss was er zu tuen hat, man muss sich gut organisieren und aufgaben klar zuteilen was nicht immer zu 100% funktioniert hat. Aus meiner sicht lag es daran das keiner eine "Klare" führungsrolle übernommen hat.

# 1.4
Was uns gut gelungen ist ist das einhalten der Bedingungen die uns auferlegt wurden, jeder im Team hat stäts selbsständig kontrolliert was wir machen müssen und wie wir es zu machen haben (nach definition der Modulseite) dadurch wurde es einfacher sich zu organisieren, da man nicht immer abklären musste wie jemand etwas machen muss. (Effizinz steigt da nicht immer nachgefragt werden musste)

# Lernzuwachs
## 1.5
Ich kenne mich im algemeinen besser mit der Normalen Git infrastruktur aus, ausserdem kenne ich jetzt neu github actions mit denen man standart Tasks automatisieren, dies kannt ich bislang im Geschäft nur unter eigenen Seperaten tools die viel manueller sind.

## 1.6
Die Modulwebsite ist eigentlich sehr gut beschrieben jedoch musste ich manchmal 2-3 mal lesen um etwas wirklich zu verstehen weill es für mich relativ viel neues ist. dies liegt teilweise daran das wir im Geschäft andere Ableufe oder andere Guidlines haben.

## 1.7 
Ich finde das mit die Anpassung, an den neuen Workflow/Convention in git sehr gut gelungen ist und ich die grundlegenden Ideen dazu auch klar verstanden haben. Ausserdem ist mir aufgefallen wiso diese so definiert sind und welche vorteile dies bieten kann.

# Lerneffekt
## 1.8
Beibehalten werden sollte sicher die Selbsständigkeit die wir während dem Umsetzen bereits haben, damit meine ich wen Jemand etwas am machen ist sollten wir es so wie Aktuell beibehalten und weiter selbstständig arbeiten, da dies wie bereits erwähnt sehr gut funktioniert hat.

## 1.9
Was aus meiner sicht geändert werden muss, ist wie wir definieren wer was macht, wir brauchen jemanden der einen Klaren überblick vom ganzen hat und den Jeweiligen mitgliedern sagen kann was sie Aktuell zu tuen haben, aktuell ist nicht immer klar wer was wann machen soll.

