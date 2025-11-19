from Jogador import Jogador
from Monstro import Monstro
from Boss import Boss


monstro= Monstro(5,"Mini slime",2)
jogador= Jogador(20,"Diogo",5)
boss=Boss(400,"bosivoxed",40)

Jogador.atacar(monstro)
Jogador.atacar(boss)
boss.atacar(jogador)
monstro.atacar(boss)


