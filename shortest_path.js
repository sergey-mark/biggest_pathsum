


function s(tab, px, py, lenhei, tabres, bol)
{
	console.log('px' + px);
	console.log('py' + py);
	console.log('len' + lenhei.l);
	console.log('hei' + lenhei.h);
        console.log(tabres);
	console.log('previous tabres' + tabres[py][(px +1)]);
        console.log(tabres);
	if (px < (lenhei.l-1) && !bol)		// Droite
	{
		console.log('--> droite' + tab[py][px]);
		console.log('--> droite' + tabres[2][2]);
		console.log('--> droite');
		tabres[py][px] = tab[py][px] + tabres[py][px + 1];
	}
	else if (py < (lenhei.h-1) && bol)	// Bas
	{
		tabres[py][px] = tab[py][px] + tabres[py + 1][px];
		console.log('--> bas' + tab[py][px]);
		console.log('--> bas' + tabres[py + 1][px]);
		console.log('--> bas');
	}
	else
	{
    		tabres[py][px] = tab[py][px];
    		console.log('tabres:' + tabres[py][px]);
	}
	console.log('feuil:' + tabres[py][px]);
	return(tabres[py][px]);
}

function max_sum_matrice_rec(tab, p, lenhei)
{
    var score = 0;
	
    var tabres = Array(Array(), Array(), Array());
    while (p.y > 0)
    {
	p.x = lenhei.l; 
    	while (p.x > 0)
    	{
		tabres[p.y - 1][p.x - 1] = Math.max(s(tab, p.x-1, p.y-1, lenhei, tabres, 0), s(tab, p.x-1, p.y-1, lenhei, tabres, 1));
        	console.log('tabres after first');
        	console.log(tabres);
    		console.log('tabres:' + tabres[p.y - 1][p.x - 1]);
		p.x--;
    	}
	p.y--;
    }
    console.log('tabres : ');
    return (tabres);
}

function find_path(tab, tabres, p, lenhei)
{
    var s = tabres[0][0];

    console.log(' => ' + tab[0][0] + ' ');
    while (s > 0 && (p.x < (lenhei.l -1) || p.y < (lenhei.h -1)))
    { 
        console.log('pos.y:' + p.y + ', x:' + p.x);
        console.log('s:' + s);
	if (tabres[p.y][p.x + 1] == s)
	{
        	console.log(' + ');
    		console.log(tab[p.y][p.x + 1]);
		p.x++;
	}
	else if (tabres[p.y + 1][p.x] == s)
	{
        	console.log(' + ');
    		console.log(tab[p.y + 1][p.x]);
		p.y++;
	}
	s--;
    }
    console.log(' = ' + tabres[0][0] + ' !');
}

function main()
{
  //console.log(pos.x);
  var tab = [
  [1, 2, 3],
  [1, 2, 5],
  [3, 4, 5]
	];
 
  var lenhei = {h : tab.length, l: tab[0].length};
  var pos = {x : lenhei.h, y: lenhei.l};
  var resultat = max_sum_matrice_rec(tab, pos, lenhei);
  console.log('resultat : ' + resultat);
  pos = {x : 0, y: 0};
  find_path(tab, resultat, pos, lenhei);
}

main();
