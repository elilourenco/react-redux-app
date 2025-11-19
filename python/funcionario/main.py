from Funcionario import Funcionario, Desenvolvedor, Designer

func1=Desenvolvedor("software developer",1375)
func2= Designer("analista de sistemas",1400)

print(func1.descricao_cargo(),func1.calcular_salario())
print(func2.descricao_cargo(), func2.calcular_salario())



