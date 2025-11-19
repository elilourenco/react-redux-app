from abc import ABC, abstractmethod

class Funcionario(ABC):
    
    def __init__(self, descricao,salario):
        self.descricao=descricao
        self.salario=salario
        
    
    @abstractmethod
    def calcular_salario(self):
        pass
    
    @abstractmethod
    def descricao_cargo(self):
        pass
    

class Desenvolvedor(Funcionario):
    
        
    def descricao_cargo(self):
        print(f" A descricao do funcionario é {self.descricao}")
        
    def calcular_salario(self):
        
        print(f"O seu salario é {self.salario}")
    
    
class Designer(Funcionario):
    
        def descricao_cargo(self):
            print(f"A descricao do funcionario é {self.descricao}")
        
        def calcular_salario(self):
            print(f"O seu salario é {self.salario}")
        