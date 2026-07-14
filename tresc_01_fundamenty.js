/* ===== AKADEMIA POKOLEN I TYPOW - CZESC 01: FUNDAMENTY ===== */
const CONTENT = {};

CONTENT.intro = `
<div class="hero">
  <span class="eyebrow" style="background:rgba(34,197,94,.18);color:#bbf7d0;border-color:rgba(34,197,94,.3)">Wersja interaktywna</span>
  <h1>Akademia Pokoleń i Typów Zakupowych</h1>
  <p>Ten sam skrypt nie działa tak samo na 60-latka i na 22-latka. Nie działa tak samo na kogoś, kto chce decydować sam i szybko, jak na kogoś, kto potrzebuje danych i czasu. Ta akademia łączy dwa wymiary — <b>pokolenie</b> (Baby Boomers, X, Millenialsi, Z) i <b>typ osobowości zakupowej</b> (model DISC: Dominujący, Wpływowy, Stały, Sumienny) — w jedną spójną mapę 16 kombinacji, prowadzoną jednym wspólnym szkieletem: metodą Challenger Sale, bez presji i bez sprzeczności między modułami.</p>
  <div class="stat-row">
    <div class="stat"><b>42</b><span>modułów</span></div>
    <div class="stat"><b>4</b><span>pokolenia</span></div>
    <div class="stat"><b>4</b><span>typy osobowości (DISC)</span></div>
    <div class="stat"><b>16</b><span>gotowych kombinacji podejścia</span></div>
  </div>
  <div class="chips">
    <span class="chip">DISC</span><span class="chip">Challenger Sale</span><span class="chip">SPIN Selling</span><span class="chip">Baby Boomers</span>
    <span class="chip">Pokolenie X</span><span class="chip">Millenialsi</span><span class="chip">Pokolenie Z</span>
  </div>
</div>

<h3>Jedna zasada, żeby nic się tu nie kłóciło</h3>
<div class="quote"><b>Zasada numer jeden tej akademii:</b> Challenger Sale (Teach — Tailor — Take Control) to jedyny szkielet rozmowy w całym kursie. Nie ma tu osobnego „stylu dociskania" na zamknięcie, obok „metody Challenger" na środek rozmowy — bo to prowadzi do sprzeczności: raz uczysz klienta czegoś nowego i dopasowujesz się do niego, raz na siłę pchasz go do podpisu tą samą techniką co wszystkich. W tej akademii <b>Take Control</b> zawsze oznacza to samo: pewne, spokojne prowadzenie rozmowy do konkretnej decyzji — dopasowane do tego, JAK dana osoba chce podejmować decyzje, nigdy wbrew temu.</div>

<h3>Jak zbudowana jest ta akademia</h3>
<p>Część <b>I</b> daje Ci dwa narzędzia: model <b>DISC</b> (jak rozpoznać typ osobowości zakupowej w pierwszej minucie) i <b>Challenger Sale</b> (jak uczyć, dopasowywać i prowadzić rozmowę — niezależnie kogo masz przed sobą). Części <b>II–V</b> przechodzą przez cztery pokolenia — dla każdego najpierw ogólna charakterystyka zakupowa, potem cztery moduły: to samo pokolenie skrzyżowane z każdym z 4 typów DISC. Część <b>VI</b> to synteza — macierz wszystkich 16 kombinacji na jednej stronie i trening szybkiego rozpoznawania w pierwszych 30 sekundach kontaktu. Część <b>VII</b> schodzi jeszcze głębiej — pokazuje MECHANIZM za tym wszystkim: sekwencję pytań <b>SPIN Selling</b> i to, jak prowadzi klienta krok po kroku do decyzji bez presji, na pełnej macierzy 16 symulacji rozmów — po jednej na każdą z 16 kombinacji pokolenie×typ — w różnych kanałach (teren, telefon, wideorozmowa korporacyjna, czat/social media).</p>

<div class="card">
<p><b>Dlaczego to ma znaczenie w praktyce.</b> Weź dwie osoby z tego samego pokolenia — oboje Millenialsi, 30 lat, podobne zarobki. Pierwsza chce w 5 minut zobaczyć liczby i podjąć decyzję sama (typ D). Druga chce najpierw poczytać opinie, zapytać znajomych, przespać się z tematem (typ S). Zaproponujesz im identyczny skrypt — jednej się spodoba tempo, drugą przestraszysz pośpiechem. Pokolenie mówi Ci <b>czego</b> szukają (wartości, kanały, język). Typ osobowości mówi Ci <b>jak</b> chcą do tego dojść. Potrzebujesz obu wymiarów naraz.</p>
</div>
`;

CONTENT.disc = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/dcac51d81_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 1 · Fundamenty</span>
<h2>Model DISC: 4 typy osobowości zakupowej</h2>
<p class="lede">DISC to jeden z najczęściej używanych modeli w treningach sprzedażowych na świecie — prosty, sprawdzony i możliwy do rozpoznania w pierwszej minucie kontaktu, bez testów psychologicznych. Cztery litery, cztery zupełnie różne sposoby podejmowania decyzji zakupowej.</p>

<h3>Cztery typy w skrócie</h3>
<div class="tiles">
  <div class="tile"><div class="big">D</div><div class="lbl">Dominujący — szybki, nastawiony na wynik i kontrolę. Chce sedna, nie lubi tracić czasu.</div></div>
  <div class="tile"><div class="big">I</div><div class="lbl">Wpływowy — relacyjny, entuzjastyczny. Kupuje emocjami i historiami, decyduje szybko na sympatii.</div></div>
  <div class="tile"><div class="big">S</div><div class="lbl">Stały — spokojny, lojalny, ostrożny wobec zmian. Potrzebuje czasu i poczucia bezpieczeństwa.</div></div>
  <div class="tile"><div class="big">C</div><div class="lbl">Sumienny — analityczny, potrzebuje danych i dowodów. Decyduje na podstawie faktów, nie relacji.</div></div>
</div>

<h3>Jak rozpoznać typ w pierwszej minucie</h3>
<p>Nie pytasz wprost „jaki Pan ma typ osobowości" — obserwujesz <b>tempo mówienia</b>, <b>pierwsze pytanie</b> i <b>ton</b>. D przerywa i pyta „ile to kosztuje i kiedy montaż" zanim skończysz zdanie. I zaczyna od pogawędki, pyta o Ciebie, śmieje się szybko. S słucha długo, mówi wolno, pyta „a czy to na pewno bezpieczne / sprawdzone". C zadaje pytania szczegółowe — o parametry, gwarancję, dokumenty — i notuje albo dopytuje o źródła danych.</p>

<table class="tbl">
<tr><th>Sygnał</th><th>D</th><th>I</th><th>S</th><th>C</th></tr>
<tr><td>Tempo mówienia</td><td>szybkie, konkretne</td><td>szybkie, chaotyczne</td><td>wolne, spokojne</td><td>wolne, precyzyjne</td></tr>
<tr><td>Pierwsze pytanie</td><td>„ile i kiedy"</td><td>osobiste / o Ciebie</td><td>„czy to bezpieczne"</td><td>„jakie parametry"</td></tr>
<tr><td>Boi się</td><td>stracić czas i kontrolę</td><td>odrzucenia, nudy</td><td>zmiany, ryzyka</td><td>błędu, braku danych</td></tr>
<tr><td>Chce od Ciebie</td><td>sedna i tempa</td><td>relacji i entuzjazmu</td><td>spokoju i gwarancji</td><td>dowodów i szczegółów</td></tr>
</table>

<div class="warn"><b>Ważne zastrzeżenie:</b> DISC to model typów DOMINUJĄCYCH, nie szufladka na całe życie. Większość ludzi to mieszanka dwóch typów, a stres czy zmęczenie mogą chwilowo zmienić zachowanie. Model służy do szybkiego dopasowania TEMPA i JĘZYKA rozmowy — nie do etykietowania klienta na stałe.</div>

<div class="acc">
  <div class="acc-h" onclick="toggleAcc(this)">Przykład z życia — ten sam produkt, dwie zupełnie różne rozmowy <span class="ico">+</span></div>
  <div class="acc-b"><p>Doradca OZE prezentował tę samą instalację dwóm sąsiadom tego samego dnia. Pierwszy przerywał, pytał o cenę i termin — doradca odpowiedział liczbami w 3 zdaniach i umówił montaż (typ D, zadowolony z tempa). Drugi chciał zobaczyć certyfikaty, porównania producentów i referencje — te same 3 zdania liczb sprawiłyby wrażenie naciągania. Doradca zwolnił, pokazał dokumentację, dał czas — i dopiero wtedy usłyszał „tak". Produkt identyczny, podejście — całkowicie różne.</p></div>
</div>

<div class="quiz">
  <div class="q">Klient po 10 sekundach mówi: „Dobra, ile to kosztuje i kiedy możecie zamontować?". Jaki to najprawdopodobniej typ?</div>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — D chce sedna i tempa, nie lubi tracić czasu na dygresje. Odpowiadaj konkretem, nie historią.','')">Dominujący (D)</button>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','Stały (S) raczej zapyta o bezpieczeństwo i poprosi o czas do namysłu, nie przyspieszy rozmowy w ten sposób.')">Stały (S)</button>
  <div class="fb"></div>
</div>
`;

CONTENT.challenger = `
<img class="mod-icon reveal" src="https://media.base44.com/images/public/69cd0d788375531a373c98b1/dcac51d81_generated_image.png" alt="" loading="lazy">
<span class="eyebrow">Moduł 2 · Fundamenty</span>
<h2>Challenger Sale: Teach, Tailor, Take Control — bez nacisku</h2>
<p class="lede">Badania Matthew Dixona i Brenta Adamsona (CEB/Gartner, ponad 6000 handlowców) pokazały, że najlepsi sprzedawcy nie są ani najbardziej relacyjni, ani najbardziej ustępliwi — są <b>Challengerami</b>: uczą klienta czegoś nowego o jego własnej sytuacji, dopasowują to do konkretnej osoby i pewnie prowadzą rozmowę do decyzji. W tej akademii to JEDYNY szkielet — każdy z 16 modułów pokolenie×typ pokazuje, jak go zastosować, nigdy jak go zastąpić presją.</p>

<h3>Trzy elementy, jedna definicja na cały kurs</h3>
<div class="tiles">
  <div class="tile"><div class="big">Teach</div><div class="lbl">Dajesz klientowi wgląd, którego jeszcze nie miał — nie powtarzasz to, co już wie z internetu</div></div>
  <div class="tile"><div class="big">Tailor</div><div class="lbl">Ten sam wgląd inaczej podajesz D, inaczej C — inne tempo, inny język, inne dowody</div></div>
  <div class="tile"><div class="big">Take Control</div><div class="lbl">Spokojnie prowadzisz do konkretnej decyzji — nie unikasz tematu ceny i terminu, ale też nie naciskasz wbrew temu, jak ta osoba chce decydować</div></div>
</div>

<h3>Gdzie w tej akademii kończy się Take Control, a zaczynałaby się presja</h3>
<p>Take Control oznacza: mówisz wprost o pieniądzach i konkretnym następnym kroku, nie pozwalasz rozmowie rozmyć się w nieskończoność. NIE oznacza: tego samego assumptive close na każdym, ignorowania sygnału „potrzebuję czasu" u typu S, czy pomijania pytań o dane u typu C, bo „chcesz domknąć dziś". W modułach pokolenie×typ zawsze znajdziesz DOPASOWANE zdanie domykające — nigdy jeden uniwersalny szablon nacisku.</p>

<div class="quote"><b>Cytat z badania:</b> „Klienci nie chcą kogoś, kto się z nimi zgadza we wszystkim — chcą kogoś, kto ich czegoś nauczy i ma odwagę poprowadzić rozmowę do decyzji." — Dixon & Adamson, „The Challenger Sale". W tej akademii „poprowadzić" znaczy dopasować się do tempa klienta, nie narzucić swojego.</div>

<h3>Jak to wygląda w praktyce — jeden szkielet, cztery realizacje</h3>
<div class="card">
<p><b>Ten sam insight</b> — „instalacja OZE finansowana kredytem 0% z umorzeniem może się bilansować już w pierwszym roku" — <b>Teach</b> dla wszystkich. Ale <b>Tailor + Take Control</b> różni się: D dostaje to w jednym zdaniu i pytanie „umawiamy termin?". I dostaje to jako historię sąsiada i pytanie „chce Pan być pierwszy w okolicy?". S dostaje to spokojnie, z czasem na pytania, i propozycję „sprawdźmy to bez zobowiązań, zdecyduje Pan później". C dostaje wyliczenie i źródła danych, i pytanie „które dane chciałby Pan jeszcze zweryfikować, żeby móc zdecydować?".</p>
</div>

<div class="quiz">
  <div class="q">Klient typu S mówi „muszę to przemyśleć". Co to znaczy w duchu Take Control z tej akademii?</div>
  <button class="opt" data-ok="0" onclick="quizPick(this,false,'','To złamałoby zasadę tej akademii — Take Control nie oznacza ignorowania naturalnego tempa decyzji typu S, tylko pewne prowadzenie W JEGO tempie.')">Naciskam dalej, bo inaczej stracę klienta</button>
  <button class="opt" data-ok="1" onclick="quizPick(this,true,'Dokładnie — Take Control dla typu S to zaproponowanie konkretnego, bezpiecznego następnego kroku (np. termin telefonu za 2 dni), nie porzucenie rozmowy ani nie naciskanie na podpis dziś.','')">Proponuję konkretny, mały następny krok z jasnym terminem, zamiast zostawiać temat otwarty w nieskończoność</button>
  <div class="fb"></div>
</div>
`;
