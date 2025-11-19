# Boss.py
from Jogador import Jogador

class Boss():
    def __init__(self, hp, nome, ataque):
        self.hp = hp
        self.nome = nome
        self.ataque = ataque
        
        def atacar(self, alvo: "Jogador"):
            print(f"O bosszão {self.nome} atacou {alvo.nome} com {self.ataque * 4} pontos!")
            alvo.hp -= self.ataque * 4