Feladatok
Kalózok
Készíts egy Pirate osztályt. Bármilyen tagváltozót vagy metódust hozzáadhatsz az osztályhoz, de a következő metódusokat definiálnod kell:

drinkSomeRum() - egy kicsit részegebbé teszi a kalózt
howsItGoingMate() - meghívásra a kalóz válaszol attól függően, hogy a drinkSomeRun hányszor volt meghívva:
0-4-szer: "Meg egy korsoval!"
különben: "♫ Nyaaar van es semmi baaj, ... ♪", a kalóz kidől, és kialussza magát.
Ha idáig eljutottál, megpróbálhatod a következőt.

die() - ez megöli a kalózt. Ez esetben, DrinkSomeRum, stb. meghívása csak azzal a szöveggel tér vissza, hogy A kaloz halott..


brawl(otherPirate) - a kalóz megküzd egy másik kalózzal (ha a másik életben van) és 1/3 az esélye, hogy az egyik meghal, a másik meghal vagy mindketten kidőlnek.
És... ha már idáig eljutottál...

Adj hozzá egy papagájt.

A kalózhajó
A hely a kalózoknak

Készíts egy Ship osztályt.
A Ship tároljon Pirate példányokat egy listában, mint a legénység és legyen egy kapitány, aki szintén egy Pirate.

Mikor egy Ship elkészül, ne legyen sem legénysége, sem kapitánya
A fillShip() metódussal tudjuk a hajót megtölteni kalózokkal és a kapitánnyal.

Ez megtölti a hajót egy kapitánnyal és véletlen számú kalózzal.



--------------------------------------------------

A hajók legyenek rendesen reprezentálva a parancssorban, tartalamzzanak információt

A kapitányok által megivott rumról, állapotukról (kidőlt, meghalt)

A legénység élő kalózainak számáról

A hajóknak legyen egy metódusa, mellyel más hajókkal tudnak csatázni: ship.battle(otherShip)
térjen vissza true értékkel, ha az aktuális hajó (this) győz
a hajó akkor tud győzni, ha a kiszámolt pontja magasabb

pont kiszámolása: Élő kalózok száma a legénységben - A kapitány által elfogyasztott rumok száma

A vesztes csapat véletlen számú veszteséget könyvel el (meghalnak)
A győztes kapitány és a legénység bulit tart, ahol véletlen számú rum fogy :)

CsataApp
Készíts egy BattleApp osztályt, ahol tudsz hajókkal csatázni
Készíts két hajót, töltsd fel őket kalózokkal

Csatázz!

Armada

Készíts egy Armada osztályt

Tartalmazza Ship-ek listáját

Legyen egy armada.war(otherArmada) metódusa, ahol két hajóhad tud háborúba keveredni

Úgy kellene működnie, mint egy merge sort rendezésnek
Az első hajóhad első hajója csatázik a másik had első hajójával
A vesztes hajó megsemmisül, így a hajóhad következő hajója lép játékba

Ha bármelyik hajóhad a hajóinak végére ér, elveszíti a háborút
Térjünk vissza true értékkel, ha this a győztes

WarApp
Készíts egy WarApp osztályt, ahol tudsz hajóhadakkal csatázni
Készíts két hajóhadat, töltsd fel őket hajókkal
Háborúzz!