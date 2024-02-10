// Slovak version ***********************
function TextVG_sk(Num)
{
	var Text='';

	switch (Num)
	{
		case 1		:	Text = 'Typ hry - <b style="color:#d1d1d1">Klasika</b>: <b>6</b> hádaných kociek - <b>4</b> hádané pozície <i style="color:#92bcd8">(farebné kocky)</i>';
								break;
		case 2		:	Text = '<b style="color:#d1d1d1">Klasika</b> s <b style="color:#d1d1d1">mixovanými</b> kockami <i style="color:#92bcd8">(farebné kocky a kocky s číslami)</i>';
								break;
		case 3		:	Text = 'Nastavenie hry <b style="color:#d1d1d1">č. 12</b> - <b style="color:#d1d1d1">Klasika</b>, <b style="color:#d1d1d1">8</b> hádaných pozícií, <b style="color:#d1d1d1">25</b> hádaných kociek <i style="color:#92bcd8">(farebné kocky)</i>';
								break;
		case 4		:	Text = 'Kocky <b style="color:#d1d1d1">s náhodnými číslami</b> do hodnoty 999';
								break;
		case 5		:	Text = '<b style="color:#d1d1d1">Sivé kocky</b> s číslami v poradí';
								break;
		case 6		:	Text = '<b style="color:#d1d1d1">Rôzne nastavenia</b> hier';
								break;
		case 7		:	Text = '<b style="color:#d1d1d1">Všeobecné nastavenia</b> aplikácie';
								break;
		case 8		:	Text = 'Typ hry - <b style="color:#d1d1d1">Tréning</b>';
								break;
		case 9		:	Text = 'Kocky <b style="color:#d1d1d1">viditeľné vo výsledkovej</b> oblasti';
								break;
		case 10		:	Text = '<b style="color:#d1d1d1">Zobrazenie rekordov</b> jednotlivých hier';
								break;
		case 11		:	Text = '<b style="color:#d1d1d1">Archív</b> - zobrazenie úspešného riešenia danej hry';
								break;
		case 12		:	Text = 'Hra <b style="color:#d1d1d1">č. 4</b> v Tréningu';
								break;
		case 13		:	Text = 'Typ hry - <b style="color:#d1d1d1">Chaos</b> s mixovanými kockami <i style="color:#92bcd8">(farebné kocky a kocky s číslami)</i>';
								break;
		case 14		:	Text = 'Kocky číslované <b style="color:#d1d1d1">od nuly</b>';
								break;
		case 15		:	Text = 'Nastavenie <b style="color:#d1d1d1">jazykovej mutácie</b>';
								break;
		case 16		:	Text = 'Uložená <b style="color:#d1d1d1">obľúbená hra</b> č. 3 v Tréningu';
								break;
		case 17		:	Text = '<b style="color:#d1d1d1">Chaos</b> (25 kociek / 8 pozícií) - <b style="color:#92bcd8">brutálna výzva</b>';
								break;
		case 18		:	Text = '<b style="color:#d1d1d1">Chaos</b> v binárnom kóde <b style="color:#92bcd8">:)</b>';
								break;
		case 19		:	Text = 'Mastermind WinLogic v <b style="color:#d1d1d1">novej verzii</b>';
								break;
	}

	Text = '<b style="color:#c7bd94; font-size:110%">Mastermind - logická hra (WinLogic)</b><br /><br />' + Text;
	return (Text);
}

// Czech version ************************
function TextVG_cz(Num)
{
	var Text='';

	Text = TextVG_sk(Num);

	return (Text);
}

// English version **********************
function TextVG_en(Num)
{
	var Text='';

	switch (Num)
	{
		case 1		:	Text = 'Game type - <b style="color:#d1d1d1">Classic</b>: <b>6</b> searched cubes - <b>4</b> searched positions <i style="color:#92bcd8">(colored cubes)</i>';
								break;
		case 2		:	Text = '<b style="color:#d1d1d1">Classic</b> with <b style="color:#d1d1d1">mixed</b> cubes <i style="color:#92bcd8">(colored cubes and cubes with numbers)</i>';
								break;
		case 3		:	Text = 'Game settings <b style="color:#d1d1d1">no. 12</b> - <b style="color:#d1d1d1">Classic</b>, <b style="color:#d1d1d1">8</b> searched positions, <b style="color:#d1d1d1">25</b> searched cubes <i style="color:#92bcd8">(colored cubes)</i>';
								break;
		case 4		:	Text = 'Cubes <b style="color:#d1d1d1">with random numbers</b> to value 999';
								break;
		case 5		:	Text = '<b style="color:#d1d1d1">Gray cubes</b> with numbers in order';
								break;
		case 6		:	Text = '<b style="color:#d1d1d1">Various</b> games <b style="color:#d1d1d1">settings</b>';
								break;
		case 7		:	Text = '<b style="color:#d1d1d1">General</b> application <b style="color:#d1d1d1">settings</b>';
								break;
		case 8		:	Text = 'Game type - <b style="color:#d1d1d1">Training</b>';
								break;
		case 9		:	Text = 'Cubes <b style="color:#d1d1d1">visible in results</b> area';
								break;
		case 10		:	Text = '<b style="color:#d1d1d1">Showing records</b> for each game';
								break;
		case 11		:	Text = '<b style="color:#d1d1d1">Archive</b> - see the successful solution of the game';
								break;
		case 12		:	Text = 'Game <b style="color:#d1d1d1">no. 4</b> in Training';
								break;
		case 13		:	Text = 'Game type - <b style="color:#d1d1d1">Chaos</b> with mixed cubes <i style="color:#92bcd8">(colored cubes and cubes with numbers)</i>';
								break;
		case 14		:	Text = 'Cubes with numbers - <b style="color:#d1d1d1">from zero</b>';
								break;
		case 15		:	Text = 'Setting - <b style="color:#d1d1d1">Language</b>';
								break;
		case 16		:	Text = '<b style="color:#d1d1d1">Favourite game</b> no. 3 in Training';
								break;
		case 17		:	Text = '<b style="color:#d1d1d1">Chaos</b> (25 cubes / 8 positions) - <b style="color:#92bcd8">brutal challenge</b>';
								break;
		case 18		:	Text = '<b style="color:#d1d1d1">Chaos</b> in binary code <b style="color:#92bcd8">:)</b>';
								break;
		case 19		:	Text = 'The <b style="color:#d1d1d1">new version</b> of Mastermind WinLogic';
								break;
	}

	Text = '<b style="color:#c7bd94; font-size:110%">Mastermind - Logical Game (WinLogic)</b><br /><br />' + Text;
	return (Text);
}

